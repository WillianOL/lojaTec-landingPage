const menuMobile = document.querySelector(".botoes_de_acesso ul");
const botaoMobile = document.querySelector(".btnMobile span");

function abrirEFecharMenu() {
    menuMobile.classList.toggle("ativo")
    botaoMobile.classList.toggle("ativo")
    if(botaoMobile.classList.contains("ativo")){
        botaoMobile.innerHTML = "close"
    } else{
        botaoMobile.innerHTML = "menu"
    }
}

botaoMobile.addEventListener("click", abrirEFecharMenu)