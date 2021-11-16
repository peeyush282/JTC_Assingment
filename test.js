/*  Problem : Numbers can be negative , postive , decimal 
    Arrange them in order of a1 <= a2 >=a3 <= a4 >= ..........    */

/* Algorithm to solve this problem */

/* Step1 */

// Sort the numbers with the help of merge sorting because the complexity of merge sort in all the cases is O(nlog(n)
// ---------- Space complexity of program O(n) ------//
// ---------- TIme complexity of program O(nlog(n)) ------//

/* Step2 */

// User the rearrange function to get it arrange in the order given in  a problem statement

function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}

let array = [5, 7, 1, -1, 0.7, -2.8, -6, 9, 0, -4, 7, 4];
let newArray = [];

let sortedArray = mergeSort(array);
function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return { a, b };
}
const numbers = swap(5, 7);
function reArrange(array) {
  for (let index = 0; index < sortedArray.length; index += 2) {
    if (sortedArray.length >= index + 2) {
      const numbers = swap(sortedArray[index], sortedArray[index + 1]);
      newArray.push(numbers.a);
      newArray.push(numbers.b);
      if (sortedArray.length % 2 !== 0) {
        newArray.push(sortedArray[sortedArray.length - 1]);
      }
    }
  }
}
reArrange(array);
console.log(newArray);
