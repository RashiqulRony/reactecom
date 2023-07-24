<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Traits\ImageUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{

    use ImageUpload;
    public $_filePath = 'product';

    public function index()
    {
        try {
            $data = Product::join('categories', 'products.category_id', '=', 'categories.id')
                ->select('products.*', 'categories.name as category_name')
                ->orderBy('products.created_at', 'DESC')->get();

            return response()->json([
                'status' => true,
                'data' => $data,
                'message' => "Date get successfully.!"
            ]);

        } catch (\Exception $exception) {
            return response()->json([
                'status' => false,
                'message' => $exception->getMessage()
            ]);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'category'          => 'required|exists:categories,id',
            'slug'              => 'required|max:255|unique:products,slug',
            'name'              => 'required|max:255',
            'sell_price'        => 'required',
            'stock'             => 'required',
            'original_price'    => 'required',
            'description'       => 'required',
            'image'             => 'required',
            'meta_title'        => 'required|max:255',
            'status'            => 'required|in:Active,Inactive',
            'feature'           => 'required|in:Yes,No',
            'popular'           => 'required|in:Yes,No',
        ]);

        if($validator->fails()) {
            return response()->json(['status' => false, 'errors'=> $validator->messages()]);
        }

        try {
            if ($request->hasFile('image')) {
                $file  = $this->imageUpload($request->file('image'), $this->_filePath, '', '', [300, 300]);
                $image = $file['name'];
            }

            Product::create([
                'category_id'       => $request->category,
                'slug'              => $request->slug,
                'name'              => $request->name,
                'brand'             => $request->brand,
                'sell_price'        => $request->sell_price,
                'stock'             => $request->stock,
                'original_price'    => $request->original_price,
                'description'       => $request->description,
                'image'             => $image ?? null,
                'meta_title'        => $request->meta_title,
                'meta_keyword'      => $request->meta_keyword,
                'meta_description'  => $request->meta_description,
                'status'            => $request->status,
                'feature'           => $request->feature,
                'popular'           => $request->popular,
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Product save Successfully'
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                'status' => false,
                'message' => $exception->getMessage()
            ]);
        }

    }

    public function show($id)
    {
        try {
            $data = Product::find($id);
            return response()->json([
                'status' => true,
                'data' => $data,
                'message' => "Date get successfully.!"
            ]);

        } catch (\Exception $exception) {
            return response()->json([
                'status' => false,
                'message' => $exception->getMessage()
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'category'          => 'required|exists:categories,id',
            'slug'              => 'required|unique:products,slug,'.$id,
            'name'              => 'required|max:255',
            'sell_price'        => 'required',
            'stock'             => 'required',
            'original_price'    => 'required',
            'description'       => 'required',
            'meta_title'        => 'required|max:255',
            'status'            => 'required|in:Active,Inactive',
            'feature'           => 'required|in:Yes,No',
            'popular'           => 'required|in:Yes,No',
        ]);

        if($validator->fails()) {
            return response()->json(['status' => false, 'errors'=> $validator->messages()]);
        }

        try {
            $data = Product::find($id);
            $image = $data->image;

            if ($request->hasFile('image')) {
                if ($data->image) {
                    $this->imageAndFileDelete($this->_filePath, $data->image, '');
                }

                $file  = $this->imageUpload($request->file('image'), $this->_filePath, '', '', [300, 300]);
                $image = $file['name'];
            }

            $data->update([
                'category_id'       => $request->category,
                'slug'              => $request->slug,
                'name'              => $request->name,
                'brand'             => $request->brand,
                'sell_price'        => $request->sell_price,
                'stock'             => $request->stock,
                'original_price'    => $request->original_price,
                'description'       => $request->description,
                'image'             => $image ?? null,
                'meta_title'        => $request->meta_title,
                'meta_keyword'      => $request->meta_keyword,
                'meta_description'  => $request->meta_description,
                'status'            => $request->status,
                'feature'           => $request->feature,
                'popular'           => $request->popular,
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Product update Successfully'
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                'status' => false,
                'message' => $exception->getMessage()
            ]);
        }
    }

    public function destroy($id)
    {
        try {
            $data = Product::find($id);
            if ($data->image) {
                $this->imageAndFileDelete($this->_filePath, $data->image, '');
            }
            $data->delete();

            return response()->json([
                'status' => true,
                'message' => "Product delete successfully.!"
            ]);

        } catch (\Exception $exception) {
            return response()->json([
                'status' => false,
                'message' => $exception->getMessage()
            ]);
        }

    }
}
