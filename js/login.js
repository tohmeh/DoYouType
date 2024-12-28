function switchToSignup() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    loginForm.classList.add('slide-up');
    signupForm.classList.add('slide-up');
    signupForm.style.visibility = 'visible'; // Use 'visible', not 'block'
    
    setTimeout(() => signupForm.classList.add('active'), 50);
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function switchToLogin() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    signupForm.classList.remove('active');
    
    setTimeout(() => {
        loginForm.classList.remove('slide-up');
        signupForm.classList.remove('slide-up');
    }, 50);
    
    // Wait for 1 second before hiding the signup form
    await wait(300);
    
    signupForm.style.visibility = 'hidden'; // Hide again if needed
}
