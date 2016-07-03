<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

use \App\Http\Controllers\PostsController;

Route::get('/', function () {
    $user = null;
    if(Auth::check()) {
        $user = Auth::user();
    }

    $data = [
        'userId' => $user ? $user->id : null,
        'counties' => PostsController::counties()
    ];

    return view('welcome', $data);
});

Route::auth();

Route::get('/home', 'HomeController@index');

Route::get('posts', 'PostsController@index');
Route::post('posts', 'PostsController@store');
Route::get('posts/type/{type}', 'PostsController@postsOfType');
Route::get('posts/{id}', 'PostsController@show');
Route::delete('posts/{id}', 'PostsController@destroy');
Route::put('posts/{id}', 'PostsController@update');
