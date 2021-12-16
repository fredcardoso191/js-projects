let altura = 0
let largura = 0
let vidas = 1
let tempo = 10

let criaMoscaTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', ' ')

/*if(nivel === 'normal') {
    criaMoscaTempo = 1500
} else if(nivel === 'dificil') {
    criaMoscaTempo = 1000
} else if(nivel === 'muitodificil') {
    criaMoscaTempo = 750
}*/

switch (nivel) {
    case 'normal':
        criaMoscaTempo = 1500
    case 'dificil':
        criaMoscaTempo = 1000
    case 'muitodificil':
        criaMoscaTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function(){
    tempo--
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

    //remove mosca anterior (caso exista)
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove()
        if (vidas > 3) {
            alert('Game Over')
            window.location.href = 'fim-de-jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
        vidas++
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //cria elemento html
    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosca)

    console.log(ladoAleatorio())
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)
    switch (classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}