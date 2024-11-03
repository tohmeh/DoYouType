const ghibli_button = document.getElementById('ghibli_button');
const retro_button = document.getElementById('retro_button');
const simpson_button = document.getElementById('simpson_button');
const start_typing_button = document.getElementById('start_typing_button');
const level1 = document.getElementById('level1');
const level2 = document.getElementById('level2');
const level3 = document.getElementById('level3');
const level4 = document.getElementById('level4');
const level5 = document.getElementById('level5');
const loading_intro_gif = document.getElementById('loading_intro_gif');
let activated_theme = 0;
let activated_level = 0;
const themeButtons = [retro_button, simpson_button, ghibli_button];

// Handle theme buttons
retro_button.addEventListener('click', () => {
    themeButtons.forEach(btn => btn.classList.remove('active_retro_button', 'active_simpson_button', 'active_ghibli_button'));
    retro_button.classList.add('active_retro_button');
    activated_theme = 1;
    appear_start();
    localStorage.setItem('selectedTheme', 'retro');
});

simpson_button.addEventListener('click', () => {
    themeButtons.forEach(btn => btn.classList.remove('active_retro_button', 'active_simpson_button', 'active_ghibli_button'));
    simpson_button.classList.add('active_simpson_button');
    activated_theme = 1;
    appear_start();
    localStorage.setItem('selectedTheme', 'simpson');
});

ghibli_button.addEventListener('click', () => {
    themeButtons.forEach(btn => btn.classList.remove('active_retro_button', 'active_simpson_button', 'active_ghibli_button'));
    ghibli_button.classList.add('active_ghibli_button');
    activated_theme = 1;
    appear_start();
    localStorage.setItem('selectedTheme' , 'ghibli');
});

function fadeOutIntroContent() {
    // Select all child elements within the intro container
    const introContents = document.querySelectorAll('.intro_content');
    const introContainer = document.querySelector('.intro');
    
    // Loop through each element and add the fade-out class
    introContents.forEach(element => {
        element.classList.add('fade-out');
    });

    // Use a timeout to remove the content after the transition duration
    setTimeout(() => {
        introContainer.style.justifyContent = 'center';
        introContainer.style.alignItems = 'center';
        loading_intro_gif.style.display = 'block';
        introContents.forEach(element => {
            element.remove(); // Remove each child element from the DOM
        });
    }, 2000); // Duration should match the CSS transition time (1s here)
}

// Call the function when needed


const levelButtons = [level1, level2, level3, level4, level5];

level1.addEventListener('click', () => {
    levelButtons.forEach(btn => btn.classList.remove('active_level1', 'active_level2', 'active_level3', 'active_level4', 'active_level5'));
    level1.classList.add('active_level1');
    activated_level = 1;
    appear_start();
    localStorage.setItem('selectedLevel', '1');
});

level2.addEventListener('click', () => {
    levelButtons.forEach(btn => btn.classList.remove('active_level1', 'active_level2', 'active_level3', 'active_level4', 'active_level5'));
    level2.classList.add('active_level2');
    activated_level = 1;
    appear_start();
    localStorage.setItem('selectedLevel', '2');
});

level3.addEventListener('click', () => {
    levelButtons.forEach(btn => btn.classList.remove('active_level1', 'active_level2', 'active_level3', 'active_level4', 'active_level5'));
    level3.classList.add('active_level3');
    activated_level = 1;
    appear_start();
    localStorage.setItem('selectedLevel', '3');
});

level4.addEventListener('click', () => {
    levelButtons.forEach(btn => btn.classList.remove('active_level1', 'active_level2', 'active_level3', 'active_level4', 'active_level5'));
    level4.classList.add('active_level4');
    activated_level = 1;
    appear_start();
    localStorage.setItem('selectedLevel', '4');
});

level5.addEventListener('click', () => {
    levelButtons.forEach(btn => btn.classList.remove('active_level1', 'active_level2', 'active_level3', 'active_level4', 'active_level5'));
    level5.classList.add('active_level5');
    activated_level = 1;
    appear_start();
    localStorage.setItem('selectedLevel', '5');
});

function appear_start()
{
    if (activated_theme && activated_level)
    {
        start_typing_button.style.display = 'flex';
    }
}

function showFirstLoadingIndicator()
{

}


start_typing_button.addEventListener('click', ()=>{

    fadeOutIntroContent();
    setTimeout(()=>{
        window.location.href = "index.html";  
    }, 3000);
})
