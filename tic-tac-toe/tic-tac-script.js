let board = Array.from(document.getElementsByClassName('cell'));
let currentPlayer = 'X';
let gameIsLive = true;
let winner = null;

function checkGameStatus() {
    let firstRow = board[0].textContent + board[1].textContent + board[2].textContent;
    let secondRow = board[3].textContent + board[4].textContent + board[5].textContent;
    let thirdRow = board[6].textContent + board[7].textContent + board[8].textContent;

    let firstCol = board[0].textContent + board[3].textContent + board[6].textContent;
    let secondCol = board[1].textContent + board[4].textContent + board[7].textContent;
    let thirdCol = board[2].textContent + board[5].textContent + board[8].textContent;

    let leftDiagonal = board[0].textContent + board[4].textContent + board[8].textContent;
    let rightDiagonal = board[2].textContent + board[4].textContent + board[6].textContent;

    if (firstRow === 'XXX' || secondRow === 'XXX' || thirdRow === 'XXX' || firstCol === 'XXX' || secondCol === 'XXX' || thirdCol === 'XXX' || leftDiagonal === 'XXX' || rightDiagonal === 'XXX') {
        winner = 'X';
        gameIsLive = false;
    } else if (firstRow === 'OOO' || secondRow === 'OOO' || thirdRow === 'OOO' || firstCol === 'OOO' || secondCol === 'OOO' || thirdCol === 'OOO' || leftDiagonal === 'OOO' || rightDiagonal === 'OOO') {
        winner = 'O';
        gameIsLive = false;
    } else if (!board.some(cell => cell.textContent === '')) {
        gameIsLive = false;
    }
}

board.forEach(cell => {
    cell.addEventListener('click', e => {
        if (e.target.textContent === '' && gameIsLive) {
            e.target.textContent = currentPlayer;
            checkGameStatus();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

document.getElementById('reset-button').addEventListener('click', e => {
    board.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
    gameIsLive = true;
    winner = null;
});