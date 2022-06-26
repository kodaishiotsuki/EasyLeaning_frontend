import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container fluid={true} className='footerSection'>
        <Row>
          <Col lg={3} md={6} sm={12} className='p-5 text-center'>
            <h2 className='footerName text-center'>Follow Us</h2>

            <div className='socialContainer'>
              <Link to='#' className='facebook social'>
                <FontAwesomeIcon icon={faFacebook} size='2x' />
              </Link>
              <Link to='#' className='youtube social'>
                <FontAwesomeIcon icon={faYoutube} size='2x' />
              </Link>
              <Link to='#' className='twitter social'>
                <FontAwesomeIcon icon={faTwitter} size='2x' />
              </Link>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
            <h2 className='footerName text-center'>Address</h2>
            <p className='footerDescription text-center'>
              Fukuoka Japan <br />
              <FontAwesomeIcon icon={faEnvelope} />
              Email:hoge@hoge.com <br />
              <FontAwesomeIcon icon={faPhone} />
              phone:000-000-000 <br />
            </p>
          </Col>
          <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
            <h2 className='footerName text-center'>Information</h2>
            <div className='text-center'>
              <Link to='#' className='footerLink'>
                About Me
              </Link>
              <br />
              <Link to='#' className='footerLink'>
                Company Profile
              </Link>
              <br />
              <Link to='#' className='footerLink'>
                Contact Us
              </Link>
              <br />
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
            <h2 className='footerName text-center'>Policy</h2>
            <div className='text-center'>
              <Link to='/refund' className='footerLink'>
                Refund Policy
              </Link>{" "}
              <br />
              <Link to='#' className='footerLink'>
                Trems And Condition
              </Link>
              <br />
              <Link to='#' className='footerLink'>
                Privacy Policy
              </Link>
              <br />
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className='text-center copyrightSection'>
        <Link className='copyrightLink' to='#'>
          © 2020 easy Learning Inc.
        </Link>
      </Container>
    </>
  );
};

export default Footer;
