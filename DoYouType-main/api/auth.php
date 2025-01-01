<?php
session_start();
require_once 'api/db_config.php';

$login_error = $signup_error = "";

function handleLogin($conn) {
    global $login_error;
    
    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];

        $query = "SELECT * FROM users WHERE username = '$username'";
        $result = @mysqli_query($conn, $query);

        if ($result && @mysqli_num_rows($result) > 0) {
            $row = @mysqli_fetch_array($result);
            if (password_verify($password, $row['password'])) {
                $_SESSION['user_id'] = $row['id'];
                $_SESSION['username'] = $row['username'];
                
                $stats_query = "INSERT IGNORE INTO stats (user_id, avg_wpm, avg_acc) VALUES ({$row['id']}, 0, 0)";
                @mysqli_query($conn, $stats_query);
                
                header("Location: main.php");
                exit();
            } else {
                $login_error = "Wrong password!";
            }
        } else {
            $login_error = "User not found!";
        }
    }
    return $login_error;
}

function handleSignup($conn) {
    global $signup_error;
    
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
                $new_user_id = mysqli_insert_id($conn);
                
                $stats_query = "INSERT INTO stats (user_id, avg_wpm, avg_acc) VALUES ($new_user_id, 0, 0)";
                @mysqli_query($conn, $stats_query);
                
                $signup_error = "Account created successfully!";
            } else {
                $signup_error = "Error creating account!";
            }
        }
    }
    return $signup_error;
}