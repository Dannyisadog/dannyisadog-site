<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTodoItemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todo_item', function (Blueprint $table) {
            $table->id();
            $table->string("title", 255);
            $table->integer("list_id");
            $table->text("description")->nullable();
            $table->datetime("finished_at")->nullable();
            $table->datetime("deleted_at")->nullable();
            $table->timestamp("created_at")->default(\DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp("updated_at")->default(\DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todo_item');
    }
}
