//this are all the texts to type split by type .
const retroTypingTexts = [
    "The small choices we make each day ripple outward in ways we may never see.",
    "Wisdom comes not from counting the years, but from learning through them.",
    "The truest measure of progress is how we rise after facing obstacles."
];


const typing_area = document.getElementById('typing-area');
const user_input = document.getElementById('user-input');
const left_arrow = document.getElementById('left_arrow');
const right_arrow = document.getElementById('right_arrow');
const final_wpm_result = document.getElementById('final_wpm_result');
const final_acc_result = document.getElementById('final_acc_result');
const restart_button = document.getElementById('restart_button');
const next_button = document.getElementById('next_button');
const live_acc = document.getElementById('live_acc');
const wpm_box = document.getElementById('live_wpm');
const avg_wpm = document.getElementById('avg_wpm');
const avg_acc = document.getElementById('avg_acc');
const monitor = document.getElementById('monitor');
const themeStylesheet = document.getElementById('style_sheet');
const retroTheme = document.getElementById('retro-theme')
const keyboard = document.getElementById('keyboard');
const left_monitor = document.getElementById('left_monitor');
const right_monitor = document.getElementById('right_monitor');
let pressed_left_window = 0;
let pressed_right_window = 0;
let currentIndex = 0;
let currentTextIndex = 0 ;
let startTime = null;
let begin_count = 0;
let typing_area_content = retroTypingTexts[0];    
let intervalId = null;
let isFinished = false;
let num_errors = 0;
let totalTests = 0;
let totalWPM = 0;
let totalAcc = 0;
let typingTexts = retroTypingTexts;

typing_area_content = typingTexts[currentTextIndex];


document.addEventListener('keydown', handle_user_input);
document.addEventListener('keyup', clear_after_user_input);
restart_button.addEventListener('click', reset_monitor_content);
next_button.addEventListener('click', iterate_text);
left_arrow.addEventListener('click', left_monitor_animation_function);
right_arrow.addEventListener('click', right_monitor_animation_function);

updateDisplay();
user_input.focus();


