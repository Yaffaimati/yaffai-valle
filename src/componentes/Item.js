import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Item = ({product}) => {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image}/>
      <Card.Body>
        <Card.Title>{product.category}</Card.Title>
        <Card.Text>{product.product}</Card.Text>
        <Button variant="primary">Ver Detalle</Button>
      </Card.Body>
    </Card>
    
  );
}
    export default Item