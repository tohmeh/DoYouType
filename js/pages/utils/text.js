function iterate_text()
{
    currentTextIndex = (currentTextIndex + 1 ) % typingTexts.length;
    typing_area_content = typingTexts[currentTextIndex];
    reset_monitor_content();
}

function reset_monitor_content()
{
    currentIndex = 0;
    num_errors = 0;
    startTime = null;
    begin_count = 0;
    isFinished = false;
    
    // Clear interval if it's running
    clearInterval(intervalId);
    intervalId = null;
    
    // Reset display elements
    wpm_box.innerHTML = '0';  // Reset live WPM display
    final_wpm_result.innerHTML = '';  // Clear final WPM result
    final_acc_result.innerHTML = '';  // Clear final accuracy result
    user_input.value = '';  // Clear the input field
    
    // Reset typing area display to start
    updateDisplay();
    document.querySelector('.result_prompt').style.display = 'none';
    document.querySelector('.result_prompt_below').style.display = 'none';
    
    // Focus the input field to start typing again
    user_input.focus();
}

window.iterate_text = iterate_text;
window.reset_monitor_content = reset_monitor_content;