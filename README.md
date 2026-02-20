# DoYouType

A web-based typing speed trainer where you race against the clock, track your progress over time, and compete with others on a global leaderboard.

## Features

- Measures words per minute and accuracy in real-time as you type
- Tracks your running averages across sessions and saves them to your account
- Shows a live on-screen keyboard that highlights each key as you press it
- Leaderboard that ranks players by average WPM and accuracy
- Theme system with built-in styles and a customizer to create your own with custom colors and background images

## Getting Started

Requirements: PHP, MySQL (or MariaDB), a local web server like Apache (XAMPP works well).

1. Create a MySQL database named `doyoutype` and import the schema
2. Place the project folder in your web server's root directory
3. Open `login.php` in your browser to create an account and start typing

## Project Structure

```
DoYouType/
├── api/          # PHP backend: auth, stats, themes, leaderboard
├── css/          # Stylesheets organized by page
├── js/           # Typing engine, input handling, animations
├── images/       # Bundled backgrounds and UI icons
├── uploads/      # User-uploaded theme backgrounds
├── main.php      # Main typing interface
├── login.php     # Login and signup
├── leaderboard.php
├── custom.php    # Theme creator
└── delete_theme.php
```
