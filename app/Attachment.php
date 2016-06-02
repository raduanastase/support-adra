<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    protected $fillable = array(
        'path', 'is_private', 'is_cover_image'
    );

    /**
     * Validation Rules
     * this is just a place for us to store these, you could
     * alternatively place them in your repository
     * @var array
     */
    public static $rules = array(
        'post_id'   => 'required|numeric',
        'path'   => 'required',
        'is_private' => 'required',
        'is_cover_image' => 'required'
    );

    /**
     * Define the relationship with the posts table
     * @return Model parent Post model
     */
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
