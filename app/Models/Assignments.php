<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class Assignments extends Model
{
    use HasFactory, Notifiable;

    protected $table = 'assignments';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'assignment_id',
        'user_id',
        'link',
        'is_active',
        'created_at',
        'updated_at'
    ];
}
