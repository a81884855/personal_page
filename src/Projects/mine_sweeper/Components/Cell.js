import React from "react";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

  handleClick(e) {
    e.preventDefault();
    const { cell, handleOpen, handleFlag } = this.props;
    if (e.ctrlKey || e.metaKey || e.nativeEvent.which === 3) {
      handleFlag(cell.y, cell.x);
    } else {
      handleOpen(cell.y, cell.x);
    }
  }

  render() {
    const { cell, rows, cols, status } = this.props;
    const { isOpen, hasMine, count, hasFlag } = cell;
    let { height, width } = this.state;
    height /= rows;
    width /= cols;
    const size = height < width ? height : width;
    const cellStyle = {
      background: isOpen ? "white" : "#A9A9A9",
      height: size * 0.6,
      width: size * 0.6,
      border: "1px solid black",
      textAlign: "center"
    };

    return (
      <div
        style={cellStyle}
        onKeyUp={this.handleKeyUp}
        role="button"
        tabIndex={0}
        onClick={this.handleClick.bind(this)}
        onContextMenu={this.handleClick.bind(this)}
      >
        {hasFlag ? <img src="https://i.imgur.com/lIP4hGp.png" alt="" /> : null}
        {(hasMine && isOpen) || (hasMine && !status && !hasFlag) ? (
          <img src="https://i.imgur.com/bH8hLVi.png" alt="" />
        ) : count > 0 && isOpen ? (
          <img id="cell" src={`/minesweeper/number/${count}.png`} alt="" />
        ) : null}
      </div>
    );
  }
}

export default Cell;
