import React from "react";
import Rows from "./Rows";
import BoardHead from "./BoardHead";
import Mode from "./Mode";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.createBoard(),
      steps: 0,
      mines: this.minesNumber(),
      correct: 0,
      status: true,
      start: false,
      second: 0,
      result: false
    };
  }

  handleFlag(y, x) {
    const { board, status } = this.state;
    let { mines, correct } = this.state;
    const cell = board[y][x];
    if (status && !cell.isOpen) {
      if (!cell.isOpen) cell.hasFlag = !cell.hasFlag;
      if (cell.hasFlag) {
        mines -= 1;
        if (cell.hasFlag === cell.hasMine) correct += 1;
      } else {
        mines += 1;
        if (cell.hasMine) correct -= 1;
      }
      this.setState(
        {
          board,
          mines,
          correct
        },
        () => {
          if (mines === 0) this.checkWin();
        }
      );
    }
  }

  handleOpen(y, x) {
    const { status, start, board } = this.state;
    let { steps, second } = this.state;
    const cell = board[y][x];
    if (status) {
      if (!start) {
        this.setState({
          start: true
        });
        this.timer = setInterval(() => {
          this.setState({
            second: (second += 1)
          });
        }, 1000);
      }

      if (!cell.hasFlag && !cell.isOpen) {
        cell.isOpen = true;
        steps += 1;
        if (cell.hasMine)
          this.setState(
            { status: false },
            alert("Boom!!"),
            clearInterval(this.timer)
          );
      }

      if (cell.count === 0 && !cell.hasFlag) {
        this.openAround(y, x);
      }
      this.setState({
        board,
        steps
      });
    }
  }

  checkWin() {
    const { correct, steps, second } = this.state;
    const { mines } = this.props;
    let { result } = this.state;
    if (correct === mines) {
      alert(`Victory! You spend ${second} seconds and use ${steps} steps`);
      result = true;
    } else {
      alert("Oh Not!!");
    }
    this.setState({ status: false, result });
    clearInterval(this.timer);
  }

  openAround(y, x) {
    const { rows, cols } = this.props;
    for (let row = y - 1; row <= y + 1; row += 1) {
      if (row >= 0 && row < rows) {
        for (let col = x - 1; col <= x + 1; col += 1) {
          if (col >= 0 && col < cols) {
            const { board } = this.state;
            const cell = board[row][col];
            if (!cell.isOpen && cell.count === 0 && !cell.hasFlag) {
              cell.isOpen = true;
              this.openAround(row, col);
            }
            if (!cell.hasFlag) {
              cell.isOpen = true;
            }
          }
        }
      }
    }
  }

  mineAround(board, y, x) {
    const { rows, cols } = this.props;
    let minesAround = 0;
    for (let row = y - 1; row <= y + 1; row += 1) {
      if (row >= 0 && row < rows) {
        for (let col = x - 1; col <= x + 1; col += 1) {
          if (col >= 0 && col < cols) {
            const around = board[row][col];
            if (around.hasMine) {
              minesAround += 1;
            }
          }
        }
      }
    }
    const cell = board[y][x];
    cell.count = minesAround;
  }

  createBoard() {
    const board = [];
    const { rows, cols, mines } = this.props;
    for (let i = 0; i < rows; i += 1) {
      board.push([]);
      for (let j = 0; j < cols; j += 1) {
        board[i].push({
          x: j,
          y: i,
          count: 0,
          isOpen: false,
          hasMine: false,
          hasFlag: false
        });
      }
    }

    for (let i = 0; i < mines; i += 1) {
      const randomRows = Math.floor(Math.random() * rows);
      const randomCols = Math.floor(Math.random() * cols);
      const cell = board[randomRows][randomCols];
      if (cell.hasMine) {
        i -= 1;
      } else {
        cell.hasMine = true;
      }
    }

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        this.mineAround(board, row, col);
      }
    }
    return board;
  }

  reset() {
    const board = this.createBoard();
    const { mines } = this.props;
    clearInterval(this.timer);
    this.setState({
      board,
      mines,
      second: 0,
      start: false,
      correct: 0,
      steps: 0,
      status: true,
      result: false
    });
  }

  minesNumber() {
    const { mines } = this.props;
    return mines;
  }

  modeChangeHandle(cols, rows, mines) {
    const { modeHandle } = this.props;
    modeHandle(cols, rows, mines, () => {
      this.reset();
    });
  }

  render() {
    const { board, second, status, result, mines } = this.state;
    const { cols, rows } = this.props;
    return (
      <div>
        <Mode modeChangeHandle={this.modeChangeHandle.bind(this)} />
        <div id="board">
          <BoardHead
            mines={mines}
            second={second}
            status={status}
            result={result}
            reset={this.reset.bind(this)}
          />
          {board.map((row, index) => (
            <div className="row" key={index}>
              <Rows
                status={status}
                row={row}
                cols={cols}
                rows={rows}
                handleOpen={this.handleOpen.bind(this)}
                handleFlag={this.handleFlag.bind(this)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
