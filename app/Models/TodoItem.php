<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TodoItem extends Model
{
    protected $table = 'todo_item';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'list_id',
        'description',
        'finished_at',
        'deleted_at',
        'created_at',
        'updated_at',
    ];
}
