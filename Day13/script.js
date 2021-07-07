
var y=document.querySelector(".po")
var z=document.querySelector(".qoutes")


var x=async function(){


    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      console.log(`${data.content} —${data.author}`)
      z.innerHTML=data.content
    }) 
}

y.addEventListener("click",x)