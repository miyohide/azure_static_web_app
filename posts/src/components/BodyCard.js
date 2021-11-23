import React from 'react';
import Card from 'react-bootstrap/Card';

function BodyCard(props) {
  // 分割代入。オブジェクト（props）の各プロパティに対応した
  // 変数に代入する。
  // see. https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const { title, body } = props;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BodyCard;
