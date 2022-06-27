import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import pageOne from "../../assets/Image/page1.png";
import pageTwo from "../../assets/Image/page2.png";
import pageThree from "../../assets/Image/page3.png";
import imageOne from "../../assets/Image/19.png";
import imageTwo from "../../assets/Image/20.png";
import imageThree from "../../assets/Image/21.png";

const Welcome = () => {
  return (
    <>
      <div className='intro-area-top'>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className='section-title text-center'>
                <div className='intro-area-inner'>
                  <h6 className='sub-title double-line'>Welcome</h6>
                  <h2 className='maintitle'>
                    An exemplary <br />
                    leaning community
                  </h2>

                  <Container className='text-center mt-5'>
                    <Row>
                      <Col lg={4} md={6} sm={12}>
                        <img src={pageOne} alt='' />
                        <h1 className='serviceName'>Easy As it Gets</h1>
                        <p className='serviceDescription'>Lorem ipsum dolor</p>
                      </Col>
                      <Col lg={4} md={6} sm={12}>
                        <img src={pageTwo} alt='' />
                        <h1 className='serviceName'>Teach The way you want</h1>
                        <p className='serviceDescription'>Lorem ipsum dolor</p>
                      </Col>
                      <Col lg={4} md={6} sm={12}>
                        <img src={pageThree} alt='' />
                        <h1 className='serviceName'>
                          The small matter of getting
                        </h1>
                        <p className='serviceDescription'>Lorem ipsum dolor</p>
                      </Col>
                    </Row>

                    {/* Intro Footer Start */}
                    <Row className='intro-footer bg-base text-center mt-5'>
                      <Col lg={4} md={6} sm={12}>
                        <Row>
                          <Col lg={6} md={6} sm={12}>
                            <img className='sideImg' src={imageOne} alt='' />
                          </Col>
                          <Col lg={6} md={6} sm={12}>
                            <h5 className='homeIntro text-justify'>
                              Development
                            </h5>
                            <p className='serviceDescription text-justify'>
                              Lorem ipsum dolor
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={4} md={6} sm={12}>
                        <Row>
                          <Col lg={6} md={6} sm={12}>
                            <img className='sideImg' src={imageTwo} alt='' />
                          </Col>
                          <Col lg={6} md={6} sm={12}>
                            <h5 className='homeIntro text-justify'>Design</h5>
                            <p className='serviceDescription text-justify'>
                              Lorem ipsum dolor
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={4} md={6} sm={12}>
                        <Row>
                          <Col lg={6} md={6} sm={12}>
                            <img className='sideImg' src={imageThree} alt='' />
                          </Col>
                          <Col lg={6} md={6} sm={12}>
                            <h5 className='homeIntro text-justify'>
                              Ecommerce
                            </h5>
                            <p className='serviceDescription text-justify'>
                              Lorem ipsum dolor
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Welcome;
