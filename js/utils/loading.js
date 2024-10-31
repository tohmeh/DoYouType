function showLoadingIndicator() {
    // Add the fade-out class to each element that you want to gradually disappear
    left_arrow.classList.add('fade-out-signal');
    right_arrow.classList.add('fade-out-signal');
    keyboard.classList.add('fade-out-signal');
    typing_area.classList.add('fade-out-signal');
    right_monitor.classList.add('fade-out-signal');
    left_monitor.classList.add('fade-out-signal');
    
    // Wait for the fade-out effect to complete before hiding the elements and showing the loading indicator
    setTimeout(() => {
        left_arrow.style.display = 'none';
        right_arrow.style.display = 'none';
        keyboard.style.display = 'none';
        typing_area.style.display = 'none';
        right_monitor.style.display = 'none';
        left_monitor.style.display = 'none';
        // Display the loading indicator
        loadingDiv.style.display = 'block';
        loadingGif.style.display = 'block';
        loadingWord.style.display = 'block';
    }, 1500); // Matches the animation duration (1.5s)
}
function removeLoadingIndicator() {
    // Hide the loading indicator
    loadingDiv.style.display = 'none';
    loadingGif.style.display = 'none';
    loadingWord.style.display = 'none';

    // Show the other elements with the fade-in animation
    left_arrow.style.display = 'block';
    right_arrow.style.display = 'block';
    keyboard.style.display = 'block';
    typing_area.style.display = 'block';
    left_monitor.style.display = 'block';
    right_monitor.style.display = 'block';

    // Add the fade-in class to each element
    left_arrow.classList.add('fade-in-signal');
    right_arrow.classList.add('fade-in-signal');
    keyboard.classList.add('fade-in-signal');
    typing_area.classList.add('fade-in-signal');

    // Optionally, remove the fade-in class after the animation completes
    setTimeout(() => {
        left_arrow.classList.remove('fade-in-signal');
        right_arrow.classList.remove('fade-in-signal');
        keyboard.classList.remove('fade-in-signal');
        typing_area.classList.remove('fade-in-signal');
        right_monitor.classList.remove('fade-in-signal');
        left_monitor.classList.remove('fade-in-signal');
    }, 1500); // Matches the animation duration (1.5s)
}

window.showLoadingIndicator = showLoadingIndicator;
window.removeLoadingIndicator = removeLoadingIndicator;