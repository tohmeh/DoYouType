function updateThemeButtons(color) {
    const buttonSuffix = color === 'brown' ? 'brown' : 'yellow';
    left_arrow.src = `images/ui elements/${buttonSuffix}_arrow.png`;
    right_arrow.src = `images/ui elements/${buttonSuffix}_arrow.png`;
    restart_button.src = `images/ui elements/${buttonSuffix}_restart.png`;
    next_button.src = `images/ui elements/${buttonSuffix}_next.png`;
}

function switch_theme(theme) {
    // Reset typing state
    currentIndex = 0;
    begin_count = 0;
    isFinished = false;
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

    // Reset the monitor content
    reset_monitor_content();
}

window.updateThemeButtons = updateThemeButtons;
window.switch_theme = switch_theme;


