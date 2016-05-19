<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $posts = array(
            array(
                'title' => 'Titlu 1',
                'reporter_first_name' => 'Reporter FN 1',
                'reporter_last_name' => 'Reporter FN 1'
            ),
            array(
                'title' => 'Titlu 2',
                'reporter_first_name' => 'Reporter FN 2',
                'reporter_last_name' => 'Reporter FN 2'
            )
        );

        DB::table('posts')->insert($posts);
    }
}
