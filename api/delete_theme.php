<?php
session_start();

// Database connection
$conn = mysqli_connect("localhost", "root", "", "doyoutype");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if form is submitted to delete the theme
if (isset($_POST['delete_theme'])) {
    // Validate theme name
    if (empty($_POST['theme_name'])) {
        echo "<script>alert('Please select a theme to delete.'); window.history.back();</script>";
        exit;
    }

    $theme_name = $_POST['theme_name'];
    $user_id = $_SESSION['user_id'];

    // Prevent deleting 'retro' theme
    if ($theme_name == 'retro') {
        echo "<script>alert('The retro theme cannot be deleted.'); window.history.back();</script>";
        exit;
    }

    // Delete the selected theme from the database
    $sql = "DELETE FROM themes WHERE user_id = '$user_id' AND theme_name = '$theme_name'";

    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Theme deleted successfully!'); window.location.href = 'main.php';</script>";
    } else {
        echo "<script>alert('Error deleting theme.'); window.history.back();</script>";
    }
}

mysqli_close($conn);
?>