<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\TodoItem;

class TodoList extends Model
{
    protected $table = 'todo_list';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'title',
        'created_at',
        'updated_at',
    ];

    public function items()
    {
        return $this->hasMany(TodoItem::class, 'list_id', 'id');
    }
}
