import React from "react";
import { Row, Col } from "react-bootstrap";
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <div id="home">
      <div id="background">
        <img alt="" src="./background.jpg" />
      </div>
      <div id="homeInfo">
        <Row>
          <Col className="unselectable">
            <ReactTyped
              strings={[
                "Hi, I'm Gary, nice to meet you!<br> I'm a Self Motivated Developer",
                "Hi, I'm Gary, nice to meet you!<br> I'm a Fast-Learner",
                "Hi, I'm Gary, nice to meet you!<br> I'm a Full-Stack Developer!"
              ]}
              typeSpeed={100}
              backSpeed={60}
              backDelay={5}
              smartBackspace
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
