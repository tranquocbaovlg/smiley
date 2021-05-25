let btnSmile = document.getElementById('btn-smile');
let btnNeutal = document.getElementById('btn-neutal');
let btnSad = document.getElementById('btn-sad');
let mouth = document.getElementById('mouth');
let root = document.documentElement;
let button = document.getElementsByClassName('button');


btnSmile.onclick = function() {
    mouth.classList.remove('mouth-neutal');
    mouth.classList.remove('mouth-sad');
    mouth.classList.add('mouth-smile');
    root.style.setProperty('--color-dark','var(--color-green-dark)');
    root.style.setProperty('--color-light','var(--color-green-light)');
}
btnNeutal.onclick = function() {
    mouth.classList.remove('mouth-smile');
    mouth.classList.remove('mouth-sad');
    mouth.classList.add('mouth-neutal');
    root.style.setProperty('--color-dark','var(--color-yellow-dark)');
    root.style.setProperty('--color-light','var(--color-yellow-light)');
}
btnSad.onclick = function() {
    mouth.classList.remove('mouth-neutal');
    mouth.classList.remove('mouth-smile');
    mouth.classList.add('mouth-sad');
    root.style.setProperty('--color-dark','var(--color-red-dark)');
    root.style.setProperty('--color-light','var(--color-red-light)');
}