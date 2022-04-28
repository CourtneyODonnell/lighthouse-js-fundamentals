const smartGarbage = function (trash, bins) {
    if (trash === 'waste') {
      bins.waste += 1;
      return bins;
    }
    else if (trash === 'recycling') {
      bins.recycling += 1;
      return bins;
    }
    else if (trash === 'compost') {
      bins.compost += 1;
      return bins;
    }
};

console.log(smartGarbage('recycling', {waste: 4, recycling: 2, compost: 5}));

/*
 should return
 {
 waste: 4,
 recycling: 3,
 compost: 5
 }
 
 */
