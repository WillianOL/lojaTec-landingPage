const menuMobile = document.querySelector(".botoes_de_acesso ul");
const botaoMobile = document.querySelector(".btnMobile span");

function abrirEFecharMenu() {
    menuMobile.classList.toggle("ativo")
}

botaoMobile.addEventListener("click", abrirEFecharMenu)