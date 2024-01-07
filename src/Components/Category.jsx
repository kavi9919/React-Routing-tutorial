import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardItem } from './CardItem';
import { Items } from './Items';
import Card from 'react-bootstrap/Card';
export const Category = () => {
    const [data,setData]= useState(Items);
   
    const filterResult=(catItem)=>{
         const result=Items.filter((curData)=>{
            return curData.category===catItem;
         });

         setData(result);
         setActiveButton(catItem);
    }
    const [activeButton, setActiveButton] = useState('All');
  return (
    <>
      <h1 className='mb-5'>Category</h1>
      <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className={`btn btn-primary ${activeButton === 'All' ? 'active' : ''}`}
        onClick={() => {
          setData(Items);
          setActiveButton('All');
        }}
      >
        All
      </button>
      <button
        type="button"
        className={`btn btn-primary ${activeButton === 'Men' ? 'active' : ''}`}
        onClick={() => filterResult('Men')}
      >
        Men
      </button>
      <button
        type="button"
        className={`btn btn-primary ${activeButton === 'Women' ? 'active' : ''}`}
        onClick={() => filterResult('Women')}
      >
        Women
      </button>
      <button
        type="button"
        className={`btn btn-primary ${activeButton === 'kids' ? 'active' : ''}`}
        onClick={() => filterResult('kids')}
      >
        Kids
      </button>
    </div>
          
        <Container>  

            < Row md={9} className="g-2 mt-1">
                {data.map((values) =>{
                    const{id,title,price,img}=values;
                    <Col key={id}></Col>
                    return(
                    <>
                        <Card style={{ width: '18rem' }} className='mx-2 mb-4'>
                                <Card.Img variant="top" className='card-image' src={img} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                        <Card.Text>
                                        <p>{price}</p>
                                        </Card.Text>
                                    <Button variant="primary">Add to cart</Button>
                                </Card.Body>
                        </Card>
                    </>
                    )
                } 
                )}
                    
     
             </Row>            
        
    </Container>

    </>
  )
}
