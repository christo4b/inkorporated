var canvas = document.getElementById("drawydrawdraw");
    canvas.width = document.body.clientWidth; //document.width is obsolete
    canvas.height = window.innerHeight; //document.height is obsolete
var context = canvas.getContext("2d");
var drawing = false;
//var hue;

function rainbowRainbow() {
	var space = document.body.clientWidth / 360;    
for (var i = 0; i < 360; i = i + 1){
    context.fillStyle = "hsl(" + i + ", 100%, 50%)";
    context.fillRect(i * space,window.innerHeight-50,space,50);
}
}
rainbowRainbow()

$(canvas).mousedown(function(e){ 
    drawing = true;
    if(e.pageY>=window.innerHeight-50){
		var space = document.body.clientWidth / 360; 
		var hue = Math.floor(e.pageX / space);
        context.strokeStyle = "hsl(" + hue + ", 100%, 50%)";
		context.lineWidth=10;
    } else {
        context.beginPath();
        context.moveTo(e.pageX, e.pageY);
        
    }
});
$(canvas).mousemove(function(e){ 
    if (drawing && e.pageY<window.innerHeight-50){
        context.lineTo(e.pageX, e.pageY);
        context.stroke();
//		console.log(hue);
//		context.strokeStyle = "hsl(" + hue + ", 100%, 50%)";

    } 

});
$(canvas).mouseup(function(e){ 
    drawing = false;
    
});
function geraldine(newValue) {
	context.lineWidth = newValue;
}
function leonard() {
	context.clearRect(0,0,canvas.width,canvas.height-50);
	rainbowRainbow()
}

