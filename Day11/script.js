const x= document.querySelector(".slideshow-container .context")
console.log(x)
var count=0
const list=[
    {
        quest:"Who invented the Light Bulb?",
        options:["Thomas Alva Edison","albert Einstine", "Tesla","Galilio"],
        correct:"Thomas Alva Edison"
    },
    {
        quest:"Which planet in our solar system is known as the Red Planet?",
        options:["Mars","Earth","Venus","Saturn"],
        correct:"Mars"
    },
    {
        quest:"Who invented the Telephone?",
        options:["Thomas Alva Edison","albert Einstine", "Tesla","Alexander Graham Bell"],
        correct:"Alexander Graham Bell"
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
   {
   var option=document.createElement("li")
   var buttons=document.createElement("span")
   buttons.className="optionek"
   buttons.id=j
   buttons.addEventListener("click",(e)=>{ console.log("yeh"+list[e.target.id])
       if(list[i].options[e.target.id]===list[i].correct)
       console.log("yess correct"+ ++count)
   })
   buttons.textContent=`Option ${j+1}`
   option.innerText=list[i].options[j]
   options.appendChild(option)
   options.appendChild(buttons)

   


}
   
}



for(var i=0;i<list.length;i++){
    quest(i)
    //  var v=document.querySelectorAll(".optionSelected")
    // console.log("v"+v)
    // console.log("quesss"+ list[i])
    
    // v.forEach(but=>but.addEventListener("click",(e) => {

    //     console.log("quesss"+ list[i])
        
    //     if(list[i].quest[e.target.id]===list[i].correct)

    //     console.log("clasnam yess correct"+e.target.id)
    // }))
}

   
 
// function checkIt (e) {

//     console.log("class name"+e.target.className)
//     // if (e.target.className == 'delete') {
//     //     const li = e.target.parentElement;
//     //   list.removeChild(li);
//     }



