let amigos = [];  

function adicionarAmigo() {  
    const input = document.getElementById("amigo");  
    if (!input) {  
        console.error("Elemento de entrada não encontrado");  
        return;  
    }  
    const nome = input.value;
    if (nome === "") {  
        alert("Digite um nome válido!");  
        return;  
    }  
    if (amigos.includes(nome)) {  
        alert("Este nome já foi adicionado!");  
        return;  
    }  
    amigos.push(nome);  
    atualizarLista();  
    input.value = "";  
}  

function atualizarLista() {  
    let lista = document.getElementById("listaAmigos");  
    lista.innerHTML = "";  
    amigos.forEach((amigo, index) => {  
        let li = document.createElement("li");  
        li.textContent = amigo;  
        let botaoRemover = document.createElement("button");  
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerAmigo(index);  
        li.appendChild(botaoRemover);  
        lista.appendChild(li);  
    });  
}  

function removerAmigo(index) {  
    amigos.splice(index, 1);  
    atualizarLista();  
}  

function sortearAmigo() {  
    if (amigos.length < 2) {  
        alert("Adicione pelo menos 2 amigos para realizar o sorteio!");  
        return;  
    }  
    let sorteio = [...amigos];  
    let resultado = {};  
    for (let amigo of amigos) {  
        let possiveis = sorteio.filter(a => a !== amigo);  
        if (possiveis.length === 0) {  
            return alert("Sorteio inválido, tente novamente!");  
        }  
        let sorteador = possiveis[Math.floor(Math.random() * possiveis.length)];  
        resultado[amigo] = sorteador;  
        sorteio.splice(sorteio.indexOf(sorteador), 1);  
    }  
    exibirResultado(resultado);
}  

function exibirResultado(resultado) {  
    const listaResultado = document.getElementById("resultado");  
    listaResultado.innerHTML = "";  
    for (let [amigo, sorteado] of Object.entries(resultado)) {  
        const li = document.createElement("li");  
        li.textContent = `${amigo} → ${sorteado}`;  
        listaResultado.appendChild(li);  
    }  
}