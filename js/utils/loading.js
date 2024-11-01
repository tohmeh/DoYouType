
/* JavaScript Updates */
function showLoadingIndicator() {
    // Add fade-out class to all elements
    // First close both monitors
    if (pressed_left_window) {
        left_monitor_animation_function();
    }
    if (pressed_right_window) {
        right_monitor_animation_function();
    }
    const elements = [
        left_arrow,
        right_arrow,
        keyboard,
        typing_area
    ];
    
    // First make sure all elements are visible
    elements.forEach(el => {
        el.classList.add('fade-out-signal');
    });

    // After animation completes
    setTimeout(() => {
        elements.forEach(el => {
            el.style.display = 'none';
            el.classList.remove('fade-out-signal');
        });
        
        // Show loading elements
        loadingDiv.style.display = 'block';
        loadingGif.style.display = 'block';
        loadingWord.style.display = 'block';
    }, 1500);
}

function removeLoadingIndicator() {
    // Hide loading elements
    loadingDiv.style.display = 'none';
    loadingGif.style.display = 'none';
    loadingWord.style.display = 'none';

    const elements = [
        left_arrow,
        right_arrow,
        keyboard,
        typing_area
    ];

    // Make elements visible but fully transparent
    elements.forEach(el => {
        el.style.display = 'block';
        el.style.opacity = '0';
        // Remove any existing fade classes
        el.classList.remove('fade-out-signal');
        // Add fade-in class
        el.classList.add('fade-in-signal');
    });

    // After animation completes
    setTimeout(() => {
        if (!pressed_left_window) {
            left_monitor_animation_function();
        }
        if (!pressed_right_window) {
            right_monitor_animation_function();
        }

        elements.forEach(el => {
            el.classList.remove('fade-in-signal');
            el.style.opacity = ''; // Reset to default
        });
    }, 1500);
}


window.showLoadingIndicator = showLoadingIndicator;
window.removeLoadingIndicator = removeLoadingIndicator;
