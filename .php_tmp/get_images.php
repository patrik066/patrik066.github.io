<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$directory = 'Slike/Galerija/';
$images = glob($directory . "*.jpg"); // You can add other formats like png, gif, etc.

$imageNames = array_map(function($image) use ($directory) {
    return str_replace($directory, '', $image);
}, $images);

echo json_encode($imageNames);
