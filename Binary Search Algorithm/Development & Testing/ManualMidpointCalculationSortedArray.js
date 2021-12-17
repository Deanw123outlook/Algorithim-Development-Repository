/*                              Manual Midpoint Calculation Sorted Array

GOAL : Develop a program that will manually identify the midpoint of a SORTED array in Java-Script !
Objective: Code an if else statment that will output if a sorted array range has a SINGLE midpoint or 
TWO midpoints ! 
This is will be an important feature in the development of the Binary Search Algorithim in Java-Script !

NOTE
- Array with ODD range of ordered elements will have >> ONE MIDPOINT
- Array with EVEN range of ordered elements will have >> TWO MIDPOINTS
- ZERO indexing is an important component of this calculation

*/

//Initiate SORTED array and identify if a sorted array range has a SINGLE midpoint or TWO midpoints !
const testArray = [30, 31, 32, 33, 34, 36]; //Sorted Array
console.log(testArray[(testArray.length - 1) / 2]); // index = (6 - 1) / 2 .... output = undefined (midpoint)
//Midpoint Testing - One or Two midpoints ?
if (testArray[(testArray.length - 1) / 2] == undefined) {
  console.log("Midpoint is two numbers !");
  console.log(`EVEN number of elements in Array`);
  console.log(`First Midpoint Element ${testArray[testArray.length / 2]}`);
  console.log(
    `Second Midpoint Element ${testArray[(testArray.length - 2) / 2]}`
  );
} else
  console.log(
    `ODD number of elements in Array !  
    Single Element Midpoint : ${testArray[(testArray.length - 1) / 2]}`
  );
