const cards=document.querySelectorAll(".card");
console.log(cards);



var count=0;
var isFlipped = false;
var one;
var two;


cards.forEach((man)=>man.addEventListener("click",flip));



function flip(){

  this.classList.add("flip");
  if(!isFlipped){
    isFlipped=true;
    one=this;
  }
  else{
    two = this;
    
    checkIt();
  }
}
function reset(){
   isFlipped = false;
   one="null";
   two="null";
}

var success=()=>{
  one.removeEventListener('click',flip);
  two.removeEventListener('click',flip);
  if(count===7){
   cards.forEach((man)=>{
     if(!man.classList.contains(flip))
     setTimeout(()=>{
      man.classList.add("flip")
      count=0
    //  started()  
     },1000);
    

   })
  }
  reset();
}

var fail=()=>{
 setTimeout(()=>{
  one.classList.remove("flip");
  two.classList.remove("flip");
  reset();
 },1000);
}
function checkIt(){
  if(one.dataset.image!==two.dataset.image){
    fail();
  }
  else 
  { count++;
    success();
}
}


(function shuffle(){
  cards.forEach((card)=>{
    var index =Math.floor(Math.random()*16);
    card.style.order=index;
  });
})();