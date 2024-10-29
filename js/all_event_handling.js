//this are all the texts to type split by type .
const retroTypingTexts = [
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "Life is what happens when you're busy making other plans.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall."
];

const ghibliTypingTexts = [
    "The wind is rising! We must try to live!",
    "It's not the answer that I hold, it's my question.",
    "You're only a kid once, and when you're a kid, you need to be free."
];

const simpsonsTypingTexts = [
    "Do not take life too seriously. You will never get out of it alive.",
    "I can't promise I'll try, but I'll try to try.",
    "The road to hell is paved with good intentions."
];


//this are all the html used to set an event or help an event 
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
const retroTheme = document.getElementById('retro-theme');
const gibliTheme = document.getElementById('ghibli-theme');
const simpsonTheme = document.getElementById('simpsons-theme');


let pressed_left_window = 0;
let pressed_right_window = 0;
let currentIndex = 0;
let currentTextIndex = 0 ;
let startTime = null;
let begin_count = 0;
let typing_area_content = typing_area.textContent;    
let intervalId = null;
let isFinished = false;
let num_errors = 0;
let totalTests = 0;
let totalWPM = 0;
let totalAcc = 0;
let typingTexts = retroTypingTexts;



typing_area_content = typingTexts[currentTextIndex];


retroTheme.addEventListener('click', function() {switch_theme('retro');});
gibliTheme.addEventListener('click', function() {switch_theme('ghibli');});
simpsonTheme.addEventListener('click', function() {switch_theme('simpsons');});
document.addEventListener('keydown', handle_user_input);


document.addEventListener('keyup', clear_after_user_input);


restart_button.addEventListener('click', reset_monitor_content);


next_button.addEventListener('click', iterate_text);

left_arrow.addEventListener('click', left_monitor_animation_function);
right_arrow.addEventListener('click', right_monitor_animation_function);




updateDisplay();
user_input.focus();