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
            $table->text("description");
            $table->timestamp("finished_at");
            $table->timestamp("deleted_at");
            $table->timestamp("created_at");
            $table->timestamp("updated_at");
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
