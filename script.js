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

const menuBtn = document.querySelector('.menu');
const navUl = document.querySelector('.nav-ul');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navUl.classList.add('show');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navUl.classList.remove('show');
        menuOpen = false;
    }
})
