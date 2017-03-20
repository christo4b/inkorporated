var canvas = document.getElementById("drawydrawdraw");
    canvas.width = document.body.clientWidth; //document.width is obsolete
    canvas.height = window.innerHeight; //document.height is obsolete
var context = canvas.getContext("2d");
context.lineWidth=1;
var drawing = false;

var space = document.body.clientWidth / 360;    
for (var i = 0; i < 360; i = i + 1){
    context.fillStyle = "hsl(" + i + ", 100%, 50%)";
    context.fillRect(i * space,window.innerHeight-50,space,50);
}

$(canvas).mousedown(function(e){ 
    drawing = true;
    if(e.pageY>=window.innerHeight-50){
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
    } 

});
$(canvas).mouseup(function(e){ 
    drawing = false;
    
});

