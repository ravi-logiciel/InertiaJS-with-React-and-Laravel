<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $users = [
        [
            'id'=> 1,
            'name' => 'Ravi Heer'
        ],
        [
            'id'=> 2,
            'name' => 'Gurpreet Singh'
        ]
    ];

    // return view('welcome')->with(['users' => $users]);
    return Inertia::render('welcome', ['users' => $users]);
});


Route::get('/home', function () {
    $users = [
        [
            'id'=> 1,
            'name' => 'Ravi Heer'
        ],
        [
            'id'=> 2,
            'name' => 'Gurpreet Singh'
        ],
        [
            'id'=> 3,
            'name' => 'Nitin'
        ]
    ];

    return Inertia::render('home', ['users' => $users]);
});
