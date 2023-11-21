<?php

use App\Models\Writer;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('writers', function (Blueprint $table) {
            $table->id();
            $table->string('nev');
            $table->integer('szul');
            $table->timestamps();
        });

        Writer::create([
            'nev' => 'Szlanka Péter',
            'szul' => 20040302
        ]);
        Writer::create([
            'nev' => 'Botos Fanni',
            'szul' => 20000422
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('writers');
    }
};
