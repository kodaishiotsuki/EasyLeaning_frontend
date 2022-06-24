import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

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
                    <h1 className='countNumber'>35000</h1>
                    <h4 className='countTitle'>Students Worldwide</h4>
                    <hr className='bg-white w-25' />
                  </Col>
                  <Col>
                    <h1 className='countNumber'>22</h1>
                    <h4 className='countTitle'>Courses Published</h4>
                    <hr className='bg-white w-25' />
                  </Col>
                  <Col>
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
                        Requirement Gathering
                      </p>
                      <p className='cardSubTitle text-justify'>
                        System Analysis
                      </p>
                      <p className='cardSubTitle text-justify'>
                        Coding Testing
                      </p>
                      <p className='cardSubTitle text-justify'>
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
