<?php

declare(strict_types=1);

use Hyperf\Database\Seeders\Seeder;
use Hyperf\DbConnection\Db;

class Database extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Db::insert('INSERT INTO `users`(`id`, `username`, `nickname`, `password`, `avator_id`, `created_at`, `updated_at`) VALUES (1, \'1\', \'2\', \'3\', 4, NULL, NULL);');
        Db::insert('INSERT INTO `hyperf`.`configures`(`id`, `key`, `value`, `note`, `created_at`, `updated_at`) VALUES (1, \'DEFAULT_DISK\', \'public\', \'默认存储硬盘\', NULL, NULL);');
        DB::insert('INSERT INTO `hyperf`.`configures`(`id`, `key`, `value`, `note`, `created_at`, `updated_at`) VALUES (2, \'APP_URL\', \'\', \'应用访问链接\', NULL, NULL);');

        DB::insert('INSERT INTO `albums`(`id`, `path`, `disk`, `created_at`, `updated_at`) VALUES (18, \'/2020-07-12/5f0ae653f1083.png\', \'public\', \'2020-07-12 18:30:44\', \'2020-07-12 18:30:44\');');
    }
}
