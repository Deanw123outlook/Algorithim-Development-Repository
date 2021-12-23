//-------------------------------------------Linear-Search-Algorithm-Function-Speed-Test-------------------------------------------
/*
Linear search, also known as sequential search, is the most BASIC search technqiues. For this search, the program must 
iterate through an entire list (array) and try to find the a find a match for a chosen target element. Once identified
the location of the target element is returned. In the situation where the target element does not exist in the searched
array undefined will be returend.

Note
Unlike the Binary Search Algorithim, this algorithim does not require the list/array to be ORDERED. This was a key component of the 
Binary Search Algorithim

Goals
- Build more knowledge on Java Script programming language specifically array manipulation
- Build better insight into this specific algorithim 
- The finalised product of this project should be a function that performs linear search on an array
- Implement a speed test into the function for time complexity analysis

NOTE
This will contradict the universal programing rule DRY (DONT REPEAT YOURSELF) however it this is simple experimental 
task in which the goal is to see we can input the timer into our CODE ! Time complexity for algorithms
is important for medium - large scale projects in the real world !
*/

const linear_Search_Algorithm = function (array, target) {
  //function parameters (array,target) - self explanatory
  //Initiate start time prior to Linear Search Algorithim
  const initiateStartTime = new Date(); //Date object represents a single moment in time. It contains a number that represents the milliseconds since January 1, 1970 UTC
  const startTime = initiateStartTime.getTime(); //getTime() method of the Date object to get the number of milliseconds since January 1, 1970 00:00:00 UTC:
  for (let i = 0; i < array.length; i++) {
    //initiate counter; condition parameters; update counter if condition met
    if (array[i] === target) {
      console.log(`Target-Element-Identifed ${target}`);
      console.log(`Iteration - ${i}`);
      console.log(`Target-Location ${array.indexOf(target)}`); // indexOf function locates the postion of the array element
      console.log(`Terminate-Linear-Search-Algorithim`);
      //Initiate end time post linear search algorithm
      const initiateEndTime = new Date();
      const endTime = initiateEndTime.getTime();
      //Convert to milliseconds
      const conversionStartTime = startTime / 1000;
      const conversionEndTime = endTime / 1000;
      const executionTime = conversionEndTime - conversionStartTime; //milliseconds
      console.log(
        `Linear-Search-Algorithm-Execution-Time-${executionTime}-Milliseconds`
      );
      break; //break statement terminates the whole loop
    } else if (array[i] != target) {
      //console.log(`Iteration - ${i}`);
    }
    if (array[i] === array[array.length - 1]) {
      //array[....-1] - remember zero indexing
      console.log(`Target-Element-NOT-Identifed ${target}`);
      console.log(`Terminate-Linear-Search-Algorithim`);
      //Initiate end time post linear search algorithm
      const initiateEndTime = new Date();
      const endTime = initiateEndTime.getTime();
      //Convert to milliseconds
      const conversionStartTime = startTime / 1000;
      const conversionEndTime = endTime / 1000;
      const executionTime = conversionEndTime - conversionStartTime; //milliseconds
      console.log(
        `Linear-Search-Algorithm-Execution-Time-${executionTime}-Milliseconds`
      );
      break;
    }
  }
};

//-------------------------------------------------------PROJECT-DATA------------------------------------------------------------------
const arrayX = [2, 5, 1, 3, 6, 8, 7, 12, 9, 22, 33]; // Define an UNORDERED list
const target = 7; // target element in this case we can visually/manually IDENTIFY in list
//------------------------------------------------------Testing-DATA-------------------------------------------------------------------
linear_Search_Algorithm(arrayX, target);
