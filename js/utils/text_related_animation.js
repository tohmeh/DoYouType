function applyLoseEffect(wpm, acc, duration = 2000) {
    if (wpm < wpm_speed) {
        final_wpm_result.classList.add('fail_glow');
    }
    if (acc < 92) {
        final_acc_result.classList.add('fail_glow');
    }

    setTimeout(() => {
        final_wpm_result.classList.remove('fail_glow');
        final_acc_result.classList.remove('fail_glow');
    }, duration);

    monitor.classList.add('lose-animation');

    next_button.style.display = 'none';
    restart_button.style.display = 'block';

    setTimeout(() => {
        monitor.classList.remove('lose-animation');
    }, duration);
}

function applyWinEffect(duration = 2000) {
    monitor.classList.add('win-animation');
    next_button.style.display = 'block';
    restart_button.style.display = 'block';

    setTimeout(() => {
        monitor.classList.remove('win-animation');
    }, duration);
}

function applyGlowEffect(duration = 2000) {
    const elementsToGlow = [
        final_wpm_result, 
        final_acc_result, 
        wpm_box, 
        live_acc, 
        avg_acc, 
        avg_wpm
    ];
    
    elementsToGlow.forEach(element => {
        element.classList.add('retro-glow');
    });

    setTimeout(() => {
        elementsToGlow.forEach(element => {
            element.classList.remove('retro-glow');
        });
    }, duration);
}

// Attach functions to the window object to globalize them
window.applyLoseEffect = applyLoseEffect;
window.applyWinEffect = applyWinEffect;
window.applyGlowEffect = applyGlowEffect;
