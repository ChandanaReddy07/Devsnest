//1
// Write a JavaScript program to list the properties of a JavaScript object. 
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
// Sample Output: name,sclass,rollno

function keys1(obj) 
 {
    if (Object.keys) return Object.keys(obj);
  
  }
  var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

console.log(keys1(student));
//2
// Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

function keys1(obj) 
 {
    delete obj.rollno
  
  }

  var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

    

console.log(keys1(student));

//3 from internet
// Write a JavaScript program to get the length of a JavaScript object.
// Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
Object.objsize = function(Myobj) {
  var osize = 0, key;
  for (key in Myobj) {
      if (Myobj.hasOwnProperty(key)) osize++;
  }
  return osize;
};

var student = { 
name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

var objsize = Object.objsize(student);
console.log('Size of the current object : '+objsize);


//5
function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
    var radius= cyl_diameter/2
    this.Vol = cyl_height * Math.PI * radius * radius;
    
  }
  
  //like frd function
//   Cylinder.prototype.Volume = function () {
//     var radius = this.cyl_diameter / 2;
//     return this.cyl_height * Math.PI * radius * radius;
//   };
  
  var cyl = new Cylinder(7, 4);
  // Volume of the cylinder with four decimal places.
  console.log('volume =', cyl.Vol.toFixed(4));

//6

var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

//const x= ['chandnana redyy','kunal agerwal','aditya bhowmick','neha reddy']

 function compare_to_sort(x,y) 
  {
   if (x.title < y.title)
     return -1;
   if (x.title > y.title)
     return 1;
   return 0;
  }
 
 console.log(library.sort(compare_to_sort));