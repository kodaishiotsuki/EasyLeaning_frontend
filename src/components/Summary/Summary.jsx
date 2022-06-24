import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Summary = () => {
  return (
    <>
      <Container className='summaryBanner p-0' fluid={true}>
        <div className='summaryBannerOverlay'>
          <Container className='text-center'>
            <Row className='countSection'>
              <Col lg={8} md={6} sm={12}>
                <Row>
                  <Col>
                    <FontAwesomeIcon className='iconProject' icon={faGlobe} />
                    <h1 className='countNumber'>35000</h1>
                    <h4 className='countTitle'>Students Worldwide</h4>
                    <hr className='bg-white w-25' />
                  </Col>
                  <Col>
                    <FontAwesomeIcon className='iconProject' icon={faLaptop} />
                    <h1 className='countNumber'>22</h1>
                    <h4 className='countTitle'>Courses Published</h4>
                    <hr className='bg-white w-25' />
                  </Col>
                  <Col>
                    <FontAwesomeIcon className='iconProject' icon={faStar} />
                    <h1 className='countNumber'>3000</h1>
                    <h4 className='countTitle'>Student Reviews</h4>
                    <hr className='bg-white w-25' />
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Card className='workCard'>
                  <Card.Body>
                    <Card.Title className='cardTitle'>
                      What I Have Achieved
                    </Card.Title>
                    <Card.Text>
                      <p className='cardSubTitle text-justify'>
                        <FontAwesomeIcon
                          className='iconImage'
                          icon={faCheckSquare}
                        />
                        Requirement Gathering
                      </p>
                      <p className='cardSubTitle text-justify'>
                        <FontAwesomeIcon
                          className='iconImage'
                          icon={faCheckSquare}
                        />
                        System Analysis
                      </p>
                      <p className='cardSubTitle text-justify'>
                        <FontAwesomeIcon
                          className='iconImage'
                          icon={faCheckSquare}
                        />
                        Coding Testing
                      </p>
                      <p className='cardSubTitle text-justify'>
                        <FontAwesomeIcon
                          className='iconImage'
                          icon={faCheckSquare}
                        />
                        Implementation
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Summary;
