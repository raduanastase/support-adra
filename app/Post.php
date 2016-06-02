<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * Items that are "fillable"
     * meaning we can mass-assign them from the constructor
     * or $post->fill()
     * @var array
     */
    protected $fillable = array(
        'title', 'reporter_first_name', 'reporter_last_name'
    );

    /**
     * Validation Rules
     * this is just a place for us to store these, you could
     * alternatively place them in your repository
     * @var array
     */
    public static $rules = array(
        'title'    => 'required',
        'reporter_first_name' => 'required',
        'reporter_last_name' => 'required'
    );

    /**
     * Define the relationship with the comments table
     * @return Collection collection of Comment Models
     */
    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }
}
