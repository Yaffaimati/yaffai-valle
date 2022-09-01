import {Nav} from 'react-bootstrap';
import CartWidget from "./CartWidget.js";

function NavBars(product) {
  return (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">TURISMO</Nav.Link>
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

       <Nav.Link to={"/cart"}> 
      <CartWidget/>
      </Nav.Link>
    
    </Nav>
  );
}

export default NavBars;