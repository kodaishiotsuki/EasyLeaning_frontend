import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import designIcon from "../../assets/Image/design.png";
import ecommerceIcon from "../../assets/Image/ecommerce.png";
import webIcon from "../../assets/Image/web.png";


const Services = () => {
  return (
    <>
      <Container className="text-center">
        <h1 className="ServiceMainTitle">My Services</h1>
        <div className="button"></div>

        <Row>
          <Col lg={4} md={6} sm={12}>
            <div className='serviceCard text-center'>
              <img className='ecommerceIcon' src={ecommerceIcon} alt='' />
              <h2 className='serviceName'>Ecommerce</h2>
              <p className='serviceDescription'>
                I will design and develop ecommerce online store website.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className='serviceCard text-center'>
              <img className='designIcon' src={designIcon} alt='' />
              <h2 className='serviceName'>Web Design</h2>
              <p className='serviceDescription'>
                Qualified web design and attractive effects which catches
                visitor's Eye.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className='serviceCard text-center'>
              <img className='webIcon' src={webIcon} alt='' />
              <h2 className='serviceName'>Web Development</h2>
              <p className='serviceDescription'>
                Clean and fresh issue free code to make your website dynamic
                perfectly.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
