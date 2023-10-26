// scripts.js

const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const [, firstArray] = data.lists[0];
const [, secondArray] = data.lists[1];
const [, thirdArray] = data.lists[2];

const result = [];

let biggestValue; // Declare it here so that it can be used in global scope

/* One of the issues you run into is the fact that the arrays are not the same length, resulting in undefined values when logged in console.
So we need to add something that checks the length of the arrays and ensures things execute for as long as the length of the array is bigger than 0.*/

const extractBiggest = () => {
  if (
    firstArray.length > 0 || // Checks if any of the arrays have at least one value (in other words > 0), if yes do the following
    secondArray.length > 0 ||
    thirdArray.length > 0
  ) {
    let firstArrayValue = // Declares 3 let variables that will hold the last value in each array if it is bigger than 0
      firstArray.length > 0 ? firstArray[firstArray.length - 1] : null;
    let secondArrayValue =
      secondArray.length > 0 ? secondArray[secondArray.length - 1] : null;
    let thirdArrayValue =
      thirdArray.length > 0 ? thirdArray[thirdArray.length - 1] : null;

    /* Now that we have the length checking system out of the way:

        1. Compare the firstArrayValue with the second and third. If it's the biggestValue, assign it to biggestValue, and then remove it from the firstArray using .pop()
        2. The code continues to do this for the secondArrayValue and thirdArrayValue
        3. Once it has found the biggestValue and assigned it inside of the biggestValue variable it will return that at the end so that the function actually returns something for us
        4. The code then pushes the returned result into the above declared const result array. It will do this 15 times.
        5. We will have no undefined values because of different array lengths and achieve the desired result.

    */
    if (
      firstArrayValue > secondArrayValue &&
      firstArrayValue > thirdArrayValue
    ) {
      biggestValue = firstArrayValue;
      firstArray.pop();
    } else if (
      secondArrayValue > firstArrayValue &&
      secondArrayValue > thirdArrayValue
    ) {
      biggestValue = secondArrayValue;
      secondArray.pop();
    } else {
      biggestValue = thirdArrayValue;
      thirdArray.pop();
    }
    return biggestValue;
  }
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
