//                                          Test DATA
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]; // 18 Elements
const T = 4; // taregt element [user-choice]
let mP1 = 0; // initiate midpoint1 = 0 (as the programs this will be reset as per binary search algorithim sequence)
let mP2 = 0; // initiate midpoint2 = 0 (as the programs this will be reset as per binary search algorithim sequence)
console.log(`Original Array ${array}`);

//                                          Binary-Search-Algorithim Code !
while (array.length > 0) {
  if (array[(array.length - 1) / 2] == undefined) {
    // undefined in this case indicates & clarifies there are two MPs
    mP1 = array[(array.length - 2) / 2]; //caculate midpoint 1 & save to variable
    mP2 = array[array.length / 2]; //calculate midpoint 2 & save to variable
    console.log(mP1);
    console.log(mP2);
    for (let i = 0; i < array.length; i++) {
      if (mP2 === T) {
        console.log(`FINISHED | Target Identfied | Target = ${mP2} `); //Target identified algorithim succesful
        array.length = 0; //terminate loop
        break; //break from the loop
      } else if (mP2 < T) {
        for (x in array) {
          //for in statement loops through the properties of an Object
          array.shift(array[i] <= mP2);
        } //removes first element from array
        console.log(array);
        break;
      } else mP2 > T;
      for (x in array) {
        //for in statement loops through the properties of an Object
        array.pop(array[i] <= mP2);
      } //removes last element from array
      console.log(array);
      break;
    }
  } else mP1 = array[(array.length - 1) / 2];
  console.log(mP1);
  for (let i = 0; i < array.length; i++) {
    if (mP1 === T) {
      console.log(`FINISHED | Target Identified | Target = ${mP1} `); //Target identified algorithim succesful
      array.length = 0; //terminate loop
      break;
    } else if (mP1 < T) {
      for (x in array) {
        array.shift(array[i] <= mP1);
      } //removes first element from array
      console.log(array);
      break;
    } else mP1 > T;
    for (x in array) {
      array.pop(array[i] <= mP1);
    } //removes last element from array
    console.log(array);
    break;
  }
}
