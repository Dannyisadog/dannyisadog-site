<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Assignments;
use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{
    use HasFactory;

    protected $table = 'assignment';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'is_active',
        'created_at',
        'updated_at'
    ];

    public function assignments()
    {
        return $this->hasMany(Assignments::class)
            ->join('users', 'users.id', '=', 'assignments.user_id')
            ->where('assignment_id', $this->id)
            ->where('is_active', 1);
    }
}
