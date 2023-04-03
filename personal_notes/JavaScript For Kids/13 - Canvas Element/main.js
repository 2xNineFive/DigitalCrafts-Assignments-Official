const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

function drawStickMan () {
    ctx.fillStyle = 'red'
    ctx.fillRect(99,20,50,50)
    
    ctx.fillRect(95,90, 60, 60)
    
    ctx.fillRect(120, 65, 10 ,30)
    
    ctx.fillRect(70, 90, 110, 10)
    
    ctx.fillRect(95, 130, 10, 50)
    ctx.fillRect(145, 130, 10, 50)
}
drawStickMan();

// for (let i = 0; i < 8, i++) {
//     ctx.fillRect(i * 10, i * 10, 10, 10)
// }