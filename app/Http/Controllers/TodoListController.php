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
                    "items" => $list->items,
                    "created_at" => date("Y/m/d", strtotime($list->created_at))
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

    public function updateTodoItem(Request $request)
    {   
        $data = [
            'success' => true
        ];

        try {
            $user = Auth::user();

            if (!$user) {
                throw new Exception("尚未登入");
            }

            $list_id = $request->input('list_id');
            $item_id = $request->input('item_id');
            $finished = $request->input('finished');

            if (!is_bool($finished)) {
                throw new Exception("資料錯誤");
            }

            $list = TodoList::find($list_id);

            if (!$list) {
                throw new Exception("todo list 不存在");
            }

            if ($list->user_id != $user->id) {
                throw new Exception("todo list 不存在");
            }

            $item = TodoItem::find($item_id);

            if ($item->list_id != $list->id) {
                throw new Exception("todo item 不存在");
            }

            if ($finished) {
                $item->update([
                    'finished_at' => date('Y-m-d H:i:s')
                ]);
            } else {
                $item->update([
                    'finished_at' => null
                ]);
            }

        } catch (Exception $e) {
            $data['success'] = false;
        }

        echo json_encode($data);
    }
}
