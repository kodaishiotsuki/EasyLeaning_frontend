import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const Summary = () => {
  return (
    <>
      <Container className='summaryBanner p-0' fluid={true}>
        <div className='summaryBannerOverlay'>
          <Container className='text-center'>
            <Row className="countSection">
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
                <h1>Four</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Summary;
