import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ClientReview = () => {
  return (
    <>
      <Container fluid={true} className='sliderBack text-center'>
        <h1 className='reviewMainTitle p-3'>Testimonials</h1>
        <div className='reviewButton'></div>
        <Row className='text-center justify-content-center'>
          <Col lg={6} md={6} sm={12}>
            <img
              className='circleImg'
              src='https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?t=st=1656128111~exp=1656128711~hmac=6e8360e67cab389f365b60043017723bd70cbbca01f60333e6490d4bcc216306&w=1480'
              alt=''
            />
            <h2 className='reviewName'>Ecommerce</h2>
            <p className='reviewDescription'>
              I will design and develop ecommerce online store website.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ClientReview;
