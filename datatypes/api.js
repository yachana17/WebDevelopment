//api --->blackbox--->op
//covid--->end points (api end points)--->
//fetch /axios--->boath are method to use  fetch data.

// async function foo(){
//     let promise = new Promise((resolve,reject )=>{
//         setTimeout(()=>resolve("done"),1000);
//     })
//     let result=await promise;
//     console.log(result);
// }
// foo();
// console.log("this will print first");



// async function foo(){
//     return 42; //async return promise, 42 is resolved value
// }
// foo().then(console.log);
// console.log("hello");// hello 42


// async function foo(){
//     console.log("hello");
//     return 42;
// }
// foo().then(console.log);//jb thak hm .then nhi karte hai function synchronized chalega


// function delay (ms){
//     return new Promise(resolve=> setTimeout(resolve,ms));

// } async function foo(){
//     console.log('start');//sync
//      await delay(1000);//async
//      console.log("end");
// } foo();
// console.log("after calling first");//


// async function foo(){
//     console.log("a");
//     await Promise.resolve();
//     console.log("b");//acb

// }foo();
// console.log("c");


// async function foo(){
//     console.log("start");
//     await new Promise(resolve=>setTimeout(resolve,1000));
//     console.log("end");
// }
// foo();//start
// foo();//start
// console.log("after calling foo twic");

// function a(){
//     console.log("11");

// }function a(){
//     console.log("11");
    
// }function a(){
//     console.log("111");
// }
// a();


//async function foo() {
    //   console.log('1');
    //   await new Promise(resolve => setTimeout(resolve, 100));
    //   console.log('2');
    //   return '3';
    // }
    
    // async function bar() {
    //   console.log('4');
    //   const result = await foo();
    //   console.log(result);
    // }
    
    // bar();
    // console.log('5');
    
    
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function foo() {
      console.log('Start');
      await delay(1000);
      console.log('After 1 second');
    }
    
    async function bar() {
      console.log('Before foo');
      await foo();
      console.log('After foo');
    }
    
    bar();
    console.log('Outside bar');
