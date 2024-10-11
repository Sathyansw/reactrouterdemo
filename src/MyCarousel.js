import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

function MyCarousel() {
  return (
    <>
        <Container>
            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img src='Images/pic1.jpg' 
                              height='200' width='200'   className='d-block w-100'
                            />
                            <Carousel.Caption>
                                <h3>First Image</h3>
                                <p>Description of first image</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src='Images/pic2.jpg'
                               height='200' width='200'  className='d-block w-100'
                            />
                            <Carousel.Caption>
                                <h3>Second Image</h3>
                                <p>Description of Second image</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img src='Images/pic4.jpg'
                               height='200' width='200'  className='d-block w-100'
                            />
                            <Carousel.Caption>
                                <h3>Third Image</h3>
                                <p>Description of Third image</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default MyCarousel
