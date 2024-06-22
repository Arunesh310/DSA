// in this  question we are solving the minimum number of moves made to seat all the students in the given seats 

var minMovesToSeat = function(seats, students) {// first we are sorting both the seats and the place where the student is standing 
  seats.sort((a,b) => a - b)
  students.sort((a,b) => a-b)

  let moves = 0

  for (let i = 0; i < seats.length; i ++){ // then we are calculating the least no. of moves required to seat the students
      moves += Math.abs(seats[i] - students[i])
  }

  return moves


};