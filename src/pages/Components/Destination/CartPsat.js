import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import styl from './Cartpart.module.css';

function CartPart() {
  return (
    <Card style={{ width: '18rem'}} className={styl.cartpat}>
      <Card.Img variant="top" src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2018-09/herobanner-events.jpg?itok=hI-hYGG6" />
      <Card.Body>
        <Card.Title className={styl.titel}>The Grand Canon,Dhaka</Card.Title>
        <Card.Text>
          <small>Some quick example text</small> 
        </Card.Text>
      </Card.Body>
      <Card.Body className={styl.pricing}>
        <Card.Text><strong>100$ </strong><small className={styl.pricecolor}>per pice</small></Card.Text>
        <Button variant="light" className={styl.cartbutton}>Buy Now</Button>{' '}
      </Card.Body>
    </Card>
  );
}

export default CartPart;