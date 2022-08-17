import {Nav} from 'react-bootstrap';
import CartWidget from "./CartWidget.js";

function NavBars() {
  return (
    <Nav defaultActiveKey="/turismo" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home">TURISMO</Nav.Link>
      </Nav.Item>       
      <Nav.Item as="li">
        <Nav.Link href="/category/Localidades">Localidades</Nav.Link>
      </Nav.Item>  
      <Nav.Item as="li">
        <Nav.Link href="/category/Hospedajes">Hospedajes</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/category/Excursiones">Excursiones</Nav.Link>
      </Nav.Item>
       
      <CartWidget/>
    </Nav>
  );
}

export default NavBars;