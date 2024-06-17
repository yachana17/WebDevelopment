async function foo(){
    console.log("start");
    await new Promise(resolve=>setTimeout(resolve,1000));
    console.log("end");
}
foo();//start
foo();//start
console.log("after calling foo twic");
