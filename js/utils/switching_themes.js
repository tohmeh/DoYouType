function updateThemeButtons(color) {
    const buttonSuffix = color === 'brown' ? 'brown' : 'yellow';
    left_arrow.src = `images/ui elements/${buttonSuffix}_arrow.png`;
    right_arrow.src = `images/ui elements/${buttonSuffix}_arrow.png`;
    restart_button.src = `images/ui elements/${buttonSuffix}_restart.png`;
    next_button.src = `images/ui elements/${buttonSuffix}_next.png`;
}

function switch_theme(theme) {
    // Show loading indicator immediately
    showLoadingIndicator();

    // Set the path for the new background image based on the selected theme
    let newBackgroundPath;
    switch (theme) {
        case 'retro':
            newBackgroundPath = 'images/backgrounds/retro.jpeg';
            break;
        case 'ghibli':
            newBackgroundPath = 'images/backgrounds/ghibli.png';
            break;
        case 'simpsons':
            newBackgroundPath = 'images/backgrounds/simpson.jpg';
            break;
        default:
            newBackgroundPath = 'images/backgrounds/retro.jpeg';
    }

    // Preload the new background image
    const img = new Image();
    img.src = newBackgroundPath;

    img.onload = () => {
        currentTextIndex = 0; // Reset to the first text for the new theme

        // Switch typing texts based on theme
        switch (theme) {
            case 'retro':
                typingTexts = retroTypingTexts;
                themeStylesheet.href = 'css/retro.css'; // Update stylesheet
                break;
            case 'ghibli':
                typingTexts = ghibliTypingTexts;
                themeStylesheet.href = 'css/ghibli.css'; // Update stylesheet
                break;
            case 'simpsons':
                typingTexts = simpsonsTypingTexts;
                themeStylesheet.href = 'css/simpsons.css'; // Update stylesheet
                break;
            default:
                typingTexts = retroTypingTexts;
                themeStylesheet.href = 'css/retro.css'; // Update stylesheet
        }

        // Update the current typing content
        typing_area_content = typingTexts[currentTextIndex];

        // Remove loading indicator after the image is fully loaded
        removeLoadingIndicator();
        // Reset the monitor content
        reset_monitor_content();

    };

    // Add error handling in case image fails to load
    img.onerror = () => {
        console.error('Failed to load background image');
        removeLoadingIndicator(); // Ensure loading indicator is removed even on error
    };
}

window.updateThemeButtons = updateThemeButtons;
window.switch_theme = switch_theme;


