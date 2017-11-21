function drawBox(x,y,w,h) {
    c.strokeStyle = '#00f';
    c.lineWidth = "1";
    c.strokeRect(x,y,w,h);  

}

function drawCircle(x,y,r,canvas_elem) {
    canvas_elem.strokeStyle = '#f00';
    canvas_elem.fillStyle = '#fff';
    canvas_elem.lineWidth = "1";
    canvas_elem.beginPath();
    canvas_elem.arc(x,y,r,0,Math.PI*2,true); 
    canvas_elem.closePath();
    canvas_elem.stroke();
}
var bods;
var time_step = 1;

function resetBods (){
    bods = {
        pos:
            {x:[],y:[]},
        vel:
            {x:[],y:[]},
        acc:
            {x:[],y:[]},
        mass:[],
        N:0
        };
}

function addBody(x,y,vx,vy,m) {
    bods.pos.x[bods.N] = x;
    bods.pos.y[bods.N] = y;
    bods.vel.x[bods.N] = vx;
    bods.vel.y[bods.N] = vy;
    bods.mass[bods.N] = m;
    bods.N += 1;
}

function update_position(index) {
    for (var i = 0; i < bods.N; i ++){
        bods.pos.x[i] += bods.vel.x[i] * time_step
        bods.pos.y[i] += bods.vel.y[i] * time_step
    }
}

function draw(canvas_elem) {
    for (var i = 0; i < bods.N; i ++) {
        drawCircle(bods.pos.x[i], bods.pos.y[i], 3, canvas_elem);
    }
}
resetBods();
for (var i = 400; i< 600; i+=20) {
    for (var j = 150; j < 350; j+=20){
        x = Math.floor(Math.random() * 11) - 5
        y = Math.floor(Math.random() * 11) - 5
        addBody(i,j,x,y,0);
        //Math.floor(Math.random() * 11) returns an int 0-10 inclusive
        // - 5 returns -5 to 5 inclusive
    }
}

//everything has been initialized
function run(canvas_elem, context) {
    context.clearRect(0, 0, canvas_elem.width, canvas_elem.height);
    draw(context);
    update_position(context);
    
}
function go(canvas_elem, contet){
    setInterval(function() {run(canvas_elem, contet);}, 40);
}





