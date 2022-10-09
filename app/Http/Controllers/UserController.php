<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;

class UserController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('user');
    }

    public function getUserData()
    {
        $user = Auth::user();

        $data = [
            'name' => $user->name,
            'email' => $user->email,
            'github_link' => $user->github_link,
            'short_name' => $user->short_name
        ];

        echo json_encode($data);
    }

    public function updateUserData(Request $request)
    {
        $user = Auth::user();

        $new_name = $request->input('name');
        $new_short_name = $request->input('short_name');
        $new_github_link = $request->input('github_link');

        $user->update(
            [
                'name' => $new_name,
                'short_name' => $new_short_name,
                'github_link' => $new_github_link
            ]
        );

        echo json_encode([
            'success' => true
        ]);
    }

    public function members()
    {
        return view('members');
    }

    public function getMembers()
    {
        $users = User::all();

        $result = [];

        foreach ($users as $user) {
            $user_data = [
                'name' => $user->name,
                'short_name' => $user->short_name,
                'github_link' => $user->github_link
            ];
            $result[] = $user_data;
        }

        echo json_encode($result);
    }
}
