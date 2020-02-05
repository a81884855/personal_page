import React from 'react';
import Cell from './Cell';

const Rows = (props) => {
  const {
    cols, rows, row, status,
  } = props;
  return row.map((cell, index) => (
    <Cell
      key={index}
      cell={cell}
      cols={cols}
      rows={rows}
      status={status}
      handleOpen={props.handleOpen}
      handleFlag={props.handleFlag}
    />
  ));
};

export default Rows;
