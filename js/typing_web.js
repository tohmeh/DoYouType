const typing_area = document.getElementById('typing-area');
let typing_area_content = typing_area.textContent;
const user_input = document.getElementById('user-input');
const left_arrow = document.getElementById('left_arrow');
const right_arrow = document.getElementById('right_arrow');
const final_wpm_result = document.getElementById('final_wpm_result');
const final_acc_result = document.getElementById('final_acc_result');
const restart_button = document.getElementById('restart_button');
const next_button = document.getElementById('next_button');
const live_acc = document.getElementById('live_acc');
const avg_wpm = document.getElementById('avg_wpm');
const avg_acc = document.getElementById('avg_acc');
const style_sheet = document.getElementById('style_sheet');
let pressed_left_window = 0;
let pressed_right_window = 0;
let currentIndex = 0;
let currentTextIndex = 0 ;
let startTime = null;
let begin_count = 0;
const wpm_box = document.getElementById('live_wpm');    
let intervalId = null;
let isFinished = false;
let num_errors = 0;
let totalTests = 0;
let totalWPM = 0;
let totalAcc = 0;
const themeStylesheet = document.getElementById('style_sheet');
const retroTheme = document.getElementById('retro-theme');
const gibliTheme = document.getElementById('ghibli-theme');
const simpsonTheme = document.getElementById('simpsons-theme');

retroTheme.addEventListener('click', function() {
    themeStylesheet.href = 'css/retro_typing.css';
    left_arrow.src = 'images/ui elements/yellow_arrow.png'; // Set to Retro arrow image
    right_arrow.src = 'images/ui elements/yellow_arrow.png'; // Set to Retro arrow image
    restart_button.src = 'images/ui elements/yellow_restart.png'; // Set to Retro restart button image
    next_button.src = 'images/ui elements/yellow_next.png'; // Set to Retro next button image
});

gibliTheme.addEventListener('click', function() {
    themeStylesheet.href = 'css/gibli.css';
    left_arrow.src = 'images/ui elements/brown_arrow.png'; // Set to Ghibli arrow image
    right_arrow.src = 'images/ui elements/brown_arrow.png'; // Set to Ghibli arrow image
    restart_button.src = 'images/ui elements/brown_restart.png'; // Set to Ghibli restart button image
    next_button.src = 'images/ui elements/brown_next.png'; // Set to Ghibli next button image
});

simpsonTheme.addEventListener('click', function(){
    themeStylesheet.href = 'css/simpson.css';
    left_arrow.src = 'images/ui elements/yellow_arrow.png'; // Set to Ghibli arrow image
    right_arrow.src = 'images/ui elements/yellow_arrow.png'; // Set to Ghibli arrow image
    restart_button.src = 'images/ui elements/yellow_restart.png'; // Set to Ghibli restart button image
    next_button.src = 'images/ui elements/yellow_next.png'; // Set to Ghibli next button image
})

const typingTexts = [
    "The quick brown fox jumps over the lazy dog.",
    "Pack my box with five dozen liquor jugs.",
    "How vexingly quick daft zebras jump!",
    "Sphinx of black quartz, judge my vow.",
    "The five boxing wizards jump quickly."
];

function updateDisplay() {
    let updated_content = '';
    
    for (let i = 0; i < typing_area_content.length; i++) {
        if (i < currentIndex) {
            updated_content += `<span class="updated_text">${typing_area_content.charAt(i)}</span>`;
        } else if (i == currentIndex) {
            updated_content += `<span class="cursor">${typing_area_content.charAt(i)}</span>`;
        } else {
            updated_content += typing_area_content[i];
        }
    }
    
    typing_area.innerHTML = updated_content;
    user_input.value = typing_area_content.slice(0, currentIndex);

    if (currentIndex === typing_area_content.length && !isFinished) {
        finishTyping();
    }
}

document.addEventListener('keydown', (event) => {
    if (isFinished) return;  // Ignore keystrokes if typing is finished

    let key_pressed = event.key;

    if (begin_count == 0 && key_pressed === typing_area_content.charAt(0)) {
        if (!startTime) {
            startTime = new Date();
            intervalId = setInterval(calculateWPM, 1000);
            begin_count++;
            currentIndex++;
            updateDisplay();
        }
    }   
    else if (key_pressed === typing_area_content.charAt(currentIndex) && currentIndex < typing_area_content.length) {
        currentIndex++;
        updateDisplay();
    } 
    else if (key_pressed === 'Backspace' && currentIndex > 0) {
        // Don't count Backspace as an error, and allow the user to correct mistakes
        currentIndex--;
        if (num_errors > 0) {
            num_errors--;  // Reduce error count if user is correcting themselves
        }
        updateDisplay();
    }
    else if (!['Shift', 'Control', 'Alt', 'CapsLock', 'Tab', 'Escape'].includes(key_pressed)) {
        // Only count an error if it's a wrong key, not control keys or navigation keys
        num_errors++;
    }

    highlightKey(key_pressed);
});


document.addEventListener('keyup', (event) => {
    // Remove highlight from all keys
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('active');
    });
});

restart_button.addEventListener('click', () => {
    // Reset all necessary variables
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
});

next_button.addEventListener('click', ()=>{
    currentTextIndex = (currentTextIndex + 1 ) % typingTexts.length;
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
    typing_area_content = typingTexts[currentTextIndex];
    updateDisplay();
    document.querySelector('.result_prompt').style.display = 'none';
    document.querySelector('.result_prompt_below').style.display = 'none';
    
    // Focus the input field to start typing again
    user_input.focus();
})

function highlightKey(keyPressed) {
    const keyMap = {
        'Escape': 'key_escape',
        'Backspace': 'key_backspace',
        'Tab': 'key_tab',
        'CapsLock': 'key_capslock',
        'Enter': 'key_enter',
        'Shift': ['key_shift_left', 'key_shift_right'],
        'Control': ['key_ctrl_left', 'key_ctrl_right'],
        'Alt': ['key_alt_left', 'key_alt_right'],
        ' ': 'key_space'
    };

    const keyId = keyMap[keyPressed] || `key_${keyPressed.toLowerCase()}`;

    if (Array.isArray(keyId)) {
        keyId.forEach(id => {
            const key = document.getElementById(id);
            if (key) key.classList.add('active');
        });
    } else {
        const key = document.getElementById(keyId);
        if (key) key.classList.add('active');
    }
}

left_arrow.addEventListener('click', () => {

    pressed_left_window = !pressed_left_window;

    if (pressed_left_window)
    {
        const left_monitor = document.getElementById('left_monitor');
        left_monitor.classList.remove('left_monitor2');
        left_monitor.classList.remove('left_monitor_before');
        left_monitor.classList.add('monitor', 'left_monitor');
        const left_arrow = document.getElementById('left_arrow');
        left_arrow.classList.remove('left_arrow');
        left_arrow.classList.add('left_arrow2');
    }
    else{
        const left_monitor = document.getElementById('left_monitor');
        left_monitor.classList.remove('left_monitor');
        left_monitor.classList.add('left_monitor2');
        const left_arrow = document.getElementById('left_arrow');
        left_arrow.classList.remove('left_arrow2');
        left_arrow.classList.add('left_arrow');
    }
});

right_arrow.addEventListener('click', () => {
    pressed_right_window = !pressed_right_window;

    if (pressed_right_window)
    {
        const left_monitor = document.getElementById('right_monitor');
        left_monitor.classList.remove('right_monitor2');
        left_monitor.classList.remove('right_monitor_before');
        left_monitor.classList.add('monitor', 'right_monitor');
        const left_arrow = document.getElementById('right_arrow');
        left_arrow.classList.remove('right_arrow');
        left_arrow.classList.add('right_arrow2');
    }
    else{
        const left_monitor = document.getElementById('right_monitor');
        left_monitor.classList.remove('right_monitor');
        left_monitor.classList.add('right_monitor2');
        const left_arrow = document.getElementById('right_arrow');
        left_arrow.classList.remove('right_arrow2');
        left_arrow.classList.add('right_arrow');
    }
});


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

    applyGlowEffect();
}

function applyGlowEffect() {
    const elementsToGlow = [final_wpm_result, final_acc_result, wpm_box, live_acc, avg_acc, avg_wpm];
    
    elementsToGlow.forEach(element => {
        element.classList.add('retro-glow');
    });

    // Remove the glow effect after 1 second
    setTimeout(() => {
        elementsToGlow.forEach(element => {
            element.classList.remove('retro-glow');
        });
    }, 2000);
}
// Automatically focus the input field
updateDisplay();
user_input.focus();