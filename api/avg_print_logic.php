<?php
if (!isset($conn)) {
    die("Database connection is required");
}

// Fetch user stats
$user_id = $_SESSION['user_id'];
$stats_query = "SELECT avg_wpm, avg_acc FROM stats WHERE user_id = '$user_id'";
$stats_result = @mysqli_query($conn, $stats_query);
$stats = @mysqli_fetch_assoc($stats_result);

$avg_wpm = $stats ? $stats['avg_wpm'] : 0;
$avg_acc = $stats ? $stats['avg_acc'] : 0;

// Close database connection
@mysqli_close($conn);
?>
