
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'] ;

const finalPosition = moves => {
    let xposition = 0;
    let yposition = 0;
  for (var i = 0 ; i < moves.length ; i++){
    if (moves[i] === 'north'){
      yposition++;
    }
    else if (moves[i] === 'south'){
      yposition--
    }
    else if (moves[i] === 'east'){
      xposition++
    }
    else if (moves[i] === 'west'){
      xposition--
    }
  }
  return [xposition, yposition];
}

console.log(finalPosition(moves));

