import React from 'react';
import Card from 'react-bootstrap/Card';

function BodyCard(props) {
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
