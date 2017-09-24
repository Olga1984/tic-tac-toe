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
        if (this.getWinner() !== null || this.noMoreTurns() === true){
            return true;
        }else{
            return false;
        }    
    }

    getWinner() {
//should return winner of the game or null
        if (this.winner === null){
            return null;
        }else{
            return this.winner;
        }        
    }

    noMoreTurns() {
//should return true if game field is full and false otherwise
        return (this.move === 9)?true:false;
    }

    isDraw() {
//should return false if game is not finished or there is a winner, and true if it is a draw
        if(this.getWinner() === null && this.noMoreTurns() === true){
            return true;
        }else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
//should return correct field value
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
