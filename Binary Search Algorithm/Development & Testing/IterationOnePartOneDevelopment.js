//                     BINARY-Search-ALGORITHIM-ITERATION-ONE Development
//            GOAL: Combining Loop Testing & Manual Midpoint Calculation Program
//                                    NOTE: Zero-Indexing

//                                         TEST DATA 1
console.log(`--TEST-DATA-1--`);
//Objective: ADD elements to empty array that meet specific condition
//--Initiate Array with ODD range of ordered elements for Development & Testing Purposes ! >> ONE MIDPOINT--
const testArray = [2, 5, 10, 12, 15, 20, 25, 30, 34];
const target = 25; //Intiate Target Element the Algorithim will search for !
//Find the MIDPOINT of Array
const midPoint = testArray[(testArray.length - 1) / 2]; // index = (9 - 1) / 2..... element = 15
console.log(`Test-Array-Midpoint = ${midPoint}`);
//Initiate empty array
const iterationOne = [];
console.log(typeof iterationOne);
//CODE for loop that will add elements to array
for (let i = 0; i < testArray.length; i++) {
  if (target === midPoint) {
    console.log(`TERMINATE-ALGORITHIM-TARGET-IDENITIFIED-SEARCH-COMPLETE`);
  } else if (testArray[i] > midPoint) {
    iterationOne.push(testArray[i]); //push keyword (add elements to end of array)
  }
}
console.log(iterationOne); // Pedicted Output | iterationOne = [20, 25, 30, 34]

//                                         TEST DATA 2
console.log(`--TEST-DATA-2--`);
//OBJECTIVE: ADD elements to empty array that meet specific condition
//Initiate Array with ODD range of ordered elements for Development & Testing Purposes ! >> ONE MIDPOINT
const testArray1 = [2, 5, 10, 12, 15, 20, 25, 30, 34];
const target1 = 10; ////Intiate Tagert Element
//Find the MIDPOINT of Array
const midPoint1 = testArray1[(testArray1.length - 1) / 2]; // index = (9 - 1) / 2..... element = 15
console.log(`Test-Array-Midpoint = ${midPoint1}`);
//Initiate empty array
const iterationOne1 = [];
console.log(typeof iterationOne1);
//CODE for loop that will add elements to an empty array that meet specific condition
for (let i = 0; i < testArray1.length; i++) {
  if (target1 === midPoint1) {
    console.log(`TERMINATE-ALGORITHIM-TARGET-IDENTIFIED-SEARCH-COMPLETE`);
  } else if (testArray1[i] < midPoint1) {
    //elements in array less than midpoint
    iterationOne1.push(testArray1[i]); //push -> add elements to end of array
  }
}
console.log(iterationOne1); // Pedicted Output | iterationOne = [2,5,10,12]

//                                        TEST DATA 3
console.log(`--TEST-DATA-3--`);
//OBJECTIVE: Develop a program & predict output - midPointxy will not be added to empty array(iterationOnexy)
//Initiate Array with ODD range of ordered elements for Development & Testing Purposes ! >> ONE MIDPOINT
const testArrayxy = [2, 5, 10, 12, 15, 20, 25, 30, 34, 35, 38, 39, 40];
const targetxy = 15; ////Intiate Tagert Element
//Find the MIDPOINT of Array
const midPointxy = testArrayxy[(testArrayxy.length - 1) / 2]; // index = (13 - 1) / 2..... element = 25
console.log(`Test-Array-Midpoint = ${midPointxy}`);
//Initiate empty array
const iterationOnexy = [];
//CODE for loop that will add elements to array
for (let i = 0; i < testArrayxy.length; i++) {
  if (targetxy === midPointxy) {
    console.log(`TERMINATE-ALGORITHIM-SEARCH-COMPLETE`);
  } else if (testArrayxy[i] < midPointxy) {
    //elements in array less than midpoint
    iterationOnexy.push(testArrayxy[i]); //push -> add elements to end of array if condition is met !
  } else if (testArrayxy[i] > midPointxy) {
    //elements in array greater than midpoint
    iterationOnexy.push(testArrayxy[i]); //push -> add elements to end of array if condition is met !
  }
}
console.log(iterationOnexy); // Pedicted Output | midPointxy will not be added to empty array(iterationOnexy)
