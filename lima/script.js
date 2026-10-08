const entrar = document.querySelector("#entrar")
entrar.addEventListener("click", function(){
    document.querySelector("#inicio").style.display = "none"
    document.querySelector("#setores").style.display = "block"
})

function mostrarsetor(setor) {
    document.querySelector("#setores").style.display = "none"
    document.querySelector("#inspetoria").style.display = "none"
    document.querySelector("#coordenacao").style.display = "none"
    document.querySelector("#secretaria").style.display = "none"
    document.querySelector("#cozinha").style.display = "none"
    
    document.querySelector("#inspetoria").style.display = "none"
    document.querySelector("#coordenacao").style.display = "none"
    document.querySelector("#secretaria").style.display = "none"
    document.querySelector("#cozinha").style.display = "none"
    
    document.querySelector("#" + setor).style.display = "block"

}