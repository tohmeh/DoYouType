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
const loadingDiv = document.getElementById('loading_gif');
const Body = document.getElementById('body');
const loadingGif = document.getElementById('loading_gif_gif');
const loadingWord = document.getElementById('loading_word');
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
const theme = localStorage.getItem('selectedTheme');
const level = localStorage.getItem('selectedLevel');
console.log(theme);
console.log(level);
// Example usage
function getWPMSpeed() {
    const level = localStorage.getItem('selectedLevel');
    const speedMap = {
        '1': 20,
        '2': 40,
        '3': 60,
        '4': 80,
        '5': 100
    };
    return speedMap[level] || 40; // default to 40 if level not found
}

function loadThemeStyles() {
    const theme = localStorage.getItem('selectedTheme');
    
    // Show loading indicator with fade-out animation
    reset_monitor_content();
    // showFirstLoadingIndicator();

    // Set the path for the new background image based on the selected theme
    let newBackgroundPath;
    switch (theme) {
        case 'retro':
            newBackgroundPath = 'images/backgrounds/retro.jpeg';
            break;
        case 'ghibli':
            newBackgroundPath = 'images/backgrounds/ghibli.png';
            break;
        case 'simpsons':
            newBackgroundPath = 'images/backgrounds/simpson.jpg';
            break;
        default:
            newBackgroundPath = 'images/backgrounds/retro.jpeg';
    }

    // Preload the new background image
    const img = new Image();
    img.src = newBackgroundPath;

    // Set up the image load event handler
    img.onload = () => {
            currentTextIndex = 0; // Reset to the first text for the new theme

            // Switch typing texts and update the theme stylesheet
            switch (theme) {
                case 'retro':
                    typingTexts = retroTypingTexts;
                    themeStylesheet.href = 'css/retro.css';
                    updateThemeButtons('yellow');
                    break;
                case 'ghibli':
                    typingTexts = ghibliTypingTexts;
                    themeStylesheet.href = 'css/ghibli.css';
                    updateThemeButtons('brown');
                    break;
                case 'simpson':
                    typingTexts = simpsonsTypingTexts;
                    themeStylesheet.href = 'css/simpsons.css';
                    updateThemeButtons('yellow');
                    break;
                default:
                    typingTexts = retroTypingTexts;
                    themeStylesheet.href = 'css/retro.css';
                    updateThemeButtons('yellow');
            }

            // Update the current typing content
            typing_area_content = typingTexts[currentTextIndex];

            // Reset the monitor content
            reset_monitor_content();
    };
    wpm_speed = getWPMSpeed();
}

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


// showLoadingIndicator();
// removeLoadingIndicator();
loadThemeStyles();
updateDisplay();
user_input.focus();