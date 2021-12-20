//-------------------------------------------------------PROJECT-DATA------------------------------------------------------------------
const arrayX = [2, 5, 1, 3, 6, 8, 7, 12, 9, 22, 33]; // Define an UNORDERED list
const target = 9; // target element in this case we can visually/manually IDENTIFY in list

/*--------------------------------------------------------DEVELOPMENT-------------------------------------------------------------------
ISSUE
Rather than printing on each iteration whether the target has been identified the aim is to log only to the console when either
the target has been identified including the location in CONTRAST if the target has not been identified after iterating through the
entire list linearly terminating algorithim

------------------------------------------------------------Testing---------------------------------------------------------------------*/

/*

//Development|Testing-1
for (let i = 0; i < arrayX.length; i++) {
  if (arrayX[i] === target) {
    console.log(`${target} Identified`);
    console.log(`Target-Location ${arrayX.indexOf(target)}`);
    console.log(`Linear-Search-Algorithim-`);
    break;
  } else if (arrayX[i] != target) {
    console.log(`Target-Element-NOT-Identifed ${target}`);
    console.log(`Terminate-Linear-Search-Algorithim`);
  }
}

//Development|Testing-2
for (let i = 0; i < arrayX.length; i++) {
  if (arrayX[i] != target) {
    continue;
  } else if (arrayX[i] === target) {
    console.log(`Target-Element-Identifed ${target}`);
    console.log(`Target-Location ${arrayX.indexOf(target)}`);
    console.log(`Terminate-Linear-Search-Algorithim`);
  }
}

//Development|Testing-3
for (let i = 0; i < arrayX.length; i++) {
  if (arrayX[i] === target) {
    if (arrayX[i] != target) {
      continue;
    } else if (arrayX[i] === target) {
      console.log(`Target-Element-Identifed ${target}`);
      console.log(`Target-Location ${arrayX.indexOf(target)}`);
      console.log(`Terminate-Linear-Search-Algorithim`);
      break;
    }
  } else if (arrayX[i] != target) {
    if (arrayX[i] === target) {
      continue;
    } else if (arrayX[i] != target) {
      console.log(`Loop-Termination`);
    }
  }
}
*/

//----------------------------------------------NOTE-------------------------------------------------------------
//------------------------------------Development | Testing 4----------------------------------------------------
//-----------------SUCCESFUL in completing Linear Search Algorithim of an unordered list-------------------------
//Development|Testing-4
for (let i = 0; i < arrayX.length; i++) {
  //initiate counter; condition parameters; update counter if condition met
  if (arrayX[i] === target) {
    console.log(`Target-Element-Identifed ${target}`);
    console.log(`Iteration - ${i}`);
    console.log(`Target-Location ${arrayX.indexOf(target)}`);
    console.log(`Terminate-Linear-Search-Algorithim`);
    break;
  } else if (arrayX[i] != target) {
    //console.log(`Iteration - ${i}`);
  }
  if (arrayX[i] === arrayX[arrayX.length - 1]) {
    console.log(`Target-Element-NOT-Identifed ${target}`);
    console.log(`Terminate-Linear-Search-Algorithim`);
    break;
  }
}
