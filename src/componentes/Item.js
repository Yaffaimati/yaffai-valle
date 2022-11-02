import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import {Link} from 'react-router-dom'

const Item = ({product}) => {
  return (
    
    <Card style={{}}>
      <Card.Img variant="top" src={product.image}/>
      <Card.Body>
        <Card.Title>{product.category}</Card.Title>
        <Card.Text>{product.product}</Card.Text>
        <Link to={`/detalle/${product.id}`}>  
          <Button variant="primary">Detalle</Button>
        </Link> 
      </Card.Body>
    </Card>
    
  )
} 
    export default Item