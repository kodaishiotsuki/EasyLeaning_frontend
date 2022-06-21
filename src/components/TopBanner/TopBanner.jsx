import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../assets/css/custom.css";
// import "../../assets/css/bootstrap.min.css";

const TopBanner = () => {
  return (
    <>
      <Container className='topFixedBanner p-0' fluid={true}>
        <div className='topBannerOverlay'>
          <Container className='topContent'>
            <Row>
              <Col className='text-center'>
                <h1 className='topTitle'>Easy Leaning</h1>
                <h4 className="topSubTitle">Learn Profesionally</h4>
                <Button variant='primary'>Learn More</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default TopBanner;
