import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BodyCard from './BodyCard';

function Content() {
  return (
    <Container>
      <Row>
        <Col><BodyCard /></Col>
        <Col><BodyCard /></Col>
      </Row>
    </Container>
  );
}

export default Content;
