//data types in js
// String ,number,BigInt,undefined,Null,Symbol,Object(Object,array ,Date)

// let w=7.6;
// let color ="yellow";
// let x= true;
// const obj ={first:"abe",second:"xyz"};//object

//array object
// const nums=[1,3,4,5];
// console.log(typeof nums);

// a=new Date();
//console.log(a);//current date and time

// let  a=16+"v"; //  16v js evaluates exp from L--->R
// let b="v"+16;//v16
// let c="v"+16+4;//v164
// console.log(a)
// console.log(b)
// console.log(c)

//  let x=1;
//  x=5;
//  x="abc";
// let d="abc";
// let e="abc";

// console.log(d==e);//true
// console.log(d===e)//true
// typeof(3+4);
// let x;
// console.log(x);

// const a =()=>{
//     console.log(1);
// }
//k_v pair
// const obj ={
//     A:"1" ,B:"2",
//     concat: function c(){
//         return this.A+ this.B;

//     }
// }
// console.log(obj.concat());

//In Java scripts almost "everthing is an object".
// Java scripts values ,expect primitives, are object 
//this --->inside object will point to currebt object
//this console.log(this)---> point global object

//let x= new String();
// rest parameter 
// function abc(...args){ // that means we dont know how much parameter we will pass inside the parameter
//     let s=0;
//     for(let i of args){
//         s +=i;
//     }
//     return s;
// }


// let x=abc(2,3,3,4,56,3,6);
// console.log(x);


// function mul(a,b){
//     return a*b;

// }
// window.mul(2,3);// run on broweser
// mul(2,3);

// console.log(null===undefined);//false
// console.log(null==undefined);//true // spacial case
// console.log(null==0);//false spacial case
// console.log(null<0);//false null--> 0 
// console.log(null>0);//false
// console.log(null<=0);//true
// console.log(null>=0);//true
// console.log(undefined==0);//false
// console.log(undefined<0);//false
// console.log(undefined>0);//false
// console.log(undefined<=0);//false
// console.log(undefined>=0);//false

// undefined --->NAN


// const obj={
//     a:1,
//     b:this.a+1,
//     c:()=> this.a+1,
//     d(){
//         return this.a+1;
//     },
//     e(){
//         return(()=>this.a+1)()//IIFE
//     }

// }
// console.log(obj.b)//exception-->when the object is completed then onley we can use this
// console.log(obj.c())//arrow function there is no definition;
// console.log(obj.e())//2
// console.log(obj.e())//2

// console.log([0]==' ');//false 
// console.log([0]==0);//true

// const obj={
//     a:1,
//     b(){
//         return this.a;
//     }

// }
// console.log(obj.b());//1
// console.log((true?obj.b:a)())//undefined
// console.log((true,obj.b)())//undefined
// console.log((3,obj['b'])())//undefined
// console.log((obj.c=obj.b)())//undefined

//--BOM 
//Browesr object model ---->used to interact with the browser
// default object -->window










