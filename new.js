// const num = parseInt(prompt("Enter a number: "));
// let isPrime=true;

// if(num==1){
//     console.log("1 is not prime number");
// }
// else if (num > 1) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${num} is a prime number`);
//     } else {
//         console.log(`${num} is a not prime number`);
//     }
// }
// else {
//     console.log("The number is not a prime number.");
// }

 const arr=[4,8,7,1,9]
 let max=arr[0];
function Findmax(arr){
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
        
    }return max;

}console.log(Findmax(arr));