//1
function is_array(name){
   if(toString.call(name)==="[object Array]"){
       return true
   }
   else{
       return false
   }
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log(typeof('w3resource'))
console.log(typeof([1, 2, 4, 0]))

//2
function array_Clone(name){
   return name
 }
 
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//3
function first(name,ind=1){
    return name.slice(0,ind)
  }
  
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//4
function array_mesh(name){
    x=""
    name.forEach(element => {
        x+="+" + element
    });
    
     return x.slice(1)
  }
console.log(array_mesh(["Red", "Green", "White", "Black"]))

//5
function most_freq(arr1){
    let mf = 1;
    let m = 0;
    let item;
    for (let i=0; i<arr1.length; i++)
    {
            for (let j=i; j<arr1.length; j++)
            {
                    if (arr1[i] == arr1[j])
                     m++;
                    if (mf<m)
                    {
                      mf=m; 
                      item = arr1[i];
                    }
            }
            m=0;
    }
    console.log(`${item} ( ${mf} times ) `) ;
  }

  most_freq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])