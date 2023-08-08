<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{

    public function content()
    {
        try {
            $carts = Cart::where('user_id', Auth::id())->get();

            $data = [];
            $cartTotal = 0;

            foreach ($carts as $cart) {
                $cartTotal += $cart->subtotal;
                $data[] = [
                    'cart_id' => $cart->id,
                    'product_id' => $cart->product_id,
                    'product_name' => $cart->name,
                    'quantity' => $cart->qty,
                    'price' => $cart->price,
                    'subtotal' => $cart->subtotal,
                    'options' => json_decode($cart->options, true)
                ];
            }

            return response()->json([
                'status' => true,
                'data' => $data,
                'cart_total' => $cartTotal,
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                'status' => false,
                'message' => $exception->getMessage()
            ]);
        }

    }

    public function add(Request $request)
    {
        try {
            $product = Product::find($request->product_id);

            if ($product) {
                $user = Auth::user();
                $qty = $request->product_qty;

                if ($qty <= $product->stock) {
                    $options = [
                        'image'          => $product->image,
                        'present_stock'  => $product->stock,
                        'original_price' => $product->original_price,
                        'brand'          => $product->brand,
                    ];

                    Cart::updateOrCreate(
                        [
                            'user_id'     => $user->id,
                            'product_id'  => $product->id,
                            'options'     => json_encode($options),
                        ], [
                            'name'       => $product->name,
                            'qty'        => $qty,
                            'price'      => $product->sell_price,
                            'subtotal'   => $product->sell_price * $qty,
                        ]
                    );

                    return response()->json([
                        'status' => true,
                        'message' => 'Add to cart successfully!!'
                    ]);
                } else {
                    return response()->json([
                        'status' => false,
                        'message' => 'Out Stock'
                    ]);
                }
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'Something went wrong. No product fund. Please try again !!'
                ]);
            }
        } catch (\Exception $exception) {
            return response()->json([
                'status' => false,
                'message' => $exception->getMessage()
            ]);
        }
    }
}
