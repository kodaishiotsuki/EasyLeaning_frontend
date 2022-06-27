import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllProjects = () => {
  return (
    <>
      <Container className='text-center'>
        <h1 className='ServiceMainTitle'>Recent Project</h1>
        <div className='button'></div>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Card className='projectCard'>
              <Card.Img
                variant='top'
                src='https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?t=st=1656067434~exp=1656068034~hmac=e8bc1c1a74667f472e00a484f33f1e740f820bb9157b33866837a14b2470528e&w=1480'
              />
              <Card.Body>
                <Card.Title className='serviceName'>
                  Project Name One
                </Card.Title>
                <Card.Text className='serviceDescription'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>
                  <Link className='linkStyle' to='/projectdetails'>
                    View More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className='projectCard'>
              <Card.Img
                variant='top'
                src='https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?t=st=1656067434~exp=1656068034~hmac=e8bc1c1a74667f472e00a484f33f1e740f820bb9157b33866837a14b2470528e&w=1480'
              />
              <Card.Body>
                <Card.Title className='serviceName'>
                  Project Name One
                </Card.Title>
                <Card.Text className='serviceDescription'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>
                  <Link className='linkStyle' to='/projectdetails'>
                    View More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className='projectCard'>
              <Card.Img
                variant='top'
                src='https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?t=st=1656067434~exp=1656068034~hmac=e8bc1c1a74667f472e00a484f33f1e740f820bb9157b33866837a14b2470528e&w=1480'
              />
              <Card.Body>
                <Card.Title className='serviceName'>
                  Project Name One
                </Card.Title>
                <Card.Text className='serviceDescription'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>
                  <Link className='linkStyle' to='/projectdetails'>
                    View More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className='projectCard'>
              <Card.Img
                variant='top'
                src='https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?t=st=1656067434~exp=1656068034~hmac=e8bc1c1a74667f472e00a484f33f1e740f820bb9157b33866837a14b2470528e&w=1480'
              />
              <Card.Body>
                <Card.Title className='serviceName'>
                  Project Name One
                </Card.Title>
                <Card.Text className='serviceDescription'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>
                  <Link className='linkStyle' to='/projectdetails'>
                    View More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className='projectCard'>
              <Card.Img
                variant='top'
                src='https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?t=st=1656067120~exp=1656067720~hmac=2f4333fa78131713212100e70880c5615b001df62c34da2551d24812b89bf9e6&w=1480'
              />
              <Card.Body>
                <Card.Title className='serviceName'>
                  Project Name Two
                </Card.Title>
                <Card.Text className='serviceDescription'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>
                  <Link className='linkStyle' to='/projectdetails'>
                    View More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className='projectCard'>
              <Card.Img
                variant='top'
                src='https://img.freepik.com/free-vector/online-courses-and-tutorials_52683-37861.jpg?t=st=1656067441~exp=1656068041~hmac=1c3dfd4edce57557c9a6215306e6215c46e8af4c5683acb4caf66780e1dad35d&w=1480'
              />
              <Card.Body>
                <Card.Title className='serviceName'>
                  Project Name Three
                </Card.Title>
                <Card.Text className='serviceDescription'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>
                  <Link className='linkStyle' to='/projectdetails'>
                    View More
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllProjects;
