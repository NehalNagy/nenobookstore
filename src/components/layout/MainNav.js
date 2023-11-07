import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";
function MainNav() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={classes.menuItems + " m-auto"}>
            <NavDropdown
              title="Shopping"
              id="collapsible-nav-dropdown"
              className="pe-2"
            >
              <NavDropdown.Item href="#action/3.1">Paper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gifts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Engineering
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Art</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/newArrivals" className="pe-2">
              New-Arrivals
            </Nav.Link>
            <NavDropdown
              title="Gift Festival Season"
              id="collapsible-nav-dropdown"
              className="pe-2"
            >
              <NavDropdown.Item href="#action/3.1">Paper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gifts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Engineering
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Art</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Back to School"
              id="collapsible-nav-dropdown"
              className="pe-2"
            >
              <NavDropdown.Item href="#action/3.1">Paper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gifts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Engineering
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Art</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Beach Tools"
              id="collapsible-nav-dropdown"
              className="pe-2"
            >
              <NavDropdown.Item href="#action/3.1">Paper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gifts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Engineering
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Art</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#pricing" className="pe-2">
              Promotions
            </Nav.Link>
            <NavDropdown
              title="Brands"
              id="collapsible-nav-dropdown"
              className="pe-2"
            >
              <NavDropdown.Item href="#action/3.1">Paper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gifts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Engineering
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Art</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MainNav;
