let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function makeMove(index) {
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  document.getElementsByClassName("cell")[index].innerText = currentPlayer;

  if (checkWinner()) {
    document.getElementById("status").innerText = `${currentPlayer} wins!`;
    gameActive = false;
  } else if (board.every(cell => cell !== "")) {
    document.getElementById("status").innerText = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("status").innerText = `${currentPlayer}'s turn`;
  }
}

function checkWinner() {
  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  return winCombos.some(combo => 
    board[combo[0]] &&
    board[combo[0]] === board[combo[1]] &&
    board[combo[0]] === board[combo[2]]
  );
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  document.getElementById("status").innerText = "X's turn";
  const cells = document.getElementsByClassName("cell");
  for (let cell of cells) cell.innerText = "";
}
