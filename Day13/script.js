
var y=document.querySelector(".po")
var ul=document.querySelector(".ul")


var x=async function(){

for(let i=0;i<3;i++){
let z=document.createElement("div")
z.className="qoutes"
 let d= await fetch('https://api.quotable.io/random')
    // .then(response => response.json())
    // .then(data => {
    //   console.log(`${data.content} —${data.author}`)
    let data=await d.json()
      z.innerHTML=data.content
   
    ul.appendChild(z)
}
  
}

y.addEventListener("click",x)