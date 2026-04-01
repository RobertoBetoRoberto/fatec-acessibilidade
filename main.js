'use strict'

const aumentar = document.querySelector('.botaoAumentarFonte');
const diminuir = document.querySelector('.botaoDiminuirFonte');
const root = document.documentElement;

aumentar.addEventListener('click', function() {
    let tamanho = parseInt(getComputedStyle(root).getPropertyValue('--base-font'));
    root.style.setProperty('--base-font', (tamanho + 5) + 'px');
});

diminuir.addEventListener('click', function() {
    let tamanho = parseInt(getComputedStyle(root).getPropertyValue('--base-font'));
    if (tamanho > 12) {
        root.style.setProperty('--base-font', (tamanho - 5) + 'px');
    }
});

const botaoContraste = document.getElementById('botao-contraste');

botaoContraste.addEventListener("click", () => {
    document.body.classList.toggle("contraste");
});


--base-font