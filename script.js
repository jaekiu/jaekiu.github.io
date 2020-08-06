var button = document.querySelector('button');
var buttonBackground = document.querySelector('.button-background');

function animateButton(width) {
    anime({
        /* describe the animation details */
        targets: buttonBackground,
        // Properties 
        width: width,
        // Property Parameters
        duration: 500,
        easing: 'easeInOutQuad'
    })
}

function enterButton() { animateButton('0%') };
function leaveButton() { animateButton('90%') };

button.addEventListener('mouseenter', enterButton, false);
button.addEventListener('mouseleave', leaveButton, false);