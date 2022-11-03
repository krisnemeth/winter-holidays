//function to set up Canvas API
function setupCanvas(){
    // getting the canvas element from the DOM, and setting canvas size
    let canvas = document.getElementById('canvas');
    canvas.height = '30';
    canvas.width = '60';

    // defining the line art for LOGO
    if (canvas.getContext){
        let layout = canvas.getContext('2d');
        layout.beginPath();

        layout.lineWidth = 3;
        layout.lineCap = "round";
        layout.strokeStyle = '#fff';

        layout.moveTo(5, 5);
        layout.lineTo(20, 25);

        layout.moveTo(20, 25);
        layout.lineTo(20, 5);

        layout.moveTo(20, 5);
        layout.lineTo(35, 25);

        layout.moveTo(35, 25);
        layout.lineTo(35, 5);

        layout.moveTo(35, 5);
        layout.lineTo(55, 25);

        layout.moveTo(50, 20);
        layout.lineTo(35, 20);

        layout.stroke();
    }
}

window.onload = setupCanvas();