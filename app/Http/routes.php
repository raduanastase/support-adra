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
        'userId' => $user ? $user->id : -1,
        'counties' => PostsController::counties()
    ];

    return view('welcome', $data);
});

Route::auth();

Route::get('/home', 'HomeController@index');

Route::get('api/posts', 'PostsController@index');
Route::post('api/posts', 'PostsController@store');
Route::post('api/attachments', 'PostsController@storeAttachments');
Route::get('api/posts/type/{type}', 'PostsController@postsOfType');
Route::get('api/posts/{id}', 'PostsController@show');
Route::delete('api/posts/{id}', 'PostsController@destroy');
Route::put('api/posts/{id}', 'PostsController@update');
