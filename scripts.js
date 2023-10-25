// scripts.js

const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

// Some kind of destructuring happening, which also has wrong pathways
// const { first = 1 } = data.first || {};
// const { second = 1 } = data.second || {};
// const { third = 1 } = data.third || {};

const [, firstArray] = data.lists[0];
const [, secondArray] = data.lists[1];
const [, thirdArray] = data.lists[2];

const result = []; // Supposed to contain all number values from the arrays

// Look into object/array properly, look at last value in array, determine which is biggest
const extractBiggest = () => {
  let biggerValue;
  let biggestValue;
  if (firstArray[firstArray.length - 1] > secondArray[secondArray.length - 1]) {
    biggerValue = firstArray[firstArray.length - 1];
    console.log(biggerValue);
  } else if (
    firstArray[firstArray.length - 1] < secondArray[secondArray.length - 1]
  ) {
    biggerValue = secondArray[secondArray.length - 1];
    console.log(biggerValue);
  }

  if (thirdArray[thirdArray.length - 1] > biggerValue) {
    biggestValue = thirdArray[thirdArray.length - 1];
    console.log(biggestValue);
  } else if (thirdArray[thirdArray.length - 1] < biggerValue) {
    biggestValue = biggerValue;
    console.log(biggestValue);
  }
};
extractBiggest();
/* else if (
    firstArray[firstArray.length - 1] < secondArray[secondArray.length - 1]
  ) {
    const biggerValue = secondArray[secondArray.length - 1];
  }

  if (thirdArray[thirdArray.length - 1] > biggerValue) {
    const biggestValue = thirdArray[thirdArray.length - 1];
  } else if (thirdArray[thirdArray.length - 1] < biggerValue) {
    const biggestValue = biggerValue;
  }
}; // This will .push the biggest values into the result array below (result.push(answer)) BUT this also needs to .pop the value from the original array

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
*/
