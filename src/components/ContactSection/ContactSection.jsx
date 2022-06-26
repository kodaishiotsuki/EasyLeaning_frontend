import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <>
      <Container className='mt-5 p-5'>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <h1 className='serviceName'>Quick Connect</h1>
            <Form>
              <Form.Group>
                <Form.Label>Your Name</Form.Label>
                <Form.Control type='text' placeholder='Your name' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Your Email</Form.Label>
                <Form.Control type='email' placeholder='Enter Your email' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as='textarea' rows={3} />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <h1 className='serviceName'>Discuss Now</h1>
            <p className='serviceDescription'>
              Fukuoka Japan <br />
              <FontAwesomeIcon icon={faEnvelope} />
              Email:hoge@hoge.com <br />
              <FontAwesomeIcon icon={faPhone} />
              phone:000-000-000 <br />
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactSection;
