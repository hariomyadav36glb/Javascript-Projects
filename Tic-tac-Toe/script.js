// const board = document.querySelector(".board");
let flag = 'O';

let winner = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

let board_array = new Array(9).fill("E");
function isWinner()
{
   for(let [index0,index1,index2] of winner)
   {
    if(board_array[index0]!="E" && board_array[index0]===board_array[index1] && board_array[index1] ===board_array[index2]) return 1;
   }
   return 0;
}

const printer = (event)=>{
  const element = event.target;
  if(board_array[element.id]=="E")
  {
    cnt++;
   if(flag==='O')
     {
       element.innerHTML = "O";
       element.style.color="green";
      
       board_array[element.id]="O";
       
       if(isWinner())
       {
        document.getElementById('winningMessage').innerHTML ="WINNER IS O"; 

board.removeEventListener('click',printer);
return; 
       }
       flag = 'X';
     }
     else{
      element.innerHTML = "X";
      element.style.color="brown";
         board_array[element.id] = "X";
      if(isWinner())
        {
          document.getElementById('winningMessage').innerHTML ="WINNER IS X";
          board.removeEventListener('click',printer);
          return; 
        }
      flag = "O";
     }
     if(cnt===9)  
     {
      document.getElementById('winningMessage').innerHTML ="MATCH TIED";
     }
  }
}

let cnt = 0;

const board = document.querySelector(".board");
board.addEventListener("click",printer);

const restart = document.getElementById('restartButton');
restart.addEventListener('click',()=>{
  const cell = document.getElementsByClassName('cell');
  Array.from(cell).forEach((val)=>{
    val.innerHTML="";
    document.getElementById('winningMessage').innerHTML =""; 
  })
  flag = "O";
  cnt=0;
  board_array = new Array(9).fill("E");
  board.addEventListener("click",printer); 
});
