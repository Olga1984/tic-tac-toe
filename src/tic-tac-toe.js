class TicTacToe {
    constructor() {
        this.field = [[null, null, null],[null, null, null],[null, null, null]];
        this.currentPlayerSymbol = 'x';
        this.winner = null;
        this.move = 0;
    }

    getCurrentPlayerSymbol() {
//should return correct player symbol
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
//should update game state correctly
     if (this.field[rowIndex][columnIndex] != null){return;}
        this.move++;
        this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
        //win combinations
        if ( (this.field[0][0] && this.field[0][0] === this.field[1][0] && this.field[0][0] === this.field[2][0]) ||
            (this.field[0][1] && this.field[0][1] === this.field[1][1] && this.field[0][1] === this.field[2][1]) ||
            (this.field[0][2] && this.field[0][2] === this.field[1][2] && this.field[0][2] === this.field[2][2]) ||
            (this.field[0][0] && this.field[0][0] === this.field[0][1] && this.field[0][0] === this.field[0][2]) ||
            (this.field[1][0] && this.field[1][0] === this.field[1][1] && this.field[1][0] === this.field[1][2]) ||
            (this.field[2][0] && this.field[2][0] === this.field[2][1] && this.field[2][0] === this.field[2][2]) ||
            (this.field[0][0] && this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2]) ||
            (this.field[0][2] && this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]) )
            {
                this.winner = this.currentPlayerSymbol;
            }
       this.currentPlayerSymbol = (this.currentPlayerSymbol == 'x')?'o':'x';           
    }

    isFinished() {
//should return return true or false
        if (this.getWinner() != null || this.noMoreTurns() == true || this.isDraw()== true){
            return true;
        }else{
            return false;
        }    
    }

    getWinner() {
//should return winner of the game or null
        if (this.winner == null){
            return null;
        }else{
            return this.winner;
        }        
    }

    noMoreTurns() {
//should return true if game field is full and false otherwise
        return (this.move == 9) ? true : false;
    }

    isDraw() {
//should return false if game is not finished or there is a winner, and true if it is a draw
        if(this.getWinner() == null && this.noMoreTurns() == true ){
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
