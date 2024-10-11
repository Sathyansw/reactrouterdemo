import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

function MyNavbar() {
  return (
   <>
    <Container>
        <Row>
            <Col>
                <Navbar fixed='top' variant='dark' bg='dark' expand='md' >
                    <Container>
                        <Navbar.Brand href='#'>
                            <img 
                            src='favicon.ico' 
                                height='30'
                                width='30'
                                className='align-top'
                            />
                            &nbsp;
                            My Website
                        </Navbar.Brand>
                        <Navbar.Toggle arid-controls='my-nav' />
                        <Navbar.Collapse id='my-nav'>
                        <Nav className='me-auto fw-bold'>
                            <Nav.Link href='#'>Home</Nav.Link>                           
                            <NavDropdown title='Services' id='my-nav'>
                            <NavDropdown.Header>Heading 1</NavDropdown.Header>    
                                <NavDropdown.Item href='#'>Service 1 </NavDropdown.Item>
                                <NavDropdown.Item href='#'>Service 2 </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Header>Heading 2</NavDropdown.Header>
                                <NavDropdown.Item href='#'>Service 3 </NavDropdown.Item>
                          
                            </NavDropdown>
                            <Nav.Link href='#'>About</Nav.Link>
                            <Nav.Link href='#'>Contact</Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            Sign In Here <a href='#'>Login</a>
                        </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>
        </Row>
        <Row>
            <Col>
                <h2>This is a random text This is a random text
                This is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random text
                This is a random textThis is a random text
                This is a random textThis is a random textThis is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random textThis is a random textThis is a random textThis is a random text
                This is a random text
                This is a random text
                This is a random text
                This is a random text
                This is a random text
                This is a random text
                This is a random text
                This is a random text
                This is a random text
                This is a random textThis is a random textThis is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random textThis is a random text
                This is a random textThis is a random textThis is a random textThis is a random textThis is a random textThis is a random text
                This is a random text
                This is a random text
                This is a random text
                This is a random text
                This is a random text
                This is a random text
                This is a random text
                This is a random text
                This is a random text
                </h2>
            </Col>
        </Row>
    </Container>
   </>
  )
}

export default MyNavbar
