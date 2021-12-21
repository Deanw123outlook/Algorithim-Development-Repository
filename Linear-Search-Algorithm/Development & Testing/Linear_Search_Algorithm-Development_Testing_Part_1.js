/*                                    LINEAR SEARCH ALGORITHIM
Linear search, also known as sequential search, is the most BASIC search technqiues. For this search, the program must 
iterate through an entire list (array) and try to find the a find a match for a chosen target element. Once identified
the location of the target element is returned. In the situation where the target element does not exist in the searched
array undefined will be returend.

Note
Unlike the Binary Search Algorithim, this algorithim does not require the list/array to be ORDERED. This was a key component of the 
Binary Search Algorithim

Objectives


Goals
- Build more knowledge on Java Script programming language specifically array manipulation
- Build better insight into this specific algorithim 
- Lastly the finalised product of this project should be a function that performs linear search on an array

*/

//-------------------------------------------------------PROJECT-DATA------------------------------------------------------------------
const arrayX = [2, 5, 1, 3, 6, 8, 7, 12, 9, 22, 33]; // Define an UNORDERED list
const target = 2; // target element in this case we can visually/manually IDENTIFY in list

//--------------------------------------------------------DEVELOPMENT-------------------------------------------------------------------
//----------------------------------------------------------Testing---------------------------------------------------------------------

/*
//                                        DEVELOPMENT & TESTIN ENVOIRNEMENT (PART-ONE)
//Development&Testing-1
for (let i = 0; i < arrayX.length; i++) {
  //initiate value of counter; evaluate before each iteration of for loop; update counter after each iteration)
  console.log(arrayX[i]);
}
//Development&Testing-2
const emptyArray = [];
for (let i = 0; i < arrayX.length; i++) {
  if (arrayX[i] != target) {
    emptyArray.push(arrayX[i]);
  }
}
console.log(emptyArray);
//Development&Testing-3
for (let i = 0; i < arrayX.length; i++) {
    if (arrayX[i] === target) {
      console.log(`Terminate-Linear-Search-Algorithim`);
      break;
    } else if (arrayX[i] != target) {
      console.log(`Target-Element-NOT-Identifed ${target}`);
      console.log(`Terminate-Linear-Search-Algorithim`);
    }
  }
  //Development&Testing-4
  for (let i = 0; i < arrayX.length; i++) {
    if (arrayX[i] != target) continue;
    else if (arrayX[i] === target) {
      console.log(`Target-Location ${arrayX.indexOf(target)}`);
      break;
    } else if (array[i] != target) {
      console.log(`Target-Element ${target} NIT-Identified`);
    }
  }
//Development&Testing-5
let succesfull = 0;
for (let i = 0; i < arrayX.length; i++) {
  if (target === undefined) {
    console.log("TARGET-UNDEFINED-CANCEL-LINEAR-SEARCH-ALGORITHIM");
  } else if (arrayX[i] === target) {
    if (arrayX[i] === target) {
      console.log(`Target-Location ${arrayX.indexOf(target)}`);
      succesfull++;
    }
    console.log(succesfull);
  } else if (arrayX[i] != target) {
    console.log(`Target-Element-NOT-Identified ${target}`);
    console.log(`Terminate-Linear-Search-Algorithim`);
  }
}
//Development&Testing-6
for (x in arrayX) {
  if (x === target) {
    console.log(x);
  } else if (x != target) {
    console.log("NOT-IDENTIFIED");
  }
}
//Development&Testing-7
for (x in arrayX) {
  console.log(x);
}
*/
