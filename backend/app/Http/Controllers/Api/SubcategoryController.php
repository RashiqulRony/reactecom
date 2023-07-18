<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Subcategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubcategoryController extends Controller
{
    public function index()
    {
        try {
            $data = Subcategory::join('categories', 'subcategories.category_id', '=', 'categories.id')
                ->select('subcategories.*', 'categories.name as category_name')
                ->orderBy('created_at', 'DESC')->get();
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
            'category_id' => 'required|exists:categories,id',
            'slug'        => 'required|max:255|unique:subcategories,slug',
            'name'        => 'required|max:255',
            'status'      => 'required|in:Active,Inactive',
        ]);

        if($validator->fails()) {
            return response()->json(['status' => false, 'errors'=> $validator->messages()]);
        }

        try {
            Subcategory::create([
                'category_id'       => $request->category_id,
                'meta_title'        => $request->meta_title,
                'meta_keyword'      => $request->meta_keyword,
                'meta_description'  => $request->meta_description,
                'slug'              => $request->slug,
                'name'              => $request->name,
                'description'       => $request->description,
                'status'            => $request->status
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Category save Successfully'
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
            $data = Subcategory::find($id);
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
            'category_id' => 'required|exists:categories,id',
            'slug'        => 'required|unique:subcategories,slug,'.$id,
            'name'        => 'required|max:255',
            'status'      => 'required|in:Active,Inactive',
        ]);

        if($validator->fails()) {
            return response()->json(['status' => false, 'errors'=> $validator->messages()]);
        }

        try {
            Subcategory::find($id)->update([
                'category_id'       => $request->category_id,
                'meta_title'        => $request->meta_title,
                'meta_keyword'      => $request->meta_keyword,
                'meta_description'  => $request->meta_description,
                'slug'              => $request->slug,
                'name'              => $request->name,
                'description'       => $request->description,
                'status'            => $request->status
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Category Update Successfully'
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
            Subcategory::find($id)->delete();
            return response()->json([
                'status' => true,
                'message' => "Category delete successfully.!"
            ]);

        } catch (\Exception $exception) {
            return response()->json([
                'status' => false,
                'message' => $exception->getMessage()
            ]);
        }
    }
}
