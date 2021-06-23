var cell = document.querySelectorAll('.cell');
console.log("box"+cell)

var x=0




cell.forEach((man)=>man.addEventListener("click",flip));

function flip(){
    if(this.classList.contains('cellClicked')){
        this.classList.remove('cellClicked')
        x--
        myFunction()
    }
    else
        {this.classList.add('cellClicked')
        x++
        myFunction()
}
}
function myFunction() {

    const y=document.getElementById('myOutput');
    y.textContent='Selected : '+ x + ' '+ ' ' + 'UnSelected : '+ (36-x) ;
  }
myFunction()