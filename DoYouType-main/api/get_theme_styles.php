<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

$conn = mysqli_connect("localhost", "root", "", "doyoutype");
if (!$conn) die("Connection failed: " . mysqli_connect_error());

$theme_name = isset($_GET['theme_name']) ? $_GET['theme_name'] : 'retro';
$user_id = $_SESSION['user_id'];

$theme_query = "SELECT background, text_color, monitor_gr_1, monitor_gr_2, 
                outline, key_borders, cursor_and_updated_text, secondary_text_color 
                FROM themes 
                WHERE user_id = '$user_id' AND theme_name = '$theme_name'";
$result = mysqli_query($conn, $theme_query);

if ($row = mysqli_fetch_assoc($result)) {
    $_SESSION['current_theme'] = [
        'background_image' => $row['background'],
        'text_color' => $row['text_color'],
        'gradient1' => $row['monitor_gr_1'],
        'gradient2' => $row['monitor_gr_2'],
        'outline' => $row['outline'],
        'key_border' => $row['key_borders'],
        'updated_text' => $row['cursor_and_updated_text'],
        'cursor' => $row['cursor_and_updated_text'],
        'highlight' => $row['secondary_text_color']
    ];
}

mysqli_close($conn);
header("Location: ../main.php");
?>