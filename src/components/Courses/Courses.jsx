import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <Container className='text-center'>
        <h1 className='ServiceMainTitle'>My Courses</h1>
        <div className='button'></div>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12} className='p-2'>
                <img
                  className='courseImage'
                  src='https://img.freepik.com/free-photo/portrait-of-beautiful-girl-working-at-home-with-laptop-and-notebook_496169-2812.jpg?w=1480'
                  alt=''
                />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h5 className='serviceName text-justify'>Title 1</h5>
                <p className='serviceDescription text-justify'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link className='courseViewMore float-left' to='#'>
                  View Details
                </Link>
              </Col>
              <Col lg={6} md={6} sm={12} className='p-2'>
                <img
                  className='courseImage'
                  src='https://as2.ftcdn.net/v2/jpg/02/30/41/15/1000_F_230411534_wgzYTFPCuJ0L1YTGIVIgqwx2UPSPlAwY.jpg'
                  alt=''
                />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h5 className='serviceName text-justify'>Title 1</h5>
                <p className='serviceDescription text-justify'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link className='courseViewMore float-left' to='#'>
                  View Details
                </Link>
              </Col>
            </Row>
          </Col>

          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12} className='p-2'>
                <img
                  className='courseImage'
                  src='https://as1.ftcdn.net/v2/jpg/05/06/17/60/1000_F_506176025_WcjY1hNMspiHVEgcvnaFOsKYFD4Nlheb.jpg'
                  alt=''
                />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h5 className='serviceName text-justify'>Title 1</h5>
                <p className='serviceDescription text-justify'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link className='courseViewMore float-left' to='#'>
                  View Details
                </Link>
              </Col>
              <Col lg={6} md={6} sm={12} className='p-2'>
                <img
                  className='courseImage'
                  src='https://as1.ftcdn.net/v2/jpg/02/19/45/38/1000_F_219453831_dS0KTghhOofNZT9XQUL6sYeHWKgIdaa7.jpg'
                  alt=''
                />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h5 className='serviceName text-justify'>Title 1</h5>
                <p className='serviceDescription text-justify'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link className='courseViewMore float-left' to='#'>
                  View Details
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Courses;
