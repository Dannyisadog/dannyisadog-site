<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Assignment;
use App\Models\Assignments;
use Auth;

class AssignmentController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('assignment');
    }

    public function assignmentContent()
    {
        return view('assignmentContent');
    }

    public function create(Request $request)
    {
        
        $result = [
            'success' => true,
        ];

        $title = $request->input('title');
        $description = $request->input('description');

        try {
            $user = Auth::user();

            if (!$user->isAdmin()) {
                throw new Exception();
            }
            
            Assignment::create([
                'title' => $title,
                'description' => $description,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]);
        } catch (Exception $e) {
            $result['success'] = false;
        }

        echo json_encode($result);
    }

    public function fetchAssignmentList()
    {
        $assignmentList = Assignment::where('is_active', 1)->get();
        
        $result = [];

        foreach ($assignmentList as $assignment) {
            $data = [
                'id' => $assignment->id,
                'title' => $assignment->title,
                'description' => $assignment->description
            ];
            $result[] = $data;
        }

        echo json_encode($result);
    }

    public function getAssignmentContent(Request $request)
    {
        $result = [
            'success' => true,
            'title' => '',
            'description' => '',
            'can_submit' => true,
            'list' => []
        ];

        $assignment_id = $request->id;

        try {
            $user = Auth::user();
            $assignment = Assignment::where("id", $assignment_id)->first();
            $result['title'] = $assignment->title;
            $result['description'] = $assignment->description;
            $assignments = $assignment->assignments;
            
            $user_assignment = Assignments::where("assignment_id", $assignment_id)
                ->where("user_id", $user->id)
                ->first();

            $result['can_submit'] = $user_assignment ? false : true;

            foreach ($assignments as $item) {
                $list_item = [
                    "id" => $item->id,
                    "user_id" => $user->id,
                    "link" => $item->link,
                    "name" => $item->name
                ];
                $result['list'][] = $list_item;
            }

        } catch (Exception $e) {
            $result = [
                'success' => false,
                'title' => '',
                'description' => '',
                'list' => []
            ];
        }

        echo json_encode($result);
    }

    public function submitAssignment(Request $request)
    {
        $result = [
            'success' => true
        ];

        try {
            $user = Auth::user();
            $assignment_id = $request->input("id");
            $link = $request->input('link');
            Assignments::create([
                "assignment_id" => $assignment_id,
                "user_id" => $user->id,
                "link" => $link,
                "created_at" => date("Y-m-d H:i:s"),
                "updated_at" => date("Y-m-d H:i:s")
            ]);
        } catch (Exception $e) {

        }

        echo json_encode($result);
    }

    public function updateAssignment(Request $request)
    {
        $result = [
            'success' => true
        ];

        try {
            $user = Auth::user();
            $assignment_id = $request->input("id");
            $new_link = $request->input('newLink');

            $assignment = Assignments::where('assignment_id', $assignment_id)
                ->where('user_id', $user->id);

            if (!$assignment) {
                throw new Exception();
            }

            $assignment->update([
                'link' => $new_link
            ]);

        } catch (Exception $e) {
            $result = [
                'success' => false
            ];
        }

        echo json_encode($result);
    }
}
