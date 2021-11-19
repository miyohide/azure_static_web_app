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
  // 名前付き関数（アロー関数式を使った記述）
  const getCardContent = getObj => {
    return (
      <Col>
        {/* スプレッド構文。getObjのすべての要素をBodyCardのproperty（props）に渡す */}
        <BodyCard {...getObj} />
      </Col>
    );
  };
  return (
    <Container>
      <Row xs={1} md={3} className="g-2">
        {/* map() は与えられた関数を配列の全ての要素に対して呼び出し、
            その結果からなる新しい配列を生成する
        */}
        {cardContents.map(contentObj => getCardContent(contentObj))}
      </Row>
    </Container>
  );
}

export default Content;
