// Constantes e variáveis globais ================================================

let flagStartGame = true 
let flagDrawMenu = true
const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")
const rectButtonWidth = 150
const rectButtonHeight = 75
var rect = {
    x: (canvas.width - rectButtonWidth)/2,
    y: (canvas.height - rectButtonHeight)/2,
    width: rectButtonWidth,
    height: rectButtonHeight,
}

canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt)

    if (isInside(mousePos, rect)) {
        alert('clicked inside rect')
    } else {
        alert('clicked outside rect')
    }
}, false)
// Funções auxiliares ============================================================

// Funções para desenhar o tabuleiro
function drawLineBoard(initX,initY,lastX, lastY){
    ctx.beginPath()
    ctx.moveTo(initX, initY)
    ctx.lineTo(lastX, lastY)
    ctx.stroke()
}
function drawBoard(){
    drawLineBoard(175, 25, 175, 4750)
    drawLineBoard(325, 25, 325, 475)
    drawLineBoard(25, 175, 475, 175)
    drawLineBoard(25, 325, 475, 325)
}

// Funções para desenhar menu 
function loadImage(path) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = path;
        img.onload = () => resolve(img); 
        img.onerror = () => reject("imagem nao carregou");
    });
}

function drawButton(rect) {
    ctx.beginPath()
    ctx.rect(rect.x, rect.y, rect.width, rect.height)
    ctx.fillStyle = 'rgba(225,225,225,0.5)'
    ctx.fill()
    ctx.lineWidth = 2
    ctx.strokeStyle = '#000000'
    ctx.stroke()
    ctx.closePath()
    ctx.font = '40pt Kremlin Pro Web'
    ctx.fillStyle = '#000000'
    ctx.fillText('Start', rect.x + rect.width / 2, rect.y + 64)
}

async function drawMenu(){
    const img = await loadImage("./images/tic-tac-toe-game-on-orange.webp")

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    ctx.font = 'bold 60px Arial'       
    ctx.fillStyle = 'black'                        
    ctx.lineWidth = 2                 
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('Jogo da Velha', canvas.width / 2, 100)
    
    drawButton(rect)
}
// Para verificar se clicou nos botôes do jogo(menu)
function isInside(pos, rect) {
  return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}
function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

// Parte principal do código =================================================================

// if(flagStartGame){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// }
// flagStartGame = false
// drawBoard()
// if(flagDrawMenu){
//     drawMenu()
// }
drawMenu()
