<?php

use Illuminate\Support\Facades\Route;

Route::get('/metadata', function () {
    return response()->json(config('metadata'));
});
