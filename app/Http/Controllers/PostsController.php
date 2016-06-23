<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Requests;
use DB;

class PostsController extends Controller
{
    public function index()
    {
        $posts = Post::with('attachments')->paginate(10);
        return compact('posts');
    }

    public static function counties()
    {
        $counties = DB::table('counties')->pluck('name', 'id');
        ob_clean();
        $counties = json_encode($counties);
        //$counties = preg_replace('/"([a-zA-Z_]+[a-zA-Z0-9_]*)":/','$1:',$counties);

        return $counties;
    }

    public function postsOfType($typeOfPost)
    {
        $posts = Post::where('type', $typeOfPost)->select(array('id', 'title', 'person_description'))->with('attachments')->paginate(10);
        return compact('posts');
    }

    public function show($id)
    {
        return Post::with('attachments')->get()->find($id);
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