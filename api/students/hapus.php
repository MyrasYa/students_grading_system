<?php
require '../config/koneksi.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");

$id = $_POST['id'] ?? null;

if (!$id) {
    echo json_encode([
        "success" => false,
        "message" => "ID tidak ditemukan"
    ]);
    exit;
}

$query = "DELETE FROM students WHERE id = $id";

if ($koneksi->query($query)) {
    echo json_encode([
        "success" => true,
        "message" => "Student deleted"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => $koneksi->error
    ]);
}