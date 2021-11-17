import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Posts!!!</Navbar.Brand>
        </Container>
      </Navbar>
      ヘッダー
    </div>
  );
}

export default Header;
