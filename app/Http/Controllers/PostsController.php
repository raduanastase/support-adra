<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Requests;

class PostsController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return compact('posts');
    }

    public function create()
    {
        $post = new Post;
        return view('posts.edit', compact('post'));
    }

    public function store()
    {
        $post = new Post;
        $post->fill(/*$request->only($post->getFillable())*/);
        $post->save();
        return redirect()->route('post.index')->with('success_message', 'The post has been successfully saved.');
    }

    public function show($id)
    {
        return Post::find($id);
    }

    public function edit($id)
    {
        $post = Post::find($id);
        return view('posts.edit', compact('post'));
    }

    public function update($id)
    {
        $post = Post::find($id);
        $post->fill(/*$request->only($post->getFillable())*/);
        $post->save();
        return redirect()->route('post.index')->with('success_message', 'The post has been successfully saved.');
    }

    public function destroy($id)
    {
        Post::find($id)->delete();
        return redirect()->route('post.index')->with('success_message', 'The post has been successfully deleted.');
    }
}