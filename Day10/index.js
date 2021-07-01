const cards=document.querySelectorAll(".card");
console.log(cards);


var isFlipped = false;
var one;
var two;

cards.forEach((man)=>man.addEventListener("click",flip));

function flip(){

  this.classList.add("flip");
  if(!isFlipped){
    isFlipped=true;
    firstCard=this;
  }
  else{
    secondCard = this;
    console.log(firstCard)
    console.log(secondCard)
    checkIt();
  }
}


function reset(){

   isFlipped = false;
   firstCard="null";
   secondCard="null";

}

var success=()=>{

  firstCard.removeEventListener('click',flip);
  secondCard.removeEventListener('click',flip);
  reset();
}

var fail=()=>{

 setTimeout(()=>{
  firstCard.classList.remove("flip");
  secondCard.classList.remove("flip");
  reset();
 },1000);
  
}
function checkIt(){
  if(firstCard.id===secondCard.id){
    success();
  }
  else 
  fail();
  
}

(function shuffle(){
  cards.forEach((card)=>{
    var index =Math.floor(Math.random()*16);
    card.style.order=index;
  });
})();