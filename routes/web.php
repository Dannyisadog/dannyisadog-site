<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [App\Http\Controllers\Controller::class, 'index']);
Route::get('/home', [App\Http\Controllers\Controller::class, 'index']);
Route::get('/todolist', [App\Http\Controllers\HomeController::class, 'index']);

// todo list
Route::get('/fetchTodoList', [App\Http\Controllers\TodoListController::class, 'fetchTodoList']);
Route::post('/createTodoList', [App\Http\Controllers\TodoListController::class, 'createTodoList']);
Route::post('/updateTodoItem', [App\Http\Controllers\TodoListController::class, 'updateTodoItem']);
Route::post('/deleteTodoList', [App\Http\Controllers\TodoListController::class, 'deleteTodoList']);

Auth::routes();

// Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
