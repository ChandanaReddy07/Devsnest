const x= document.querySelector(".content")

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

function quest( i){
    var parenty=document.createElement("div")
    parenty.className="pitty"
    
    var question= document.createElement("span")
    parenty.appendChild(question)
    question.className="quest"
    question.innerText=list[i].quest;
    x.appendChild(question)
    var options=document.createElement("ol")
    options.className="opts"
    question.appendChild(options)
   
    for(var j=0;j<4;j++)
   { var option=document.createElement("li")
   option.innerText=list[i].options[j]
   options.appendChild(option)
}


}

quest(1)



function checkIt(){
   console.log(this)
}



