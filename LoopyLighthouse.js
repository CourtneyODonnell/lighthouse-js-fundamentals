//for loop to print 100-200
for (let i = 100; i < 201; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
      console.log('LoopyLighthouse');
    }
    //if multiple of 3, print loopy
  else if (i % 3 === 0) {
      console.log('Loopy');
    }
  else if (i % 4 === 0) {
      console.log('Lighthouse');
    }
    else {
        console.log(i);
    }
}
/*
 
 AssertionError: Make sure you're including 100 and 200!: expected 100 to equal 101
   
 */
