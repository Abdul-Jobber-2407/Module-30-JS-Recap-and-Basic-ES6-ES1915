function add (a,b){
    const result = a + b;
    return result;
}
const sum = add( 2,3);
console.log(sum);
//--------------------------------------------------
function add (a,b){
    return a+b;
}
const sum = add(45,5);
console.log(sum);
//--------------------------------------------------
function add (a,b){
    return a+b;
}
//function expression
const add2 = function add (a,b){
    return a+b;
}
const sum = add(5,6);
console.log(sum);
//--------------------------------------------------
//arrow function 
const add3 = (a,b)=> a+b;
const sum = add3(5,90);
console.log(sum);

const add4 = (num1 , num2 , num3,num4) => num1 + num2 + num3 + num4 ;
const sum2 = add4(1,2,3,4);
console.log(sum2);

const multiply = (num1 , num2) => num1*num2;
const mult = multiply(3,12);
console.log(mult);
