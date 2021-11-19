import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BodyCard from './BodyCard';

const cardContents = [
  {
    title: "タイトル1",
    body: "本文1"
  },
  {
    title: "タイトル2",
    body: "本文2"
  },
  {
    title: "タイトル3",
    body: "本文3"
  },
  {
    title: "タイトル4",
    body: "本文4"
  },
  {
    title: "タイトル5",
    body: "本文5"
  },
]

function Content() {
  const getCardContent = getObj => {
    return (
      <Col>
        <BodyCard {...getObj} />
      </Col>
    );
  };
  return (
    <Container>
      <Row xs={1} md={3} className="g-2">
        {cardContents.map(contentObj => getCardContent(contentObj))}
      </Row>
    </Container>
  );
}

export default Content;
