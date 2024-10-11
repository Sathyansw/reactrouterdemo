import React from 'react'
import { Button, Card,Col,Container,Row } from 'react-bootstrap'


function CardsBS() {
  return (
    
      <Container>
        <Row>
            <Col md={4}>
                <Card border='primary'>
                    <Card.Img src='Images/pic1.jpg' />
                    <Card.ImgOverlay>
                        <Card.Title>
                            Card Title
                        </Card.Title>
                        <Card.Subtitle>Card SubTitle</Card.Subtitle>
                        <Card.Text>
                            This is a card text  This is a card text  This is a card text  This is a card text
                            This is a card text  This is a card text  This is a card text  This is a card text
                            This is a card text  This is a card text  This is a card text 
                            This is a card text  This is a card text  This is a card text
                            This is a card text This is a card text This is a card text
                        </Card.Text>
                        <Card.Link href='#'>Click here...</Card.Link>
                        <div className='d-grid'>
                        <Button variant='danger'>Read More..</Button>
                        </div>
                    
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col md={4}>
                <Card bg='success'>
                <Card.Header>
                    This is card header
                </Card.Header>
                    <Card.Img src='Images/pic1.jpg' />
                    <Card.Body>
                        <Card.Title>
                            Card Title
                        </Card.Title>
                        <Card.Subtitle>Card SubTitle</Card.Subtitle>
                        <Card.Text>
                            This is a card text  This is a card text  This is a card text  This is a card text
                            This is a card text  This is a card text  This is a card text  This is a card text
                            This is a card text  This is a card text  This is a card text 
                            This is a card text  This is a card text  This is a card text
                            This is a card text This is a card text This is a card text
                        </Card.Text>
                        
                        <div className='d-grid'>
                        <Button variant='primary'>Read More..</Button>
                        </div>
                    
                    </Card.Body>
                    <Card.Footer>
                        This is card footer
                    </Card.Footer>
                </Card>
            </Col>
            <Col md={4}>
                <Card bg='secondary'>
                    <Card.Img src='Images/pic1.jpg' />
                    <Card.Body>
                        <Card.Title>
                            Card Title
                        </Card.Title>
                        <Card.Subtitle>Card SubTitle</Card.Subtitle>
                        <Card.Text>
                            This is a card text  This is a card text  This is a card text  This is a card text
                            This is a card text  This is a card text  This is a card text  This is a card text
                            This is a card text  This is a card text  This is a card text 
                            This is a card text  This is a card text  This is a card text
                            This is a card text This is a card text This is a card text
                        </Card.Text>
                        
                        <div className='d-grid'>
                        <Button variant='success'>Read More..</Button>
                        </div>
                    
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    
  )
}

export default CardsBS
