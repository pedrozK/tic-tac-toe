// Constantes e variáveis globais ================================================

let flagStartGame = true 
let flagDrawMenu = true
const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")
// Funções auxiliares ============================================================

// Essa Função desenha o tabuleiro
function drawBoard(){
    ctx.beginPath()
    ctx.moveTo(175, 25)
    ctx.lineTo(175, 475)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(325, 25)
    ctx.lineTo(325, 475)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(25, 175)
    ctx.lineTo(475, 175)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(25, 325)
    ctx.lineTo(475, 325)
    ctx.stroke()
}

function loadImage(path) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = path;
        img.onload = () => resolve(img); 
        img.onerror = () => reject("imagem nao carregou");
    });
}

async function drawMenu(){
    const img = await loadImage("./images/tic-tac-toe-game-on-orange.webp")

    ctx.drawImage(img, 0, 0, 600, 500)
    ctx.font = 'bold 60px Arial';         
    ctx.fillStyle = 'black';                          
    ctx.lineWidth = 2;                     
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Jogo da Velha', canvas.width / 2, 100);   
    
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