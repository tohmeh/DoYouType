
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

function handle_user_input()
{
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
        updateDisplay();
    }
    else if (!['Shift', 'Control', 'Alt', 'CapsLock', 'Tab', 'Escape'].includes(key_pressed)) {   
        num_errors++;
    }
    highlightKey(key_pressed);
}

function clear_after_user_input()
{
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('active');
    });
}

window.handle_user_input = handle_user_input;
window.clear_after_user_input = clear_after_user_input;
window.highlightKey = highlightKey;
window.updateDisplay = updateDisplay;