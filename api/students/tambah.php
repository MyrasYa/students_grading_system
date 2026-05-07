<?php
require '../config/koneksi.php';

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$name  = $_POST['name'] ?? '';
$major = $_POST['major'] ?? '';
$score = $_POST['score'] ?? '';

if ($name == '' || $major == '' || $score == '') {
    echo json_encode([
        "success" => false,
        "message" => "Field kosong"
    ]);
    exit;
}

// grade logic
if ($score >= 85) $grade = "A";
elseif ($score >= 70) $grade = "B";
elseif ($score >= 60) $grade = "C";
else $grade = "D";

$query = "INSERT INTO students (name, major, score, grade)
VALUES ('$name', '$major', '$score', '$grade')";

if ($koneksi->query($query)) {
    echo json_encode([
        "success" => true,
        "message" => "Student added"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => $koneksi->error
    ]);
}