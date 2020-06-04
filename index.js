const numOne = 2;
const numTwo = 5;
const numThree = 8;
const numFour = 6;

const toThePowerOf = (someNum, someNumOne) => {
    let total = 1;
    mulitply = () => {
        return total * someNum;
    }
    return _.times(someNumOne, mulitply);
}

const manualExponent = (someNum, someNumOne) => {
   let someArr = [];
   let counter = 0;
   while (counter < someNumOne){
       someArr.push(someNum);
       counter++;
   } 
   const reducer = someArr.reduce(function(m, n) {
      return m * n
    });
  return reducer;
}

console.log(manualExponent(numOne, numTwo));
console.log(manualExponent(numThree, numFour));
