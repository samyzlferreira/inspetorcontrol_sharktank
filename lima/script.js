const entrar = document.querySelector("#entrar");
entrar.addEventListener("click", function() {
    document.querySelector("#inicio").style.display = "none";
    document.querySelector("#setores").style.display = "block";
});
function mostrarsetor(setor) {
    document.querySelectorAll("section").forEach(function(secao) {
        secao.style.display = "none";
    });
    document.querySelector("#" + setor).style.display = "block";
}
function voltar() {
    document.querySelectorAll("section").forEach(function(secao) {
        secao.style.display = "none";
    });
    document.querySelector("#setores").style.display = "block";
}
document.querySelectorAll("a[href^='#']").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const setor = link.getAttribute("href").substring(1);
        mostrarsetor(setor);
    });
});
function adicionarcardapio() {
    const dia = document.querySelector("#dia").value;
    const refeicao = document.querySelector("#refeicao").value;
    if (dia == "" || refeicao == "") {
        alert("Preencha todos os campos!");
    } else {
        document.querySelector("#listacardapio").innerHTML += "<p>" + dia + ": " + refeicao + "</p>";
        document.querySelector("#dia").value = "";
        document.querySelector("#refeicao").value = "";
    }
}
function atualizaralunos() {
    const quantidade = document.querySelector("#quantidadealunos").value;
    if (quantidade == "") {
        alert("Digite a quantidade de alunos!");
    } else {
        document.querySelector("#totalalunos").innerHTML = quantidade;
    }
}