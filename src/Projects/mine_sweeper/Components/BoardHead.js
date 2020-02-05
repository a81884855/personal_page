import React from "react";
import Grid from "@material-ui/core/Grid";

const BoardHead = props => {
  const { mines, second, reset, status, result } = props;
  const smileStyle = { display: status ? null : "none" };
  const cryStyle = { display: !status && !result ? null : "none" };
  const winStyle = { display: !status && result ? null : "none" };
  return (
    <div id="boardHead">
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <div id="mineInfo">
          Mine:
          {mines}
        </div>
      </Grid>
      <Grid container direction="row" justify="center">
        <div
          id="reset"
          onClick={() => {
            reset();
          }}
          role="button"
          tabIndex="0"
        >
          <div className="buttonIcon" style={smileStyle}>
            <img src="/assets/minesweeper/smile.png" alt="" />
          </div>
          <div className="buttonIcon" style={cryStyle}>
            <img src="/assets/minesweeper/cry.png" alt="" />
          </div>
          <div className="buttonIcon" style={winStyle}>
            <img src="/assets/minesweeper/win.png" alt="" />
          </div>
        </div>
      </Grid>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        Time: {second}
      </Grid>
    </div>
  );
};

export default BoardHead;
