<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function getCategories()
    {
        try {
            $data = Category::where('status', 'Active')->orderBy('created_at', 'DESC')->get();
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

    public function getProducts()
    {
        try {
            $data = Product::join('categories', 'products.category_id', '=', 'categories.id')
                ->select('products.*', 'categories.name as category_name')
                ->where('products.status', 'Active')->orderBy('products.created_at', 'DESC')->get();

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
}
