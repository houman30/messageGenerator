

const array1 = ["You", "I am", "I honor", "I treat", "I cheer"]

const array2 = ["capable", "be amazing", "with the"]

const array3 = ["I show others", "greatest supporter"]

function Assembler(array1, array2, array3) {
const first = Math.floor(Math.random() * array1.length)
const second = Math.floor(Math.random() * array2.length)
const third = Math.floor(Math.random() * array3.length)
return `${array1[first]} ${array2[second]} ${array3[third]}`
//return array1[first] + array2[second] + array3[third]
}

console.log(Assembler(array1, array2, array3))