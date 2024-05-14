// // Topic : Array Indexing

// // 1. Basics of Arrays in JavaScript:

// //            A. Definition of an array
// //            B. Declaration and initialization
// //            C. Accessing array elements
// //            D. Array methods for manipulation (e.g., push, pop, shift, unshift)


// // 2. Understanding Array Indexing:

// //             A. What is indexing?
// //             B. Zero-based indexing in JavaScript arrays
// //             C. Positive and negative indexing
// //             D. Accessing elements by index
// //             E. Example scenarios demonstrating array indexing


//             // Define an array
// const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// // Accessing elements by index
// console.log(fruits[0]); // Output: 'apple'
// console.log(fruits[2]); // Output: 'orange'

// // Negative indexing
// console.log(fruits[-1]); // Output: undefined
// console.log(fruits[-2]); // Output: undefined

// // Accessing elements from the end of the array
// console.log(fruits[fruits.length - 1]); // Output: 'kiwi'
// console.log(fruits[fruits.length - 2]); // Output: 'grape'

// // Modifying array elements using indexing
// fruits[1] = 'pear'; // Change 'banana' to 'pear'
// console.log(fruits); // Output: ['apple', 'pear', 'orange', 'grape', 'kiwi']

// // Adding elements at specific indexes
// fruits[5] = 'melon'; // Add 'melon' at index 5
// console.log(fruits); // Output: ['apple', 'pear', 'orange', 'grape', 'kiwi', 'melon']

// // Accessing out-of-bounds index
// console.log(fruits[10]); // Output: undefined

// // Iterating over array elements using indexing
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// push: Adds one or more elements to the end of an array and returns the new length of the array.

// const numbers = [1, 2, 3];
// numbers.push(4, 5);
// console.log(numbers); // Output: [1, 2, 3, 4, 5]

// pop: Removes the last element from an array and returns that element.

// const numbers = [1, 2, 3];
// const lastNumber = numbers.pop();
// console.log(lastNumber); // Output: 3
// console.log(numbers); // Output: [1, 2]

// shift: Removes the first element from an array and returns that element. It also shifts all subsequent elements to a lower index.

// const numbers = [1, 2, 3];
// const firstNumber = numbers.shift();
// console.log(firstNumber); // Output: 1
// console.log(numbers); // Output: [2, 3]

// unshift: Adds one or more elements to the beginning of an array and returns the new length of the array.

// const numbers = [2, 3];
// numbers.unshift(0, 1);
// console.log(numbers); // Output: [0, 1, 2, 3]

// // 3. Performance Considerations:

// //             A. Time complexity of common array operations (access, search, insertion, deletion)
// //             B. Impact of array size on performance
// //             C. Trade-offs between array operations and data structures



                                // const arr = [1,2,3,4,5];
                                // arr.push(22,33,44);
                                // console.log(arr);

                                // Output : [
                                //     1,  2,  3,  4,
                                //     5, 22, 33, 44
                                //   ]

        // const arr = [4,54,65,76];
        // arr.pop();
        // console.log(arr);




                                                                // const arr = [4,54,65,76];
                                                                // let firstshift = arr.shift();
                                                                // console.log(firstshift);
                                                                // console.log(arr);

                                                                // output : 4
                                                                // [ 54, 65, 76 ]


        // const arr = [4,54,65,76];
        // let firstshift = arr.shift(4);
        // console.log(firstshift);
        // console.log(arr);

        // output : 4
        // [ 54, 65, 76 ]

                                                            // const arr = [45,56,78];
                                                            // arr.unshift(23,566);
                                                            // console.log(arr);

                                                            // output : [ 23, 566, 45, 56, 78 ]



