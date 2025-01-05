function add (num1 , num2 ){
    const result = num1 + num2 ;
    console.log(num1 , num2 , result)
    return result ; 
}
const sum = add(5, 7);
const sum = add (5);
const sum = add();


// default  --> if value is not provided , take this as a default
function add (num1 = 0 , num2 = 5 ){
    const result = num1 + num2 ;
    console.log(num1 , num2 , result)
    return result ; 
}
const sum = add(5, 7);
const sum = add (5);
const sum = add()


// function fullName (first, last ){
//     const full = first + ' ' + last ; 
//     console.log(full);
//     return full ;
// }
// const sum = ( Abdul , Jobber );


// default parameters : Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed. 

