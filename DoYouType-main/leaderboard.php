<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retro Leaderboard - DoYouType</title>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/leaderboard/leaderboard.css">
</head>
<?php
require_once 'api/leaderboard.php';
?>
<body>
    <div class="main_div">
        <h1 class="leaderboard-title">HIGH SCORES</h1>
        <table class="leaderboard-table">
            <thead>
                <tr>
                    <th>RANK</th>
                    <th>PLAYER</th>
                    <th>WPM</th>
                    <th>ACCURACY</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if ($leaderboardData->num_rows > 0) {
                    $rank = 1;
                    while ($row = $leaderboardData->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>{$rank}</td>";
                        echo "<td>{$row['player_name']}</td>";
                        echo "<td class='wpm-column'>{$row['avg_wpm']}</td>";
                        echo "<td>{$row['avg_acc']}%</td>";
                        echo "</tr>";
                        $rank++;
                    }
                } else {
                    echo "<tr><td colspan='4'>No data available</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </div>
</body>
</html>