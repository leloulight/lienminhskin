<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Article extends Model
{
    use SoftDeletes;
    /**
     * The table the pages are stored in.
     *
     * @var string
     */
    protected $table = 'article';

    /**
     * The model name.
     *
     * @var string
     */
    public static $name = 'article';
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

}
