const x= document.querySelector(".slideshow-container")
console.log(x)

var list=[
    {
        quest:"Who invented the Light Bulb?",
        options:["Thomas Alva Edison","albert Einstine", "Tesla","Galilio"]
    },
    {
        quest:"Which planet in our solar system is known as the Red Planet?",
        options:["Mars","Earth","Venus","Saturn"]
    },
    {
        quest:"Who invented the Telephone?",
        options:["Thomas Alva Edison","albert Einstine", "Tesla","Alexander Graham Bell"]
    }
]

function quest(i){
    var parenty=document.createElement("div")
    parenty.className="mySlides"

    x.appendChild(parenty)
    
    var question= document.createElement("span")
    parenty.appendChild(question)
    question.className="quest"
    question.innerText=list[i].quest;
    var options=document.createElement("ol")
    options.className="opts"
    question.appendChild(options)
   
    for(var j=0;j<4;j++)
   { var option=document.createElement("li")
   var buttons=document.createElement("button")
   buttons.className="optionSelected"
   buttons.id=j
   buttons.textContent=`Option ${j+1}`
   option.innerText=list[i].options[j]
   options.appendChild(option)
   options.appendChild(buttons)

   


}
   
}



for(var i=0;i<list.length;i++){
    quest(i)
}


//creating buttons




function checkIt(){
   console.log(this)
}



