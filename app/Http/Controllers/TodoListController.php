<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TodoList;
use App\Models\TodoItem;
use Auth;

class TodoListController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function fetchTodoList()
    {
        $data = [
            'success' => true,
            'data' => []
        ];

        try {
            $user = Auth::user();

            if (!$user) {
                throw new Exception("尚未登入");
            }

            $lists = TodoList::where('user_id', $user->id)->orderBy('id', 'desc')->get();

            foreach ($lists as $list) {
                $data['data'][] = [
                    "id" => $list->id,
                    "title" => $list->title,
                    "items" => $list->items
                ];
            }
        } catch (Exception $e) {
            $data['success'] = false;
            $data['data'] = [];
        }

        echo json_encode($data);
    }

    public function createTodoList(Request $request)
    {
        $data = [
            'success' => true,
        ];

        try {
            $user = Auth::user();

            if (!$user) {
                throw new Exception("尚未登入");
            }

            $todo_list = TodoList::create([
                'user_id' => $user->id,
                'title' => $request->input('title')
            ]);

            foreach ($request->input('items') as $new_item) {
                TodoItem::create([
                    'list_id' => $todo_list->id,
                    'title' => $new_item
                ]);
            }

        } catch (Exception $e) {
            $data['success'] = false;
        }

        echo json_encode($data);
    }
}
