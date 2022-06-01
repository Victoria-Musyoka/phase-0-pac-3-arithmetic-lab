function add(a,b){
    return a + b;
}
add(3,2);
 
function subtract(a,b){
    return a - b;
}
subtract(2,1);

function multiply(a,b){
    return a*b ;
}
multiply(12,31);

function divide(a,b){
    return a/b;
}
divide(4,2);

function increment(n){
    n++;
    return n;
}
increment(42);

function decrement(n){
    n--;
    return n;
}
decrement(12);

function makeInt(string){
   return parseInt(string,10)
   }
   makeInt("hello");

   function preserveDecimal(string){
       return parseFloat(string);
   }
   preserveDecimal(12.3212);