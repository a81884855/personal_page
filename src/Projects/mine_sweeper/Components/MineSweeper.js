import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Board from "./Board";

const MineSweeper = () => {
  const [mine, setMine] = useState(10);
  const [col, setCol] = useState(10);
  const [row, setRow] = useState(10);

  const modeHandle = async (col, row, mine, cb) => {
    await setMine(mine);
    await setCol(col);
    await setRow(row);
    cb();
  };

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <div>
          <Board rows={row} cols={col} mines={mine} modeHandle={modeHandle} />
        </div>
        <div className="rule">
          <h2>Rules:</h2>
          <h3>General Information:</h3>
          <ol>
            <li>Click any box to start the game</li>
            <li>Click the top yellow face to restart</li>
          </ol>
          <h3>With Mouse:</h3>
          <ol>
            <li>Right Click to open the box</li>
            <li>Left Click to flag the box</li>
          </ol>
          <h3>Without Mouse:</h3>
          <ol>
            <li>Click to open the box</li>
            <li>Command + Click to flag the box</li>
          </ol>
        </div>
      </Grid>
    </div>
  );
};

export default MineSweeper;
