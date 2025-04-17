

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete Theme</title>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/delete_theme/delete.css">
</head>

<?php
include 'api/delete_theme.php'
?>
<body>
    <div class="container">
        <h1>Delete Your Theme</h1>

        <form action="delete_theme.php" method="POST">
            <div class="form-group">
                <label for="theme_name">Select Theme to Delete:</label>
                <select name="theme_name" id="theme_name" required>
                    <?php
                    // Fetch user's themes to populate the dropdown
                    $user_id = $_SESSION['user_id'];
                    $conn = mysqli_connect("localhost", "root", "", "doyoutype");
                    if (!$conn) {
                        die("Connection failed: " . mysqli_connect_error());
                    }

                    $sql = "SELECT theme_name FROM themes WHERE user_id = '$user_id'";
                    $result = mysqli_query($conn, $sql);

                    if (mysqli_num_rows($result) > 0) {
                        while ($row = mysqli_fetch_assoc($result)) {
                            // Check if theme is 'retro' and disable it
                            $disabled = ($row['theme_name'] == 'retro') ? 'disabled' : '';
                            echo "<option value='" . $row['theme_name'] . "' $disabled>" . $row['theme_name'] . "</option>";
                        }
                    } else {
                        echo "<option value=''>No themes available</option>";
                    }

                    mysqli_close($conn);
                    ?>
                </select>
            </div>

            <button type="submit" name="delete_theme">Delete Theme</button>
        </form>

        <div class="back-link">
            <a href="main.php">Go Back</a>
        </div>
    </div>
</body>
</html>
