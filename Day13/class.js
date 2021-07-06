// var promise=new Promise((resolve,reject)=>{
//     let a=1+1
//     if(a===3){
//         resolve({
//             "success":true
//         })
//     }
//     else{
//         reject({
//             "failed":false
//         }
           
//         )
//     }
//     console.loglog("A")
// })
// promise.then(()=>{
//     console.log("promise resolved")
// })
// .catch(()=>{
//     console.log("promise was rejected")
// })
// //promise run the fuction without calling
// console.log("hello")

// fetch('https://api.github.com/users/ChandanaReddy07')
// .then(res=> res.json())
// .then(data=> console.log(data))
const btn=document.querySelector('button')
const input=document.querySelector('input')

async function helo(username){
    const res=await fetch(`https://api.github.com/users/${username}`)
    //await directly delvers data from url means no then statement
    const data=await res.json()
    return data
   // console.log(res)
}
//async function returns promise

btn.addEventListener('click',async ()=>{
    const username=input.value
    let response=helo(username)
    let user = await response
    console.log(user)
})

//fetch api

btn.addEventListener('click',async ()=>{
   fetch('https://api.github.com/users/ChandanaReddy07',
   {
       method:'post',
       headers:{
           'Accept':"application/json",
            'Content-Type':'application/json'
       },
       body: JSON.stringify({content:"heloo"})

   
}).then(res=> res.json())
 .then(data=> console.log(data))
})