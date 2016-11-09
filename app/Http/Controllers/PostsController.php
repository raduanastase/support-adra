<?php

namespace App\Http\Controllers;

use App\Post;
/*use Illuminate\Http\Request;*/
use Carbon\Carbon;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;


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

    public function store(Request $request)
    {
        $post = Post::create(Input::all());
        $files = $request->file('files');

        foreach ($files as $file) {
            $file->move(base_path() . '/public/attachments/', $post->id . ' - ' . $file->getClientOriginalName());
        }

        return redirect('/');
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