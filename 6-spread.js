const max = Math.max(6,23,45,1,89,23);
const numbers = [3,4,5,6,7,9,10];
const arrayMax = Math.max(numbers);
console.log(...numbers);
console.log(arrayMax);

// use spread operator to copy 
const friends = [4,5,87,9];
const bondhu = friends;
bondhu.push(12);
console.log(bondhu);
console.log(friends);
// -----------------------------
const friends = [4,56,78,90,23,45];
const bondhu = friends;
const dosto = [...friends];
console.log(dosto)
friends.push(100);
console.log(dosto);
console.log(friends);


// advance 
const sonkha = [...friends,999] // add extra elements while copy
console.log(sonkha);