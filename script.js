const btn = document.querySelector('.btn');
const body = document.querySelector('body');

const colors = ['darkblue','darkred','darkgreen','darkgray'];

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[random];
});