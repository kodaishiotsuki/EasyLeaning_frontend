import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PageTop = ({ pageTitle }) => {
  return (
    <>
      <Container className='topFixedPager p-0' fluid={true}>
        <div className='topPageOverlay'>
          <Container className='topContentPage'>
            <Row>
              <Col className='text-center'>
                <h4 className='topPageTitle'>{pageTitle}</h4>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default PageTop;
