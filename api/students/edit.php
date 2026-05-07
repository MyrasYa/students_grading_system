<?php
require '../config/koneksi.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");

$id = $_POST['id'] ?? null;
$name = $_POST['name'] ?? '';
$major = $_POST['major'] ?? '';
$score = $_POST['score'] ?? '';

if (!$id) {
    echo json_encode([
        "success" => false,
        "message" => "ID tidak ditemukan"
    ]);
    exit;
}

// grade logic
if ($score >= 85) $grade = "A";
elseif ($score >= 70) $grade = "B";
elseif ($score >= 60) $grade = "C";
else $grade = "D";

$query = "UPDATE students 
SET name='$name', major='$major', score='$score', grade='$grade'
WHERE id=$id";

if ($koneksi->query($query)) {
    echo json_encode([
        "success" => true,
        "message" => "Student updated"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => $koneksi->error
    ]);
}