import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/Logo_S_A.png";
import classes from "./Menu.module.css";

function Menu() {
  return (
    <header>
      <div className={classes.headerTop + " container-fluid "}>
        <div className={classes.headerRow + " row"}>
          <div className={classes.headerBranches + " col-md-4"}>
            <ul className="list-unstyled list-group list-group-horizontal">
              <li>
                <a href="#">lang</a>
              </li>
              <li>
                <a href="#">branches</a>
              </li>
            </ul>
          </div>
          <div className={classes.logo + " col-md-4"}>
            <img src={logo} alt="website logo" />
          </div>
          <div className={classes.headerControls + " col-md-4"}>
            <ul className="list-unstyled list-group list-group-horizontal">
              <li>
                <a href="#">Create Account</a>
              </li>
              <li>
                <a href="#">My Cart</a>
              </li>
              <li>
                <a href="#">My Wishlist</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Menu;
