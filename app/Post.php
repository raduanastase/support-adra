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
        'title', 'type', 'reporter_first_name', 'reporter_last_name', 'reporter_cnp', 'reporter_ci_series', 'reporter_ci_number', 'reporter_phone', 'reporter_email', 'person_first_name', 'created_at', 'updated_at'
    );

    /**
     * Validation Rules
     * this is just a place for us to store these, you could
     * alternatively place them in your repository
     * @var array
     */
    public static $rules = array(
        'title' => 'required',
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
