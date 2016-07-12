<?php

namespace App\Http\Controllers;

use App\Post;
/*use Illuminate\Http\Request;*/
use Carbon\Carbon;
use Request;
use App\Http\Requests;
use DB;


class PostsController extends Controller
{
    public function index()
    {
        $posts = Post::with('attachments')->paginate(10);//get the latest?
        return compact('posts');
    }

    public static function counties()
    {
        $counties = DB::table('counties')->pluck('name');
        ob_clean();
        $counties = json_encode($counties);

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

    public function store()
    {
        $input = Request::all();
        $input['created_at'] = Carbon::now();

        Post::create($input);

        return response()->json(['success' => true]);

        //return redirect('/');//doesn't work if it has hash

    }

    public function update($id)
    {
        $post = Post::find($id);
        $post->update(Request::all());

        return response()->json(['success' => true]);
    }

    public function destroy($id)
    {
        Post::find($id)->delete();
        return response()->json(['success' => true]);
    }
}