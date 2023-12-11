import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "./Button";
const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="navBar p-2">
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="font-[600] text-center">
              {" "}
              <span className="text-white">Tu</span>
              <span className="text-[#004225]">Kay</span>
            </h1>
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
                <Button
                  text="Sign In"
                  styles="text-black border-1 border-[#004225] px-8 py-2 rounded-lg"
                />
                <Button
                  text="Sign Up"
                  styles="text-white px-8 py-2 rounded-lg bg-[#004225]"
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
