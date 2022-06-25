import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ClientReview = () => {
  let settings = {
    autoPlay: true,
    autoPlaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 3000,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container fluid={true} className='sliderBack text-center'>
        <h1 className='reviewMainTitle p-3'>Testimonials</h1>
        <div className='reviewButton'></div>

        <Slider {...settings}>
          <div>
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
          </div>
          <div>
            <Row className='text-center justify-content-center'>
              <Col lg={6} md={6} sm={12}>
                <img
                  className='circleImg'
                  src='https://img.freepik.com/free-photo/portrait-of-brutal-bearded-male-with-tattooed-crossed-arms_613910-7274.jpg?w=1480&t=st=1656152635~exp=1656153235~hmac=ddb5eb2cc8e40583564f33d234d32e56198758bbb17e25b2e64e0d8d93042888'
                  alt=''
                />
                <h2 className='reviewName'>Ecommerce</h2>
                <p className='reviewDescription'>
                  I will design and develop ecommerce online store website.
                </p>
              </Col>
            </Row>
          </div>
          <div>
            <Row className='text-center justify-content-center'>
              <Col lg={6} md={6} sm={12}>
                <img
                  className='circleImg'
                  src='https://img.freepik.com/free-photo/beautiful-female-in-working-clothes-apron-and-goggles-repairs-a-bicycle-wheel-in-a-workshop_613910-19773.jpg?t=st=1656152635~exp=1656153235~hmac=a4cfd064eac595ee2364911a5f56dd81c39d64c26fdb69703b592aef9796d824&w=1480'
                  alt=''
                />
                <h2 className='reviewName'>Ecommerce</h2>
                <p className='reviewDescription'>
                  I will design and develop ecommerce online store website.
                </p>
              </Col>
            </Row>
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default ClientReview;
