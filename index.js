function add(a,b){
    return a + b;
}
add(5,2);
 
function subtract(a,b){
    return a - b;
}
subtract(4,1);

function multiply(a,b){
    return a*b ;
}
multiply(17,11);

function divide(a,b){
    return a/b;
}
divide(6,2);

function increment(n){
    n++;
    return n;
}
increment(42);

function decrement(n){
    n--;
    return n;
}
decrement(16);

function makeInt(string){
   return parseInt(string,10)
   }
   makeInt("hello");

   function preserveDecimal(string){
       return parseFloat(string);
   }
   preserveDecimal(10.4246)