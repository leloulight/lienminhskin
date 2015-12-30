<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoryGroupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_group',function(Blueprint $table){
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('title')->unique();
            $table->integer('position');
            $table->tinyInteger('status');
            $table->integer('id_user');
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
        Schema::drop('category_group');
    }
}
