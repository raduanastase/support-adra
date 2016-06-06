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

Route::get('/', function () {
    return view('welcome');
});

Route::auth();

Route::get('/home', 'HomeController@index');

Route::get('posts', 'PostsController@index');
Route::get('posts/{type}', 'PostsController@postsOfType');
Route::get('posts/{post}', 'PostsController@show');
Route::get('posts/create', 'PostsController@create');
Route::post('posts', 'PostsController@store');

Route::post('posts/{}/edit', 'PostsController@edit');
Route::put('posts/{}', 'PostsController@update');
Route::delete('posts/{}', 'PostsController@destroy');
