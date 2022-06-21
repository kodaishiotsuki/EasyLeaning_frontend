import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const Analysis = () => {
  const [data, setData] = useState([
    { Technology: "PHP", Projects: 100 },
    { Technology: "MySQL", Projects: 90 },
    { Technology: "Laravel", Projects: 95 },
    { Technology: "React", Projects: 85 },
    { Technology: "OpenCart", Projects: 80 },
    { Technology: "Vue Js", Projects: 70 },
    // { Technology: "Django", Projects: 65 },
    { Technology: "JavaScript", Projects: 100 },
  ]);

  return (
    <>
      <Container className='text-center'>
        <h1 className='ServiceMainTitle'>Technology Used</h1>
        <div className='button'></div>
        <Row>
          <Col
            lg={6}
            md={12}
            sm={12}
            style={{ width: "100%", height: "300px" }}
          >
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart width={100} height={300} data={data}>
                <XAxis dataKey='Technology' />
                <Tooltip />
                <Bar dataKey='Projects' fill='#051b35'></Bar>
              </BarChart>
            </ResponsiveContainer>
          </Col>

          <Col lg={6} md={12} sm={12}>
            <p className='text-justify serviceDescription'>
              Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for
              teaching I am a founder of easy Learning and a passionate Web
              Developer, Programmer & Instructor.
              <br />
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
        </Row>
      </Container>
    </>
  );
};

export default Analysis;
