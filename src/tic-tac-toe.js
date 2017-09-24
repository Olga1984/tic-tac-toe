class TicTacToe {
    constructor() {
        this.field = [[],[],[]];
        this.currentPlayerSumbol = 'x';
        this.winner = null;
        this.move = 0;
    }

    getCurrentPlayerSymbol() {
//should return correct player symbol
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
//should update game state correctly
    }

    isFinished() {
//should return return true or false
    }

    getWinner() {
//should return winner of the game or null
    }

    noMoreTurns() {
//should return true if game field is full and false otherwise
    }

    isDraw() {
//should return false if game is not finished or there is a winner, and true if it is a draw
    }

    getFieldValue(rowIndex, colIndex) {
//should return correct field value
    }
}

module.exports = TicTacToe;
