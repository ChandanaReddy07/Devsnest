// SELECT CANVAS ELEMENT
window.addEventListener('load',()=>{
    console.log("helo")
    const cvs = document.querySelector(".canvas");

    const ctx = cvs.getContext("2d");

cvs.height=window.innerHeight;
cvs.width=window.innerWidth;
var x
var x1,y1
let painting=false
function start(e){
    painting=true;
//    e.draw
x1=e.clientX
y1=e.clientY


}


function draw(e){
    if(!painting)return;
    
    ctx.lineWidth=10;
    ctx.lineCap="round"

    ctx.lineTo(e.clientX,e.clientY)
   
    // ctx.beginPath()
    ctx.moveTo(e.clientX,e.clientY)
    ctx.stroke()
}


function stop(e,y){
    painting=false;
    x2=e.clientX
    y2=e.clientY
    ctx.beginPath();
    if(y==="square")
{ctx.moveTo(x1,y1);
ctx.lineTo(x2,y1);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(x1,y1);
ctx.lineTo(x1,y2);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(x2,y1);
ctx.lineTo(x2,y2);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(x1,y2);
ctx.lineTo(x2,y2);
ctx.stroke();
    
    ctx.beginPath()}
    else if(y==="circle"){
        ctx.beginPath();
        ctx.lineWidth=10;
        ctx.lineCap="round"
    
        var x_center=(x2+x1)/2;
        var y_center=(y2+y1)/2;
       
        const r=Math.pow(Math.pow(x2-x1,2)+Math.pow(y2-y1,2),0.5)/2;
        ctx.moveTo(x_center+r,y_center);
         ctx.arc(x_center,y_center,r,0,Math.PI*2)
         ctx.stroke()
    }
}


function square(){

    x="square"
    
cvs.addEventListener("mousedown",start)
cvs.addEventListener("mouseup",(e)=>stop(e,x))
// draw a red line



}
function circle(){
    x="circle"
    cvs.addEventListener("mousedown",start)
    cvs.addEventListener("mouseup",(e)=>stop(e,x))
   
   
}
function random(){
    
    cvs.addEventListener("mousedown",start)
    cvs.addEventListener("mousemove",draw)
    cvs.addEventListener("mouseup",(e)=>stop(e,"randome"))
   
}
//random()
square()
circle()
 
// cvs.addEventListener("mousemove",draw)



})
