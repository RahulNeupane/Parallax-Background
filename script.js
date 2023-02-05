const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 700
let gameSpeed = 5

const backgroundLayer1 = new Image()
backgroundLayer1.src = './layers/layer-1.png'
const backgroundLayer2 = new Image()
backgroundLayer2.src = './layers/layer-2.png'
const backgroundLayer3 = new Image()
backgroundLayer3.src = './layers/layer-3.png'
const backgroundLayer4 = new Image()
backgroundLayer4.src = './layers/layer-4.png'
const backgroundLayer5 = new Image()
backgroundLayer5.src = './layers/layer-5.png'

function animate(){
    ctx.drawImage(backgroundLayer4,0,0)
    requestAnimationFrame(animate)
}
animate()
