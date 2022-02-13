<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 100; $i++) {
            DB::table('posts')->insert([
                'title'      => Str::random(10),
                'body'       => Str::random(120),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
