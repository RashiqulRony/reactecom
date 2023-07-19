<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'category_id',
        'slug',
        'name',
        'brand',
        'sell_price',
        'original_price',
        'description',
        'status',
        'meta_title',
        'meta_keyword',
        'meta_description',
        'stock',
        'feature',
        'popular',
        'image',
    ];
}
