import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardItem = (prop) => {
  return (
         <>
         <Card style={{ width: '18rem' }} className='mx-2 mb-4'>
            <Card.Img variant="top" src={prop.img} />
            <Card.Body>
                <Card.Title>{prop.title}</Card.Title>
                    <Card.Text>
                     <p>{prop.price}</p>
                    </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
    </Card>
         </>
  )
}
