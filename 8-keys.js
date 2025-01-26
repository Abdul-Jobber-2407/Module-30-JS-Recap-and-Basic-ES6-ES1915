const glass = { name:'glass', color: 'golden', price: 12, isCleaned:true};
console.log(glass);

// all properties name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]

// all property values
const values = Object.values(glass)
// [ 'glass', 'golden', 12, true ]

// array of array , Two dimentional array
const pair = Object.entries(glass);
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]

//delete
delete glass.isCleaned;
console.log(glass);

const {isCleaned,...shortGlass}= glass;
console.log(shortGlass);

//freeze 
// object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 500;
delete glass.name;
console.log(glass)

// object .seal
Object.seal(glass)
glass.seal= 'Bangladesh';
glass.price = 500;
delete glass.name;
console.log(glass)