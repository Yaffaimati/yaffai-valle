import {Nav} from 'react-bootstrap';
import CartWidget from "./CartWidget.js";

function NavBars() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">TURISMO</Nav.Link>
      </Nav.Item>        
      <Nav.Item as="li">
        <Nav.Link href="/Link-1">Hospedajes</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Localidades</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-3">Excursiones</Nav.Link>
      </Nav.Item>
      <CartWidget/>
    </Nav>
  );
}

export default NavBars;