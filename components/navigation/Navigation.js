import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactStars from 'react-stars';

function Navigation({inputSearch, setInputSearch , inputStars , setInputStars}) {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">faj3a.tn</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">RO3b</Nav.Link>
            <Nav.Link href="#action2">laweg houni</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">chouf houni </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                film action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                film ro3b here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              chouf
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button onClick={setInputSearch(''),setInputStars(0)} >Reste </Button>
          <ReactStars
             count={5}
             half={false}
             size={24}
            color2={'#ffd700'}
              value={inputStars}
              onChange={(e)=>setInputStars(e)}
              />

            
            <Form.Control
              type="search"
              placeholder="Search movies ... "
              className="me-2"
              aria-label="Search"
              value={inputSearch} onChange={(e)=> setInputSearch(e.target.value)}

              

            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;