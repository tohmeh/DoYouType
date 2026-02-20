# DoYouType

A browser-based typing test with themed visuals, live stats, and a leaderboard — built as a full-stack learning project inspired by MonkeyType.

## Features

- Tracks words per minute and accuracy in real time as you type
- Ships with themed modes (Retro, Ghibli, Simpsons) each with its own background and color palette
- Lets users build and save their own themes with a custom background image and full color control
- Shows a live on-screen keyboard that highlights every key you press
- Records results to a leaderboard that ranks players by average WPM and accuracy
- Supports user accounts with login, session management, and sign-out

## Getting Started

This project requires a PHP server and a MySQL database.

1. Clone the repository and point a PHP-capable web server (e.g. Apache via XAMPP) at the project root.
2. Create a MySQL database and update `api/db_config.php` with your credentials.
3. Import the required schema (tables for users, themes, and stats).
4. Open `login.php` in your browser to get started.

A demonstration video is included: [Watch the demo](doyoutype%20video.mp4)

## Project Structure

```
api/          Backend PHP endpoints (auth, stats, themes, leaderboard)
css/          Stylesheets organized by page
js/           Frontend logic (input handling, animations, results)
images/       Bundled theme backgrounds and UI icons
uploads/      User-uploaded theme backgrounds
```
