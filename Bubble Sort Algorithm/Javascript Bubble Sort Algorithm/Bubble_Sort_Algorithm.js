/*
                                        Bubble Sort Algorithm
Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps 
through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through 
the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way 
smaller or larger elements "bubble" to the top of the list.

Note 
JavaScript const keyword differs in that assignments CANNOT be changed whereas the let keyword enables value to
be re-assigned. So, once you declare a variable using the const keyword, you cannot re-assign a value to that 
variable. This does not mean that the variable is immutable. If you assign an object to a variable using the 
const keyword, you can mutate that object. You just can’t re-assign that variable with a new value.
*/

let array = [25, 4, 6, 5, 7, 12, 1, 9, 2, 13, 1, 11];
console.log("Array-Unsorted");
console.log(array);
/*-----------------------------------------------------------------------------------------------------------*/
for (let i = 0; i < array.length; i++) {
  for (let y = 0; y < array.length; y++) {
    //initiate for loop (initiates another for loop to make comparisons) on each iteration
    if (array[i] < array[y]) {
      //if condition is TRUE swap elements
      let ai = array[i];
      let ay = array[y];
      array[i] = ay;
      array[y] = ai;
    }
  }
}
console.log("Bubble-Sort-Algorithm-Array-Sorted-Analysis");
console.log(array);
