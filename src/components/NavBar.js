import React , {Component} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export class NavBar extends Component{

    render(){
        return(
            <div>
     <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="/">NewsAppy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link active" aria-current="page" href="/">General</Nav.Link>
            <Nav.Link className="nav-link "  href="/business">Business</Nav.Link>
            <Nav.Link className="nav-link "  href="/entertainment">Entertainment</Nav.Link>
            <Nav.Link className="nav-link "  href="/health">Health</Nav.Link>
            <Nav.Link className="nav-link "  href="/science">Science</Nav.Link>
            <Nav.Link className="nav-link "  href="/sports">Sports</Nav.Link>
            <Nav.Link className="nav-link "  href="/technology">technology</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </div>

            
        )
    }
}

export default NavBar;