
// DSA with JavaScript 

// Topic 1 : Data Structure and Complexity

// 1. What is data structure?
// 2. Time complexity analysis
// 3. Best, worst and average case analysis
// 4. Algorithm


// Question:1

//Note : Yaha pr loop ka use kiya hai hamne aur ey loop starting se end tak chalega jabtak ise o index nhi mil jata jo if condition me likha hai isliye iska time complexity Ob(n) hoga.

// const funnyNumber = (array) =>{
//     for(let i = 0; i < array.length; i++){
//         if(i === 3){
//             return array[i];
//         }
//     }
// };

// const nums = [345, 56, 32, 324];

// console.log(funnyNumber(nums));



//****************************************************************** */


//Note : 1.Yaha ham time dekh rhe hai uper vala code run krne me kitana time laga raha hai.

// const funnyNumber = (array) =>{             // 4 operation kyoki loop run krega 4 baar 0 index se 3 index tak.
//     for(let i = 0; i < array.length; i++){       // O(n)
//         if(i === 3){
//             return array[i];
//         }
//     }
// };


// const nums = [345, 56, 32, 324];
// console.time("funnyNumber");
// console.log(funnyNumber(nums));
// console.timeEnd("funnyNumber")



//********************************************************* */

// Note : It will also depend on machine to machine how fast your code execute.

// const funnyNumber = (array) =>{    // 1 operation, kyoki ey direct 3rd index ka value de diya.
   
//     return array[3];
// };


// const nums = [345, 56, 32, 324];
// console.time("funnyNumber");
// console.log(funnyNumber(nums));
// console.timeEnd("funnyNumber")


// Note : Ab ham operation ka use krenge efficiency ko measure krne k liye. What is operation ?


// function someOperations(n) {
//     return (n*(n*5))/2;   // 3 operation         // O(1)
// }

// console.log(someOperations(1000));


                                    // O(n) Time complexity.

// function GoingUpDown(n){
//     console.log("Going forward!");
//                                                 // 2n + 3 => O(n)

//     for(var i = 0; i < n; i++){
//         console.log(i);
//     }

//     console.log("At the end , going back");
//     for(var j = n-1; j >= 0; j--){
//         console.log(j);
//     }

//     console.log("At the start!");
// }

// console.log(GoingUpDown(3));


// function printBoth(n){                   //O(n2)
//     for(var i = 0; i < n; i++){
//         for(var j = 0; j < n; j++){
//             console.log(i,j);
//         }
//     }
// }

// printBoth(5);


                                // Space Complexity

// const funnyNumber = (n) =>{
//     const array = [];               // space complexity and time complexity both are same kyoki array bante time n time loop run kr taha hai. O(n);

//     for(let i = 0; i < n; i++){
//         array.push(i*69);
//     }
//     return array;
// }

// console.log(funnyNumber(5));


// Primitive Types - > Boolean, num, undefined, null; => constant
// String, array, objects => dynamic


            // String time complexity O(n);

// const reverseString = (str) => {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// };

// console.log(reverseString("hello"));


const countOccurrences = (str, target) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target) {
            count++;
        }
    }
    return count;
};

console.log(countOccurrences("hello world", "l")); // Output: 3
