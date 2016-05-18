<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Requests;

class PostsController extends Controller
{
    public function index() 
    {
        $cases = Post::all();

        return view('posts.index', compact('posts'));
    }

    public function show($post)
    {
        return $post;
    }
}
