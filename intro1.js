//var= is a functional scope
// console.log(a);
// var a=2;
// console.log(a)
//this is known as variable hoisting--->

// functional scope
// var x=1;
// console.log(x);
// function a(){
//     var h="inside function";
//     console.log(h);
// }
// a();
// console.log(h);// h is not defined


// var x=1;
// console.log(x);
// function a(){
// console.log(h);
// }
// a();
// var h="inside function";
// console.log(h);

// var a=2;//var can be redecleare 
// var a=1;
// let b=2;//let can not be redecleare and reassigned
// let b=1;

// function test(){
//     var x= 31;
//     if (1){
//         var x=71;
//         let y=41;
//         console.log(x);//71
//         console.log(y);//41
//     }
//     console.log(x);//71
//     console.log(y);// reference error
    
// }
// test();

// // arrow function
// //const ---->block scoped no redeclaration and reassign thing works for it
// //arrow--->ES6

// const func1=()=>
//     console.log(1)
// func1()
// func2()
// function func2(){
//     console.log(2)
// }
// fun3()
// var fun3= function func4(){
//     console.log(3);
// }

// const a=1;
// console.log(a);//1

// var b
// console.log(b);//undefined
// b=2;

// console.log(c);//undefined
// var c=3;

// console.log(d);//refernce error
// let d=2;

// //IIFE-->imediatly invoke function

// (function (x,y){
//     console.log(x+y);//3
// })(1,2);

// let a=1;
// console.log(typeof a);

// let foo=10
// function func1(){
//     console.log(foo);//undefined
//     var foo =1;
//     console.log(foo);//1
// }
// function fun2(){
//     console.log(foo)//referencerror
//     let foo=1
// }
// fun2()
function fn(){
    console.log('1')
}

function fn1(){
    console.log('3')
}

(()=>{
    if(!fn1){
        function fn1(){
            console.log('4')
        }
    }
    fn1()
})()
(() => {
    if (false) {
      function fn3() {
        console.log('5')
      }
    }
    fn3()
  })()

