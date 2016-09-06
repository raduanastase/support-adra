<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = array(
            array(
                'name' => 'Admin',
                'email' => 'admin@admin.com',
                'password' => 'asdasd'
            ),
            array(
                'name' => 'Radu2',
                'email' => 'radu2@gmail.com',
                'password' => 'asdasd'
            )
        );

        DB::table('users')->insert($users);
    }
}
