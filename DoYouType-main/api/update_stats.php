<?php
// update_stats.php
session_start();

if (!isset($_SESSION['user_id'])) {
    exit('Not logged in');
}

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "doyoutype";

$conn = @mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    exit('Connection failed');
}

// Get values from POST request
$avg_wpm = $_POST['avg_wpm'];
$avg_acc = $_POST['avg_acc'];
$user_id = $_SESSION['user_id'];

// Simple update query
$query = "UPDATE stats SET avg_wpm = '$avg_wpm', avg_acc = '$avg_acc' WHERE user_id = '$user_id'";
mysqli_query($conn, $query);

mysqli_close($conn);
?>