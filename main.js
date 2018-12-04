//      ****    Lines 3-7 hold some "tester" code ****

// function addExcitement () {
//     console.log("Overly Excited!")
// }

// // addExcitement();

//      ****    Begin Assignment (line 10+)     ****

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let question = "?";
/*
    The addExcitement function should be an impure function (i.e., produce diff. results upon execution), 
    and accept the array as the sole argument. It should iterate over the array and output the words to 
    the browser console.
*/
function addExcitement (theWordArray, question) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = "" 

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        // console.log(theWordArray);                 // Test: the full array executes 12 times
        // buildMeUp[i] += sentence;                  // Test; Nope, but on the right track.
        buildMeUp += ` ${theWordArray[i]}`;          // theWordArray[i] represents the next word in the counter; `${}` is a template literal which concatenates strings. Adding a space before the first backtick keeps spaces between each new word.
        // Print buildMeUp to the console
        console.log(buildMeUp, `${question}`);
    }

}

// Invoke the function and pass in the array
//addExcitement(sentence)

//                          ****        Part 2          ****
//Add a new argument to the function so a dev can specify which char. should be displayed

// I want to use a question mark
addExcitement(sentence, question);          