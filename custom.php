<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Theme Customizer</title>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/add_theme/custom.css">
</head>
<body>
    <div class="container">
        <h1>Theme Customizer</h1>
        
        <form id="themeForm" action="api/save_theme.php" method="POST" enctype="multipart/form-data">
            <div class="form-group">
                <label for="theme_name">Theme Name:</label>
                <input type="text" id="theme_name" name="theme_name" required>
            </div>

            <div class="form-group">
             <label for="background">Background Image:</label>
              <input type="file" id="background" name="background" accept="image/*" required>
            </div>

            <div class="form-group">
                <label for="text_color">Text Color:</label>
                <div class="color-input-group">
                    <input type="color" id="text_color_picker" value="#ffedf7">
                    <input type="text" id="text_color" name="text_color" value="#ffedf7" required>
                </div>
            </div>

            <div class="form-group">
                <label for="monitor_gr_1">Monitor Gradient 1:</label>
                <div class="color-input-group">
                    <input type="color" id="monitor_gr_1_picker" value="#f74ee6">
                    <input type="text" id="monitor_gr_1" name="monitor_gr_1" value="#f74ee6" required>
                </div>
            </div>

            <div class="form-group">
                <label for="monitor_gr_2">Monitor Gradient 2:</label>
                <div class="color-input-group">
                    <input type="color" id="monitor_gr_2_picker" value="#fde663">
                    <input type="text" id="monitor_gr_2" name="monitor_gr_2" value="#fde663" required>
                </div>
            </div>

            <div class="form-group">
                <label for="outline">Outline:</label>
                <div class="color-input-group">
                    <input type="color" id="outline_picker" value="#02033d">
                    <input type="text" id="outline" name="outline" value="#02033d" required>
                </div>
            </div>

            <div class="form-group">
                <label for="key_borders">Key Borders:</label>
                <div class="color-input-group">
                    <input type="color" id="key_borders_picker" value="#ffedf7">
                    <input type="text" id="key_borders" name="key_borders" value="#ffedf7" required>
                </div>
            </div>

            <div class="form-group">
                <label for="cursor_and_updated_text">Cursor and Updated Text:</label>
                <div class="color-input-group">
                    <input type="color" id="cursor_and_updated_text_picker" value="#00ff8d">
                    <input type="text" id="cursor_and_updated_text" name="cursor_and_updated_text" value="#00ff8d" required>
                </div>
            </div>

            <div class="form-group">
                <label for="secondary_text_color">Secondary Text Color:</label>
                <div class="color-input-group">
                    <input type="color" id="secondary_text_color_picker" value="#ffe600">
                    <input type="text" id="secondary_text_color" name="secondary_text_color" value="#ffe600" required>
                </div>
            </div>

            <button type="submit">Save Theme</button>
        </form>
        <div class="back-link">
            <a href="main.php">Go Back</a>
        </div>
    </div>
    
<script>
document.querySelectorAll('input[type="color"]').forEach(picker => {
    picker.addEventListener('input', function() {
        // When color picker changes, update the text input
        const textInput = document.getElementById(this.id.replace('_picker', ''));
        textInput.value = this.value;
    });
});

document.getElementById('themeForm').addEventListener('submit', function(e) {
});
</script>
</body>
</html>