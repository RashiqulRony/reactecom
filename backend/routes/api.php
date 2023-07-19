<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', function () {
    echo 'worked!';
});

Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');

# Authentication routes...
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('me', 'AuthController@me');
    Route::post('logout', 'AuthController@logout');

    # Admin routes...
    Route::group(['middleware' => ['apiAdmin'], 'prefix' => 'admin' ], function () {

        Route::apiResource('category', 'CategoryController');
        Route::apiResource('subcategory', 'SubcategoryController');
        Route::apiResource('product', 'ProductController');

        Route::get('auth-check', function () {
            return response()->json([
                'status' => true,
                'message' => "You already logged in.",
            ]);
        });

    });
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
