<?php
session_start();

// Database connection
$conn = mysqli_connect("localhost", "root", "", "doyoutype");
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// File upload setup
$uploadDir = '../uploads/backgrounds/';
$backgroundPath = '';
// File upload setup
$uploadDir = '../uploads/backgrounds/'; // File path relative to the parent directory
$backgroundPath = '';

// Validate file upload
if (isset($_FILES['background']) && $_FILES['background']['error'] === 0) {
    // Validate file size (limit to 10MB)
    if ($_FILES['background']['size'] > 10485760) {  // 10MB in bytes
        echo "<script>alert('File is too large! Maximum size is 10MB.'); window.history.back();</script>";
        exit;
    }

    // Validate file type (JPEG, PNG, or GIF)
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!in_array($_FILES['background']['type'], $allowedTypes)) {
        echo "<script>alert('Invalid file type. Please upload a JPEG, PNG, or GIF image.'); window.history.back();</script>";
        exit;
    }

    // Set the file name and path
    $fileName = time() . '_' . basename($_FILES['background']['name']);
    $uploadFile = $uploadDir . $fileName;

    // Ensure the upload directory exists
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    // Move the uploaded file to the designated directory
    if (move_uploaded_file($_FILES['background']['tmp_name'], $uploadFile)) {
        $backgroundPath = $uploadFile;
    } else {
        echo "<script>alert('Error uploading file.'); window.history.back();</script>";
        exit;
    }
} else {
    // Handle upload error
    if ($_FILES['background']['error'] !== 0) {
        $errorCode = $_FILES['background']['error'];
        echo "<script>alert('File upload failed with error code $errorCode'); window.history.back();</script>";
        exit;
    }
}

// Get form data
$theme_name = $_POST['theme_name'];
$text_color = $_POST['text_color'];
$monitor_gr_1 = $_POST['monitor_gr_1'];
$monitor_gr_2 = $_POST['monitor_gr_2'];
$outline = $_POST['outline'];
$key_borders = $_POST['key_borders'];
$cursor_text = $_POST['cursor_and_updated_text'];
$secondary_text = $_POST['secondary_text_color'];
$user_id = $_SESSION['user_id'];

// Strip the ../ from the file path for the database (relative to the web root)
$backgroundPathForDB = str_replace('../', '', $backgroundPath);

// Insert theme data into the database
$sql = "INSERT INTO themes (user_id, theme_name, background, text_color, 
        monitor_gr_1, monitor_gr_2, outline, key_borders, 
        cursor_and_updated_text, secondary_text_color) 
        VALUES ('$user_id', '$theme_name', '$backgroundPathForDB', '$text_color', 
         '$monitor_gr_1', '$monitor_gr_2', '$outline', '$key_borders', 
         '$cursor_text', '$secondary_text')";

if (mysqli_query($conn, $sql)) {
    echo "<script>alert('Theme saved successfully!'); window.location.href = '../main.php';</script>";
} else {
    echo "<script>alert('Error saving theme.'); window.history.back();</script>";
}

mysqli_close($conn);

?>
