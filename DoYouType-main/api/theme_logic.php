<?php
session_start();

// Redirect if not logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "doyoutype";

$conn = @mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$current_theme = isset($_SESSION['current_theme']) ? $_SESSION['current_theme'] : null;

// If no theme is set, load default theme
if (!$current_theme) {
    $current_theme = [
        'background_image' => 'images/backgrounds/retro.jpeg',
        'text_color' => '#ffedf7',
        'gradient1' => 'rgba(247, 78, 230, 0.6)',
        'gradient2' => 'rgba(253, 236, 99, 0.6)',
        'outline' => 'rgb(2, 3, 61)',
        'key_border' => '#ffedf7',
        'updated_text' => '#00ff8d',
        'cursor' => '#00ff8d',
        'highlight' => '#ffe600'
    ];
    $_SESSION['current_theme'] = $current_theme;
}

// Fetch user themes
$user_id = $_SESSION['user_id'];
$themes_query = "SELECT theme_name FROM themes WHERE user_id = '$user_id' AND theme_name != 'retro'";
$themes_result = @mysqli_query($conn, $themes_query);
$themes = array();
while ($theme = @mysqli_fetch_assoc($themes_result)) {
    $themes[] = $theme['theme_name'];
}
?>