import React, { useState } from "react";
import { Col, Container, Modal, Row, Button } from "react-bootstrap";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";

const Video = () => {
  const [show, setShow] = useState(false);
  const modalClose = () => setShow(false);
  const modalOpen = () => setShow(true);

  return (
    <>
      <Container className='text-center'>
        <h1 className='ServiceMainTitle'>Our Video</h1>
        <div className='button'></div>
        <Row>
          <Col lg={6} md={6} sm={12} className='videoText'>
            <p className='serviceDescription text-justify'>
              Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for
              teaching I am a founder of easy Learning and a passionate Web
              Developer, Programmer & Instructor. <br />
              <br />
              I am working online for the last 9 years and have created several
              successful websites running on the internet. I try to create a
              project-based course that helps you to learn professionally and
              make you fell as a complete developer. easy learning exists to
              help you succeed in life. <br />
              <br />
              Each course has been hand-tailored to teach a specific skill. I
              hope you agree! Whether you’re trying to learn a new skill from
              scratch or want to refresh your memory on something you’ve learned
              in the past, you’ve come to the right place. Education makes the
              world a better place. Make your world better with new skills.
            </p>
          </Col>

          <Col lg={6} md={6} sm={12} className='videoCard'>
            <FontAwesomeIcon
              className='iconProject'
              icon={faVideoSlash}
              onClick={modalOpen}
            />
          </Col>
        </Row>
      </Container>

      {/* モーダル */}
      <Modal show={show} onHide={modalClose} size='lg'>
        <Modal.Body>
          <Player src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'>
            <BigPlayButton position='center' />
          </Player>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={modalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Video;
