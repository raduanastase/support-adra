<?php

namespace App\Http\Controllers;

use App\Attachment;
use App\Post;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;
use DB;


class PostsController extends Controller
{
    public function index()
    {
        $posts = Post::with('attachments')->paginate(12);//get the latest?
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
        if (!$request->has("type")) {
            $request->merge(["type" => "pending"]);
        }

        $post = Post::create($request->all());

        if ($request->hasFile('files')) {
            $files = $request->file('files');

            foreach ($files as $index => $file) {
                $fileName = $post->id . ' - ' . $file->getClientOriginalName();
                $file->move(base_path() . '/public/attachments/', $fileName);

                $attachment = new Attachment([
                    'path' => 'attachments/' . $fileName,
                    'is_private' => false,
                    'is_cover_image' => $index == 0 ? true : false
                ]);

                $post->attachments()->save($attachment);
            }
        }

        return redirect('/');
    }

    public function update($id, Request $request)
    {
        $post = Post::find($id);
        $post->update($request->all());

        return response()->json(['success' => true]);
    }

    public function destroy($id)
    {
        Post::find($id)->delete();
        return response()->json(['success' => true]);
    }
}