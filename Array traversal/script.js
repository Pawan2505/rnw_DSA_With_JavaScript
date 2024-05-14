// 2. Array Traversal : 
//                     Array traversal refers to the process of visiting each element of an array in a systematic manner. 
//                     This is a fundamental operation in programming, often used for tasks like searching, sorting, or transforming data.

// A. Using a For Loop
// B. Using forEach Method
// C. Using for...of Loop
// D. Using Map and Filter
    

// A. Using a For Loop:
//                         The traditional for loop provides precise control over array traversal.
//                         Start by initializing a loop counter variable (i) to 0.
//                         Set the loop condition to continue until i is less than the array's length.
//                         Inside the loop, access each element using the current index (array[i]).
//                         Increment i after each iteration to move to the next element.

                      
//                         const numbers = [1, 2, 3, 4, 5];
//                         for (let i = 0; i < numbers.length; i++) {
//                             console.log(numbers[i]);
//                         }  
                        
                        
// B. Using forEach Method:
//                         The forEach method is a built-in array method that executes a provided function once for each array element.
//                         Pass a callback function as an argument to forEach, which will be executed for each element.
//                         The callback function takes three parameters: the current element, the index of the current element, and the array being traversed.


// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index) => {
//     console.log(`Element at index ${index}: ${number}`);
// });



// C. Using for...of Loop:

//                         The for...of loop is a modern iteration construct introduced in ES6.
//                         It iterates over the values of an iterable object, such as an array, in the order of insertion.
//                         Each iteration assigns the value of the current element directly to a variable.


//                         const numbers = [1, 2, 3, 4, 5];
//                         for (const number of numbers) {
//                             console.log(number);
//                         }

//  D. Using Map and Filter:

//                         While map and filter are primarily used for data transformation and filtering, respectively, they also implicitly traverse arrays.
//                         map applies a function to each element of an array and returns a new array with the results.
//                         filter creates a new array with elements that pass a certain condition specified by a callback function.


//         const numbers = [1, 2, 3, 4, 5];
//         const doubled = numbers.map(number => number * 2);
//         console.log(doubled);

//         const evenNumbers = numbers.filter(number => number % 2 === 0);
//         console.log(evenNumbers);





// A. Using a For Loop
// B. Using forEach Method
// C. Using for...of Loop
// D. Using Map and Filter


// A. Using a For Loop :

                                                        // const arr = [2,4,65,76];

                                                        // for(let i = 0; i < arr.length; i++){
                                                        //     console.log(arr[i]);
                                                        // }


// B. Using forEach Method :     


                                        // const arr = [23,32,54,56];

                                        // arr.forEach(function(number){
                                        //     console.log(number);
                                        // });

   
// C. Using for...of Loop : 
 
                                            // const arr = [23,32,54,56];

                                            // for(const number of arr){
                                            //     console.log(number);
                                            // }

 // D. Using Map and Filter :
 
                                        // const arr = [23,45,65,65];
                                        // let mapResult = arr.map(arr => arr*arr);
                                        // console.log(mapResult);


// D. Using Map and Filter :

                                        // const arr = [32,45,67,32];
                                        // let evenNumbers = arr.filter(arr => arr%2 === 0);

                                        // console.log(evenNumbers);