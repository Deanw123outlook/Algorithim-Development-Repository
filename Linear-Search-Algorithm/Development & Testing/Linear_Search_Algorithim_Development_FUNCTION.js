//-------------------------------------------------------PROJECT-DATA------------------------------------------------------------------
//Test-Data-1
const X = [2, 5, 1, 3, 6, 8, 7, 12, 9, 22, 33]; // Define an UNORDERED list
const targetX = 6; // target element in this case we can visually/manually IDENTIFY in list
//Test-Data-2
const Y = [2, 5, 1, 3, 6, 8, 7, 12, 9, 22, 33];
const targetY = 50; // target element in this case we cannot visually/manually IDENTIFY in list
//Test-Data-3
const XY = [
  2, 5, 1, 3, 6, 8, 7, 12, 9, 22, 33, 2, 5, 1, 3, 6, 8, 7, 12, 9, 22, 33, 101,
];
const targetXY = 101; //target element in this case we cannot visually/manually IDENTIFY in list

//---------------------------------------------Linear-Search-Algorithm-FUNCTION--------------------------------------------------------
const linear_Search_Algorithm = function (array, target) {
  //function parameters (array,target) - self explanatory
  for (let i = 0; i < array.length; i++) {
    //initiate counter; condition parameters; update counter if condition met
    if (array[i] === target) {
      console.log(`Target-Element-Identifed ${target}`);
      console.log(`Iteration - ${i}`);
      console.log(`Target-Location ${array.indexOf(target)}`);
      console.log(`Terminate-Linear-Search-Algorithim`);
      break;
    } else if (array[i] != target) {
      //console.log(`Iteration - ${i}`);
    }
    if (array[i] === array[array.length - 1]) {
      console.log(`Target-Element-NOT-Identifed ${target}`);
      console.log(`Terminate-Linear-Search-Algorithim`);
      break;
    }
  }
};

//-----------------------------------------------------Function-Testing--------------------------------------------------------------
//Function-Test-Data-1
console.log(linear_Search_Algorithm(X, targetX));
//Function-Test-Data-2
console.log(linear_Search_Algorithm(Y, targetY));
//Function-Test-Data-3
console.log(linear_Search_Algorithm(XY, targetXY));
