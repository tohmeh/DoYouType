<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - DoYouType</title>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/login.css" id="style_sheet">
</head>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "doyoutype";

// Database connection
$conn = @mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Handle Login
$login_error = $signup_error = "";

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE username = '$username'";
    $result = @mysqli_query($conn, $query);

    if ($result && @mysqli_num_rows($result) > 0) {
        $row = @mysqli_fetch_array($result);
        if (password_verify($password, $row['password'])) {
            header("Location: main.html");
            exit();
        } else {
            $login_error = "Wrong password!";
        }
    } else {
        $login_error = "User not found!";
    }
}

// Handle Signup
if (isset($_POST['signup-username']) && isset($_POST['signup-password'])) {
    $username = $_POST['signup-username'];
    $password = password_hash($_POST['signup-password'], PASSWORD_DEFAULT);

    $check_query = "SELECT * FROM users WHERE username = '$username'";
    $check_result = @mysqli_query($conn, $check_query);

    if ($check_result && @mysqli_num_rows($check_result) > 0) {
        $signup_error = "User already exists!";
    } else {
        $query = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
        if (@mysqli_query($conn, $query)) {
            $signup_error = "Account created successfully!";
        } else {
            $signup_error = "Error creating account!";
        }
    }
}

// Close the database connection only if it exists
if ($conn) {
    @mysqli_close($conn);
}
?>


<body>
    <div class="main_div">

            
			
			<!-- Login Form -->
            <div id="login-form" class="login-form" >
                <h1 class="form-title">Login</h1>
                <form method="POST" action="">
                    <div class="form-groups">
                        <label>Username</label>
                        <input type="text" class="input-field" placeholder="Enter username" name="username">
                    </div>
                    <div class="form-groups">
                        <label >Password</label>
                        <input type="password" class="input-field" placeholder="Enter password" name="password">
                    </div>
                    <div class="error-message" id="login-error"><?php echo $login_error; ?></div>
                    <button type="submit" class="login-btn">Login</button>
                </form>
                <div class="reference-link">
                    <div>Don't have an account? <span class="signup_little" onclick="switchToSignup()">Sign up</span></div>
                </div>
            </div>


            <!-- Signup Form -->
            <div id="signup-form" class="signup-form" aria-hidden="true">
                <h1 class="form-title">Sign Up</h1>
                <form method="POST" action="">
                    <div class="form-groups">
                        <label>Email</label>
                        <input type="text" class="input-field" placeholder="Enter email" name="signup-username">
                    </div>
                    <div class="form-groups">
                        <label >Password</label>
                        <input type="password" class="input-field" placeholder="Create password" name="signup-password">
                    </div>
                    <div class="error-message" id="signup-error"><?php echo $signup_error; ?></div>
                    <button type="submit" class="login-btn">Sign Up</button>
                </form>
                <div class="reference-link">
                    <div>Already have an account? <span class="signup_little" onclick="switchToLogin()">Login</span></div>
                </div>
            </div>


    </div>


    <script src="js/login.js"></script>
</body>
</html>
