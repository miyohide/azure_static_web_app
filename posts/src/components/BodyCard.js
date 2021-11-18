import React from 'react';
import Card from 'react-bootstrap/Card';

function BodyCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          This is card text content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BodyCard;
