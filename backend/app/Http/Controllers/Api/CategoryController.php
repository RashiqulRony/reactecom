<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{

    public function index()
    {
        try {
            $categories = Category::orderBy('created_at', 'DESC')->get();
            return response()->json([
                'status' => true,
                'data' => $categories,
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
            'slug' => 'required|max:255|unique:categories,slug',
            'name' => 'required|max:255',
            'status' => 'required|in:Active,Inactive',
        ]);

        if($validator->fails()) {
            return response()->json(['status' => false, 'errors'=> $validator->messages()]);
        }

        try {
            Category::create([
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
        //
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
