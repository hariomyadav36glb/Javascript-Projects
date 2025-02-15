const board = document.querySelector('.board');

let arr = new Array(9).fill(null);
let turn = "O";

// deciding winner
let tic = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
function isWinner()
{
  if(tic[0][0]!=null && tic[0][0]==tic[0][1] && tic[0][1]==tic[0][2] ||
    tic[1][0]!=null && tic[1][0]==tic[1][1] && tic[1][1]==tic[1][2] ||
    tic[2][0]!=null &&  tic[2][0]==tic[2][1] && tic[2][1]==tic[2][2] ||
    tic[0][0]!=null &&  tic[0][0]==tic[1][0] && tic[1][0]==tic[2][0] ||
    tic[0][1]!=null && tic[0][1]==tic[1][1] && tic[1][1]==tic[2][1] ||
    tic[0][2]!=null &&  tic[0][2]==tic[1][2] && tic[1][2]==tic[2][2] ||
    tic[0][0]!=null &&  tic[0][0]==tic[1][1] && tic[1][1]==tic[2][2])
    return 1;
    

}


const fun =  (event) => {
  ele = event.target;
  let parsedId = parseInt(ele.id, 10); // Parse ele.id to an integer

  if (arr[parsedId] === null) {
    if (turn === "O") {
      ele.innerHTML = turn;
      arr[parsedId] = parsedId;
      // console.log(parsedId);
      tic[Math.floor(parsedId / 3)][parsedId % 3] = turn; // Use Math.floor() for row index
    if(isWinner()){
      
       document.getElementById('winningMessage').innerHTML="Winner is " + turn;
          board.removeEventListener('click',fun);
    }
      turn = "X";
    } else {
      ele.innerHTML = turn;
      arr[parsedId] = parsedId;
      tic[Math.floor(parsedId / 3)][parsedId % 3] = turn; // Use Math.floor() for row index
      // console.log(tic);
      if(isWinner()){
        document.getElementById('winningMessage').innerHTML="Winner is " + turn;
        board.removeEventListener('click',fun);
      }
      turn = "O";
    }
  }
};

board.addEventListener('click',fun);
     
// if(!tic.includes(null)) document.getElementById('winningMessage').innerHTML="Winner is " + turn;
function checkTie(tic) {
  // Check if any cell is still empty
  for (let row of tic) {
      if (row.includes(null)) { // or use '' if empty cells are represented as ''
          return false; // The game is still ongoing
      }
  }
  return true; // All cells are filled, and if no winner, it's a tie
}
if(!checkTie) document.getElementById('winningMessage').innerHTML="Winner is " + turn;