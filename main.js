

const array1 = ["You are", "I am", "I honor", "I treat myself", "I cheer for others"]

const array2 = ["capable of greatness", "meant to be amazing", "worthy of love and respect", "a beacon of positivity"]

const array3 = [
    "every single day.", 
    "in everything I do.", 
    "because I believe in myself.", 
    "with kindness and confidence."
];

function Assembler(array1, array2, array3) {
const first = Math.floor(Math.random() * array1.length)
const second = Math.floor(Math.random() * array2.length)
const third = Math.floor(Math.random() * array3.length)
return `${array1[first]} ${array2[second]} ${array3[third]}`
//return array1[first] + array2[second] + array3[third]
}

console.log(Assembler(array1, array2, array3))