import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function MainNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Shopping" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Paper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Gifts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Engineering</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Art
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">New-Arrivals</Nav.Link>
            <NavDropdown title="Gift Festival Season" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Paper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Gifts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Engineering</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Art
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Back to School" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Paper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Gifts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Engineering</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Art
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Beach Tools" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Paper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Gifts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Engineering</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Art
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#pricing">Promotions</Nav.Link>
            <NavDropdown title="Brands" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Paper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Gifts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Engineering</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               Art
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MainNav;
