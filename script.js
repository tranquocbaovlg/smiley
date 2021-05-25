let btnSmile = document.getElementById('btn-smile');
let btnNeutal = document.getElementById('btn-neutal');
let btnSad = document.getElementById('btn-sad');
let mouth = document.getElementById('mouth');
let root = document.documentElement;
let button = document.getElementsByClassName('button');

btnNeutal.classList.add('button-selected');

btnSmile.onclick = function() {
    mouth.classList.remove('mouth-neutal', 'mouth-sad');
    mouth.classList.add('mouth-smile');
    root.style.setProperty('--color-dark','var(--color-green-dark)');
    root.style.setProperty('--color-light','var(--color-green-light)');

    btnSmile.classList.add('button-selected');
    btnNeutal.classList.remove('button-selected');
    btnSad.classList.remove('button-selected');
}
btnNeutal.onclick = function() {
    mouth.classList.remove('mouth-smile', 'mouth-sad');
    mouth.classList.add('mouth-neutal');
    root.style.setProperty('--color-dark','var(--color-yellow-dark)');
    root.style.setProperty('--color-light','var(--color-yellow-light)');

    btnSmile.classList.remove('button-selected');
    btnNeutal.classList.add('button-selected');
    btnSad.classList.remove('button-selected');
}
btnSad.onclick = function() {
    mouth.classList.remove('mouth-smile', 'mouth-neutal');
    mouth.classList.add('mouth-sad');
    root.style.setProperty('--color-dark','var(--color-red-dark)');
    root.style.setProperty('--color-light','var(--color-red-light)');

    btnSmile.classList.remove('button-selected');
    btnNeutal.classList.remove('button-selected');
    btnSad.classList.add('button-selected');
}