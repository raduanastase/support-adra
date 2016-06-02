<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->enum('type', ['approved', 'resolved', 'pending', 'rejected']);
            $table->string('reporter_first_name');
            $table->string('reporter_last_name');
            $table->string('reporter_cnp');
            $table->string('reporter_ci_series');
            $table->string('reporter_ci_number');
            $table->string('reporter_phone');
            $table->string('reporter_email');
            $table->string('person_first_name');
            $table->string('person_last_name');
            $table->string('person_cnp');
            $table->string('person_ci_series');
            $table->string('person_ci_number');
            $table->string('person_county_id');
            $table->string('person_city');
            $table->string('person_address');
            $table->text('person_description');
            $table->string('person_money_total');
            $table->string('person_money_partial');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('posts');
    }
}
