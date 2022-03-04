let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let teclas = {}
let bola={
    x: canvas.width/2 - 7.5,
    y: canvas.height/2 - 7.5,
    altura: 7.5,
    largura: 15,
    dirx: -1,
    dirY: 1,
    mod: 0,
    speed: 50
}
let esquerda = {
    x: 10,
    y: canvas.height/2 - 30,
    altura: 25,
    largura: 15,
    score: 0,
    speed: 15
}
let direita = {
    x: 260,
    y: canvas.height/2 - 30,
    altura: 25,
    largura: 15,
    score: 0,
    speed: 15
}
function desenhar(){
    ctx.fillStyle = "white"
    ctx.fillRect(esquerda.x,esquerda.y,esquerda.largura,esquerda.altura)
    ctx.fillRect(direita.x,direita.y,direita.largura,direita.altura)
    ctx.fillRect(bola.x,bola.y,bola.largura,bola.altura)
}
desenhar()
