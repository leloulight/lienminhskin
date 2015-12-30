<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('article',function(Blueprint $table){
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('id_user');
            $table->string('title')->unique();
            $table->text('content');
            $table->string('keyword')->nullable();
            $table->string('desc')->nullable();
            $table->tinyInteger('status');
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
        //
        Schema::drop('article');
    }
}
