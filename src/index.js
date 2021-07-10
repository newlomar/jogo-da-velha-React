import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button 
            className="square" 
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

function HistoryBoard(props) {
    return (
        <div>
            <div className="history-board">
                <div className="square">{props.currentBoard[0]}</div>
                <div className="square">{props.currentBoard[1]}</div>
                <div className="square">{props.currentBoard[2]}</div>
             </div>
             <div className="history-board">
                <div className="square">{props.currentBoard[3]}</div>
                <div className="square">{props.currentBoard[4]}</div>
                <div className="square">{props.currentBoard[5]}</div>
             </div>
             <div className="history-board">
                <div className="square">{props.currentBoard[6]}</div>
                <div className="square">{props.currentBoard[7]}</div>
                <div className="square">{props.currentBoard[8]}</div>
             </div>
        </div>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square 
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}    
            />
        );
    }

    gerarBoard() {
        let boardRows = [];
        let counter = 0;

        for(let i = 0; i < 3; i++) {
            let row = [];
            for(let j = 0; j < 3; j++) {
                row.push(this.renderSquare(counter));
                counter++;
            }
            boardRows.push(<div className="board-row">{row}</div>);
        }
        return boardRows;
    }

    render() {

        let board = this.gerarBoard();

        return (
            <div>
                {board}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,   
        });
    }
    
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        console.log(current);
        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    {
                        move === this.state.stepNumber ? 
                        <button className="current-board" onClick={() => this.jumpTo(move)}>{desc}</button> : 
                        <button onClick={() => this.jumpTo(move)}>{desc}</button>
                    }
                    <HistoryBoard className="history-board" currentBoard={this.state.history[move].squares}/>
                </li>
            )
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        }
        else {
            status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i< lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}