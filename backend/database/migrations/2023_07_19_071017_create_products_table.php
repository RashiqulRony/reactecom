<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->string('slug');
            $table->string('name');
            $table->string('brand')->nullable();
            $table->decimal('sell_price', 10, 2)->default(0.00);
            $table->decimal('original_price', 10, 2)->default(0.00);
            $table->unsignedInteger('stock')->default(0);
            $table->string('image')->nullable();
            $table->longText('description')->nullable();
            $table->enum('status', ['Active', 'Inactive'])->default('Inactive');
            $table->enum('feature', ['Yes', 'No'])->default('No');
            $table->enum('popular', ['Yes', 'No'])->default('No');
            $table->string('meta_title')->nullable();
            $table->string('meta_keyword')->nullable();
            $table->longText('meta_description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
