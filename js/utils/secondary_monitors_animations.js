
function left_monitor_animation_function()
{
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
}

function right_monitor_animation_function()
{
    pressed_right_window = !pressed_right_window;

    if (pressed_right_window)
    {
        const right_monitor= document.getElementById('right_monitor');
        right_monitor.classList.remove('right_monitor2');
        right_monitor.classList.remove('right_monitor_before');
        right_monitor.classList.add('monitor', 'right_monitor');
        const left_arrow = document.getElementById('right_arrow');
        right_arrow.classList.remove('right_arrow');
        right_arrow.classList.add('right_arrow2');
    }
    else{
        const right_monitor = document.getElementById('right_monitor');
        right_monitor.classList.remove('right_monitor');
        right_monitor.classList.add('right_monitor2');
        const left_arrow = document.getElementById('right_arrow');
        right_arrow.classList.remove('right_arrow2');
        right_arrow.classList.add('right_arrow');
    }
}

window.left_monitor_animation_function = left_monitor_animation_function;
window.right_monitor_animation_function = right_monitor_animation_function;