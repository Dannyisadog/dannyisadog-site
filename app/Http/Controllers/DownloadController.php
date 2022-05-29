<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DownloadController extends Controller
{
    public function downloadCV()
    {
        $file = public_path(). "/cv.pdf";
        $headers = array(
            'Content-Type: application/pdf',
        );
        return response()->download($file, 'cv.pdf', $headers);
    }
}
