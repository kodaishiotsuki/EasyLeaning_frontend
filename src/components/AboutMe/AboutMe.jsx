import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import face from "../../assets/Image/face.png";
import { init } from "ityped";

const AboutMe = () => {
  //spanタグの文字切り替え
  useEffect(() => {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: ["Web Developer", "Online Instructor!"],
    });
  }, []);

  return (
    <>
      <Container className='text-center'>
        <h1 className='ServiceMainTitle'>About Me</h1>
        <div className='button'></div>

        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className='aboutMeImage'>
              <img className='aboutImg' src={face} alt='' />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className='aboutMeBody'>
              <h2 className='aboutMeDetails'>HI There, I'm</h2>
              <h2 className='aboutMeTitle'>Hoge</h2>
              <h3 className='aboutMeDetails'>
                Work as <span id='myElement'></span>
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMe;
