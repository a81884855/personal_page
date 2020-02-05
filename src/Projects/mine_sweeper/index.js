import React from "react";
import MineSweeper from "./Components/MineSweeper";
import "./index.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <Button style={{ margin: "0 0 20px 150px" }} href="/">
          Main Page
        </Button>
        <MineSweeper />
      </div>
    </>
  );
}

export default App;
