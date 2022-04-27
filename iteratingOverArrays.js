const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}
//commited packing-list.js.


/*


 For Loops Start From 0
 Every for loop that we've seen so far, always started it's repeat counter at 0 and not at 1. Most of our code so far could have worked if we started the counter at 1, or at any other number, as long as our condition made sure we incremented the counter ten times. But the reason we made the choice to start at 0, is because it's very common to use loops to work with the contents of an array, one at at time, and array indexing in JavaScript, and most languages, starts at 0.
//
 Iterating Over an Array With while
 So for loops are a pretty good option when we want to iterate over items in an array. But that doesn't mean we can't use a while loop to do it. Modify your loop in packing-list.js to like the one below.
//
 console.log("Kitchen stuff to pack:");
 let i = 0;
 while (i < packingList.length) {
   console.log(packingList[i]);
   i++;
 }
 The result here will be exactly the same as before, but we've had to separate out the logic onto a few more lines.
//
 Instruction
 Before continuing, commit packing-list.js.
//
 Instruction
 Push all of your code to github.
//
 Make sure that you've added and committed all of your files from this exercise. If you run git status from within the lighthouse-js-fundamentals directory, you should see the following message:
//
 nothing to commit, working tree clean
 If there are changes that you have not yet committed, commit those first.
//
 Once everything has been committed, push your code to github.
//
 git push origin master
 Conclusion
 In this exercise, we learned how to iterate over an array using a for loop or a while loop. Loops and arrays are great tools to use together in most programming languages, no just JavaScript.
 */
