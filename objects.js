// a()
// function a(){
//     console.log(2);//2
// }
// console.log(1)//1

//callback

// function g(name,callback)
// {
//     console.log("Hello",name);
//     callback();
// }
// function abc(){
//     console.log("bye");
// }
// g("rahul",abc);

// function getdata(personname,age,callback1,callback2){
//     let msg ="hello"+personname;
//     let ageofperson=age;
//     callback1(msg);
//     callback2(ageofperson);
    
// }
// function g1(greet){
//     console.log(greet);
// }
// function g2(age){
//     console.log(age);

// }getdata("rahul",26,g1,g2);


//async Callback()
// console.log("start");
// setTimeout(()=>{
//     console.log("This msg is delayed")
// },2000)

// console.log("End");
//_________________
// console.log("start");
// setTimeout(()=>{
//     console.log("This msg is print second")
// },2000)
// setTimeout(()=>{
//     console.log("This msg is print first")
// },1000)
// console.log("End");


// function asycOperation(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const success = true;
//        if(success){
//         resolve("operatio resolve");
//        }else{
//         reject("operation failed");
//        }

//     },2000);
//     });
// }
// console.log("start");
// asycOperation().then(result =>{
//     console.log(result);
    
// }).catch((error)=>{
// console.log(error);
// })
// console.log("end");

// console.log(1);
// const promise = new Promise((resolve) =>{
//     console.log(2);
//     resolve()
//     console.log(3)
// });
// console.log(4);
//  promise.then(()=>{
//     console.log(5);
//  }).then(()=>{
//     console.log(6)
//  })
//  console.log(7);
//   setTimeout(()=>{
//     console.log(8);
//   },10)
//   setTimeout(()=>{
//     console.log(9);
//   },0)


// new Promise((resolve,reject)=>{
//     resolve(1);
//     resolve(2);
//     reject('error')
// }).then((value)=>{
//  console.log(value)
// },(error)=>{
//     console.log('error')
// }
// )


//imp --> arg --> function ---> 
// new Promise((resolve, reject) => {
//   resolve(1)
//   resolve(2)
//   reject('error')
// }).then((value) => {
//   console.log(value)
// }, (error) => {
//   console.log('error')
// })

// // function arg to promise // 
// Promise.resolve(1)
// .then(() => 2) // return 2 
// .then(3) // ignore 
// .then((value) => value * 3) // 6 
// .then(Promise.resolve(4)) // ignore 
// .then(console.log(value)) // 6 

// async// await

// function my() {
//     return Promise.resolve("Hello");
// }

// async function my() {
//     return "Hello"; // returns a promise 
// }

// my.then(function(value) => {
//     console.log(value);
// })
// api calls--> 2000 sec 
// await will wait until promise gives us some value
//const p = await my();
//  <script >
//       async  function  my(){
//           let promise=new Promise(function(resolve,reject){
//               resolve("Hey resolved");
//           })
//           document.getElementById("h1").innerHTML=await promise;
//       }
//       my();
      
//     </script>

// console.log(foo);
// var foo = 'Hello';
// console.log(bar);
// function bar() {
//     return 'World';
// }
// console.log(bar());

//let arr=[2,5,1,10];
function sum(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    
}let arr=[2,5,1,10];
console.log(sum(arr));