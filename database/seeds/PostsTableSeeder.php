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
                'type' => 'approved',
                'reporter_first_name' => 'Reporter FN 1',
                'reporter_last_name' => 'Reporter FN 1',
                'reporter_cnp' => 'R cnp',
                'reporter_ci_series' => 'R ci series',
                'reporter_ci_number' => 'R ci number',
                'reporter_phone' => 'r phone',
                'reporter_email' => 'r email',
                'person_first_name' => 'p f n',
                'person_last_name' => 'p l n',
                'person_cnp' => 'p cnp',
                'person_ci_series' => 'p ci series',
                'person_ci_number' => 'p ci n',
                'person_county_id' => 2,
                'person_city' => 'City',
                'person_address' => 'Add',
                'person_description' => 'DESC',
                'person_money_total' => '300',
                'person_money_partial' => '100'
            ),
            array(
                'title' => 'Titlu 2',
                'type' => 'approved',
                'reporter_first_name' => 'Reporter FN 2',
                'reporter_last_name' => 'Reporter FN 2',
                'reporter_cnp' => 'R cnp',
                'reporter_ci_series' => 'R ci series',
                'reporter_ci_number' => 'R ci number',
                'reporter_phone' => 'r phone',
                'reporter_email' => 'r email',
                'person_first_name' => 'p f n',
                'person_last_name' => 'p l n',
                'person_cnp' => 'p cnp',
                'person_ci_series' => 'p ci series',
                'person_ci_number' => 'p ci n',
                'person_county_id' => 2,
                'person_city' => 'City',
                'person_address' => 'Add',
                'person_description' => 'DESC 2',
                'person_money_total' => '300',
                'person_money_partial' => '100'
            ),
            array(
                'title' => 'Titlu resolved 1',
                'type' => 'resolved',
                'reporter_first_name' => 'Reporter FN r 1',
                'reporter_last_name' => 'Reporter LN r 1',
                'reporter_cnp' => 'R cnp',
                'reporter_ci_series' => 'R ci series',
                'reporter_ci_number' => 'R ci number',
                'reporter_phone' => 'r phone',
                'reporter_email' => 'r email',
                'person_first_name' => 'p f n',
                'person_last_name' => 'p l n',
                'person_cnp' => 'p cnp',
                'person_ci_series' => 'p ci series',
                'person_ci_number' => 'p ci n',
                'person_county_id' => 2,
                'person_city' => 'City',
                'person_address' => 'Add',
                'person_description' => 'DESCa a',
                'person_money_total' => '300',
                'person_money_partial' => '100'
            ),
            array(
                'title' => 'Titlu resolved 2',
                'type' => 'resolved',
                'reporter_first_name' => 'Reporter FN r 2',
                'reporter_last_name' => 'Reporter LN r 2',
                'reporter_cnp' => 'R cnp',
                'reporter_ci_series' => 'R ci series',
                'reporter_ci_number' => 'R ci number',
                'reporter_phone' => 'r phone',
                'reporter_email' => 'r email',
                'person_first_name' => 'p f n',
                'person_last_name' => 'p l n',
                'person_cnp' => 'p cnp',
                'person_ci_series' => 'p ci series',
                'person_ci_number' => 'p ci n',
                'person_county_id' => 2,
                'person_city' => 'City',
                'person_address' => 'Add',
                'person_description' => 'DESC 33ddd',
                'person_money_total' => '300',
                'person_money_partial' => '100'
            )
        );

        DB::table('posts')->insert($posts);
    }
}
