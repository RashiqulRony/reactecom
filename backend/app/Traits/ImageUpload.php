<?php

namespace App\Traits;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Image;

trait ImageUpload
{
    public $basePath = '';
    public $originalPath = '';
    public $file = '';
    public $name = '';
    public $thumbPath = '';
    public $thumb = false;
    public $storageFolder = 'storage/';
    public $imageResize = [];
    public $thumbResize = [300, 300];

    //Common File Upload Function...
    private function upload()
    {
        $file = $this->file;
        if ($this->name) {
            $fileName = Str::slug($this->name, '-').'.'.$file->getClientOriginalExtension();
        } else {
            $newName = str_replace('.'.$file->getClientOriginalExtension(), '', $file->getClientOriginalName());
            $fileName = time().'-'.Str::slug($newName, '-').'.'.$file->getClientOriginalExtension();
        }
        $data['name'] = $fileName;
        $data['originalName'] = $file->getClientOriginalName();
        $data['size'] = $file->getSize();
        $data['mime_type'] = $file->getMimeType();
        $data['ext'] = $file->getClientOriginalExtension();
        $data['url'] = url($this->storageFolder.$this->originalPath.$data['name']);

        //If real image need to resize...
        if (!empty($this->imageResize)) {
            $file = Image::make($file)->resize($this->imageResize[0], $this->imageResize[1]);
            Storage::put($this->originalPath.'/'.$fileName, (string) $file->encode());
        } else {
            Storage::putFileAs($this->originalPath, $file, $data['name']);
        }

        if ($this->thumb) {
            Image::make($this->storageFolder.$this->originalPath.$data['name'])
                ->resize($this->thumbResize[0], $this->thumbResize[1])
                ->save($this->storageFolder.$this->thumbPath.'/'.$data['name']);
        }
        return $data;
    }

    //Upload Image ("$definePath" and "$definePath/thumb") folder....
    public function imageUpload($requestFile, $path, $thumb = false, $name = null, $imageResize = [], $thumbResize = [300, 300])
    {
        //Path Create...
        $realPath = $this->basePath.$path.'/';
        if (!Storage::exists($realPath)) {
            Storage::makeDirectory($realPath);
        }

        if (!Storage::exists($realPath.'thumb') && $thumb) {
            Storage::makeDirectory($realPath.'thumb');
        }

        $this->file = $requestFile;
        $this->originalPath = $realPath;
        $this->thumbPath = $realPath.'thumb';
        $this->thumb = $thumb;
        $this->name = $name;
        $this->imageResize = $imageResize;
        $this->thumbResize = $thumbResize;
        return $this->upload();
    }


    //Upload Image ("$definePath" and "$definePath/thumb") folder....
    public function imageUploadBase64($base64, $path, $name = null)
    {
        //Path Create...
        if ($name) {
            $realPath = $this->basePath.$path.'/'.$name.'/';
        } else {
            $realPath = $this->basePath.$path.'/';
        }
        if (!Storage::exists($realPath)) {
            Storage::makeDirectory($realPath);
        }
        $extension = explode('/', explode(':', substr($base64, 0, strpos($base64, ';')))[1])[1];   // .jpg .png .pdf
        $replace = substr($base64, 0, strpos($base64, ',')+1);
        $image = str_replace($replace, '', $base64);
        $image = str_replace(' ', '+', $image);
        if ($name) {
            $imageName = $name . '_'. Str::random(10).'.'.$extension;
        } else {
            $imageName = Str::random(10).'.'.$extension;
        }
        Storage::disk('public')->put($realPath.'/'.$imageName, base64_decode($image));

        $data['name'] = $imageName;
        $data['size'] = $this->getBase64ImageSize($base64);
        $data['url'] = url($this->storageFolder.$realPath.$data['name']);

        return $data;

    }

    //Upload Video in "$definePath" folder....
    public function videoUpload($requestFile, $path, $name = null)
    {
        //Path Create...
        $realPath = $this->basePath.$path.'/';
        if (!Storage::exists($realPath)) {
            Storage::makeDirectory($realPath);
        }

        $this->file = $requestFile;
        $this->originalPath = $realPath;
        $this->name = $name;
        return $this->upload();
    }

    //Upload AnyFile in "$definePath" folder....
    public function anyUpload($requestFile, $path, $name = null)
    {
        //Path Create...
        $realPath = $this->basePath.$path.'/';
        if (!Storage::exists($realPath)) {
            Storage::makeDirectory($realPath);
        }

        $this->file = $requestFile;
        $this->originalPath = $realPath;
        $this->name = $name;
        return $this->upload();
    }


    //Upload Content in "$definePath" folder....
    public function contentUpload($content, $path, $name)
    {
        //Path Create...
        $realPath = $this->basePath.$path.'/';
        if (!Storage::exists($realPath)) {
            Storage::makeDirectory($realPath);
        }

        Storage::put($name, $content);

        $data['name'] = $name;
        $data['url'] = $path.'/'.$name;
        return $data;
    }

    //Only thumb image create in "$definePath/thumb" folder....
    public function thumb($path, $file, $thumbPath = false, $thumbWidth = 300, $thumbHeight = 300)
    {
        $realPath = $this->basePath.$path;
        if (!$thumbPath) {
            $thumbPath = $this->basePath.$path.'/thumb';
        }

        if (!Storage::exists($thumbPath)) {
            Storage::makeDirectory($thumbPath);
        }

        $img = Image::make($this->storageFolder.$realPath.'/'.$file)
            ->resize($thumbWidth, $thumbHeight)
            ->save($this->storageFolder.$thumbPath.'/'.$file);

        if (isset($img->filename)) {
            return true;
        } else {
            return false;
        }
    }

    //Delete file "$definePath" folder....
    public function imageAndFileDelete($path, $file, $thumb = false)
    {
        $path = $this->basePath.$path.'/';
        if (Storage::exists($path.'/'.$file)) {
            Storage::delete($path.'/'.$file);

            if ($thumb) {
                Storage::delete($path.'/thumb/'.$file);
            }
            return true;
        }
        return false;
    }


    public function getBase64ImageSize($base64Image){ //return memory size in B, KB, MB
        try{
            $size_in_bytes = (int) (strlen(rtrim($base64Image, '=')) * 3 / 4);
            $size_in_kb    = $size_in_bytes / 1024;
            $size_in_mb    = $size_in_kb / 1024;

            return $size_in_bytes;
        }
        catch(\Exception $e){
            return $e->getMessage();
        }
    }

}
