import {  Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {

    return(
        <div>
            <Navbar variant="dark" bg="danger" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">MERN Blog</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <LinkContainer to="/home">
            <Nav.Link active>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tambah">
            <Nav.Link active>Tambah</Nav.Link>
        </LinkContainer>
    
      </Nav>
      <Form className="d-flex" style={{marginRight:"400px",width:"600px"}}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
         
        />
       
      </Form>
      <Nav>
      <LinkContainer to="/logout">
            <Nav.Link active>Logout</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navigation;