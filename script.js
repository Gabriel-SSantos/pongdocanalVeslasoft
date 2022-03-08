let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let buton = document.getElementsByClassName('bots')[0]
//buton.addEventListener('onclick', cima)
function cima(){
    if(esquerda.y > 0){
        esquerda.y -= esquerda.speed*3.5
    }
}
function baixo(){
    if(esquerda.y + esquerda.altura < canvas.height){
        esquerda.y += esquerda.speed*3.5
    }
}
function cima1(){
    if(direita.y > 0){
        direita.y -= direita.speed*3.5
    }
    
}
function baixo1(){
    if(direita.y + direita.altura < canvas.height){
        direita.y += direita.speed*3.5
    }
}
let teclas = {}
let bola={
    x: canvas.width/2 - 10,
    y: canvas.height/2 - 10,
    altura: 10,
    largura: 10,
    dirx: -1,
    dirY: 1,
    mod: 0,
    speed: 1
}
let esquerda = {
    x: 2.5,
    y: canvas.height/2 - 12.5,
    altura: 25,
    largura: 7.5,
    score: 0,
    speed: 3
}
let direita = {
    x: 290,
    y: canvas.height/2 - 12.5,
    altura: 25,
    largura: 7.5,
    score: 0,
    speed: 3
}
document.addEventListener('keydown', function(e){
    teclas[e.keyCode] = true
}, false)
document.addEventListener('keyup', function(e){ 
     delete teclas[e.keyCode]
}, false)
function movebloco(){
    if(87 in teclas && esquerda.y > 0){
        esquerda.y -= esquerda.speed
    }
    if(83 in teclas && esquerda.y + esquerda.altura < canvas.height){
        esquerda.y += esquerda.speed
    }
    if(38 in teclas && direita.y > 0){
        direita.y -= direita.speed
    }
    if(40 in teclas && direita.y + direita.altura < canvas.height){
        direita.y += direita.speed
    }
}
function movebola(){
    if(esquerda.x + esquerda.largura >= bola.x && esquerda.y <= bola.y + bola.altura && esquerda.y + esquerda.altura > bola.y)
    {
        bola.dirx = 1 
        bola.mod += 0.09
    } 
    if(bola.y + bola.altura >= direita.y && bola.y <= direita.y + direita.altura && bola.x + bola.largura >= direita.x){
        bola.dirx = -1
        bola.mod += 0.09
    }
    if(bola.y <= 0){
        bola.dirY = 1
        bola.mod += 0.09
    } 
    if(bola.y + bola.altura >= canvas.height){
        bola.dirY = -1
        bola.mod += 0.09
    }
    bola.x += (bola.speed + bola.mod) * bola.dirx
    bola.y += (bola.speed + bola.mod) * bola.dirY
    if(bola.x < esquerda.x + esquerda.largura - 2.5){
        newgame("Player 2")
    } else if(bola.x + bola.largura > direita.x + 7.5){
        newgame('Player 1')
    }
}
function newgame(winner){
    if(winner == "Player 1"){
        esquerda.score++
    } else{
        direita.score++
    }
    esquerda.y = canvas.height/2 - esquerda.altura/2 
    direita.y = esquerda.y
    bola.y = canvas.height/2 - bola.altura/2 
    bola.x = canvas.width/2 - bola.largura/2
    bola.mod = 0
}
function desenhar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    movebloco()
    movebola()
    ctx.fillStyle = "white"
    ctx.fillRect(esquerda.x,esquerda.y,esquerda.largura,esquerda.altura)
    ctx.fillRect(direita.x,direita.y,direita.largura,direita.altura)
    ctx.fillRect(bola.x,bola.y,bola.largura,bola.altura)
    ctx.font = "10px Arial"
    ctx.fillText("Player  1: " + esquerda.score, 25, 10)
    ctx.fillText('Player 2: ' + direita.score, canvas.width - 80, 10) 
}
setInterval(desenhar, 15)

