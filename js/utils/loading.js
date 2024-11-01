
/* JavaScript Updates */
function showLoadingIndicator() {
    // Store current state of monitors
    const wasLeftOpen = pressed_left_window;
    const wasRightOpen = pressed_right_window;
    
    // Close monitors if they're open (without toggling pressed state)
    if (pressed_left_window) {
        const left_monitor = document.getElementById('left_monitor');
        left_monitor.classList.remove('left_monitor');
        left_monitor.classList.add('left_monitor2');
        const left_arrow = document.getElementById('left_arrow');
        left_arrow.classList.remove('left_arrow2');
        left_arrow.classList.add('left_arrow');
    }
    if (pressed_right_window) {
        const right_monitor = document.getElementById('right_monitor');
        right_monitor.classList.remove('right_monitor');
        right_monitor.classList.add('right_monitor2');
        const left_arrow = document.getElementById('right_arrow');
        right_arrow.classList.remove('right_arrow2');
        right_arrow.classList.add('right_arrow');
    }

    const elements = [
        left_arrow,
        right_arrow,
        keyboard,
        typing_area
    ];
    
    elements.forEach(el => {
        el.classList.add('fade-out-signal');
    });

    setTimeout(() => {
        elements.forEach(el => {
            el.style.display = 'none';
            el.classList.remove('fade-out-signal');
        });
        
        loadingDiv.style.display = 'block';
        loadingGif.style.display = 'block';
        loadingWord.style.display = 'block';
    }, 1500);
}

function removeLoadingIndicator() {
    loadingDiv.style.display = 'none';
    loadingGif.style.display = 'none';
    loadingWord.style.display = 'none';

    const elements = [
        left_arrow,
        right_arrow,
        keyboard,
        typing_area
    ];

    elements.forEach(el => {
        el.style.display = 'block';
        el.style.opacity = '0';
        el.classList.remove('fade-out-signal');
        el.classList.add('fade-in-signal');
    });

    setTimeout(() => {
        if (pressed_left_window) {
            const left_monitor = document.getElementById('left_monitor');
            left_monitor.classList.remove('left_monitor2');
            left_monitor.classList.remove('left_monitor_before');
            left_monitor.classList.add('monitor', 'left_monitor');
            const left_arrow = document.getElementById('left_arrow');
            left_arrow.classList.remove('left_arrow');
            left_arrow.classList.add('left_arrow2');
        }
        if (pressed_right_window) {
            const right_monitor = document.getElementById('right_monitor');
            right_monitor.classList.remove('right_monitor2');
            right_monitor.classList.remove('right_monitor_before');
            right_monitor.classList.add('monitor', 'right_monitor');
            const left_arrow = document.getElementById('right_arrow');
            right_arrow.classList.remove('right_arrow');
            right_arrow.classList.add('right_arrow2');
        }

        elements.forEach(el => {
            el.classList.remove('fade-in-signal');
            el.style.opacity = '';
        });
    }, 1500);
}
window.showLoadingIndicator = showLoadingIndicator;
window.removeLoadingIndicator = removeLoadingIndicator;
