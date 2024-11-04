
function finishTyping() {
    isFinished = true;
    clearInterval(intervalId);
    calculateWPM();  // Calculate final WPM
    
    // Calculate accuracy
    const totalCharacters = typing_area_content.length;
    const accuracy = Math.floor(((totalCharacters - num_errors) / totalCharacters) * 100);
    final_acc_result.innerHTML = accuracy + '%';  // Display accuracy without decimals
    document.querySelector('.result_prompt').style.display = 'flex';
    document.querySelector('.result_prompt_below').style.display = 'flex';

    // Increment test counter
    totalTests++;

    // Add current test's WPM and accuracy to totals
    totalWPM += parseInt(final_wpm_result.innerHTML);  // Use innerHTML instead of .value to get the displayed WPM
    totalAcc += accuracy;

    // Calculate averages
    const avgWPMValue = Math.floor(totalWPM / totalTests);
    const avgAccValue = Math.floor(totalAcc / totalTests);

    avg_wpm.innerHTML = avgWPMValue;
    avg_acc.innerHTML = avgAccValue;

    wpm_box.innerHTML = '_';
    live_acc.innerHTML = '_';
    if (parseInt(final_wpm_result.innerHTML) < wpm_speed || accuracy < 92)
    {

        applyLoseEffect(parseInt(final_wpm_result.innerHTML), accuracy);
    }
    else
    {
        applyWinEffect();
        applyGlowEffect();
    }    
}

function calculateWPM() {

    const currentTime = new Date();
    const timePassed = (currentTime - startTime) / 1000;
    const liveWpm = ((currentIndex / 5) / timePassed) * 60;
    const liveWpmPrompt = '' + Math.floor(liveWpm) + '';
    const totalCharacters = typing_area_content.length;
    const accuracy = Math.floor(((totalCharacters - num_errors) / totalCharacters) * 100);
    live_acc.innerHTML = accuracy + '%';

    if (currentIndex == typing_area_content.length) {
        final_wpm_result.innerHTML = liveWpmPrompt;
    } else {
        wpm_box.innerHTML = liveWpmPrompt;
    }
}


window.finishTyping = finishTyping;
window.calculateWPM = calculateWPM;