<?php
require_once 'api/auth.php';

$login_error = handleLogin($conn);
$signup_error = handleSignup($conn);

// Close the database connection
if ($conn) {
    @mysqli_close($conn);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - DoYouType</title>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/login.css" id="style_sheet">
</head>

<body>
    <div class="main_div">
        <!-- Login Form -->
        <div id="login-form" class="login-form">
            <h1 class="form-title">Login</h1>
            <form method="POST" action="">
                <div class="form-groups">
                    <label>Username</label>
                    <input type="text" class="input-field" placeholder="Enter username" name="username">
                </div>
                <div class="form-groups">
                    <label>Password</label>
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
                    <label>Password</label>
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