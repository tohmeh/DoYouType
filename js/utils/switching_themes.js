function updateThemeButtons(color) {
    const buttonSuffix = color === 'brown' ? 'brown' : 'yellow';
    left_arrow.src = `images/ui elements/${buttonSuffix}_arrow.png`;
    right_arrow.src = `images/ui elements/${buttonSuffix}_arrow.png`;
    restart_button.src = `images/ui elements/${buttonSuffix}_restart.png`;
    next_button.src = `images/ui elements/${buttonSuffix}_next.png`;
}

function switch_theme(theme) {
    // Show loading indicator with fade-out animation
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

    // Set up the image load event handler
    img.onload = () => {
        // Delay applying the theme to wait for the animation to complete
        setTimeout(() => {
            currentTextIndex = 0; // Reset to the first text for the new theme

            // Switch typing texts and update the theme stylesheet
            switch (theme) {
                case 'retro':
                    typingTexts = retroTypingTexts;
                    themeStylesheet.href = 'css/retro.css';
                    break;
                case 'ghibli':
                    typingTexts = ghibliTypingTexts;
                    themeStylesheet.href = 'css/ghibli.css';
                    break;
                case 'simpsons':
                    typingTexts = simpsonsTypingTexts;
                    themeStylesheet.href = 'css/simpsons.css';
                    break;
                default:
                    typingTexts = retroTypingTexts;
                    themeStylesheet.href = 'css/retro.css';
            }

            // Update the current typing content
            typing_area_content = typingTexts[currentTextIndex];

            // Reset the monitor content
            reset_monitor_content();

            // Remove loading indicator and show elements with a fade-in animation
            removeLoadingIndicator();
        }, 1500); // Wait for the fade-out animation to complete
    };
}

window.updateThemeButtons = updateThemeButtons;
window.switch_theme = switch_theme;
