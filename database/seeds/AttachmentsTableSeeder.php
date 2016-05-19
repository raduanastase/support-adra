<?php

use Illuminate\Database\Seeder;

class AttachmentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $attachments = array(
            array(
                'post_id' => '1',
                'path' => 'path1',
                'is_private' => false,
                'is_cover_image' => true
            ),
            array(
                'post_id' => '1',
                'path' => 'path2',
                'is_private' => false,
                'is_cover_image' => false
            ),
            array(
                'post_id' => '1',
                'path' => 'path3',
                'is_private' => true,
                'is_cover_image' => false
            ),
            array(
                'post_id' => '2',
                'path' => 'path2_1',
                'is_private' => false,
                'is_cover_image' => true
            )
        );

        DB::table('attachments')->insert($attachments);
    }
}
