import {Nav} from 'react-bootstrap';
import CartWidget from "./CartWidget.js";

function NavBars({type}) {

  return (
    <header> 
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

       
    <CartWidget type="header"/>
    
    
    </Nav>
    </header>
  );
}

export default NavBars;




