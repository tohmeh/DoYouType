<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "doyoutype";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch leaderboard data
function getLeaderboardData($conn) {
    $sql = "SELECT users.username AS player_name, stats.avg_wpm, stats.avg_acc 
            FROM stats 
            JOIN users ON stats.user_id = users.id 
            ORDER BY stats.avg_wpm DESC, stats.avg_acc DESC 
            LIMIT 10";

    $result = $conn->query($sql);
    return $result;
}

// Get the data
$leaderboardData = getLeaderboardData($conn);