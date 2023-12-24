import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Logo.png";
import Button from "./Button";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="navBar p-2">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-2">
              <Nav.Link href="#home" className="text-black navlink">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-black navlink">
                Features
              </Nav.Link>
              <Nav.Link href="#home" className="text-black navlink">
                How it works
              </Nav.Link>
              <Nav.Link href="#link" className="text-black navlink">
                Contacts
              </Nav.Link>
              <div className="ms-10 flex items-center gap-4">
                <NavLink to="signIn">
                  <Button
                    text="Sign In"
                    styles="text-black border-1 border-[#004225] px-8 py-2 rounded-lg"
                  />
                </NavLink>
                <NavLink to="signUp">
                  <Button
                    text="Sign Up"
                    styles="text-white px-8 py-2 rounded-lg bg-[#004225]"
                  />
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
