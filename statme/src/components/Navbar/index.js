import Navbar from "rsuite/Navbar";
import Nav from "rsuite/Nav";
import { AiFillHome } from "react-icons/ai";
import { FlexboxGrid } from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";

const NavBar = () => {
  return (
    <>
      <Navbar appearance="inverse">
        <Navbar.Brand href="/">
          <FlexboxGrid>
            <FlexboxGridItem>StatMe beta</FlexboxGridItem>
          </FlexboxGrid>
        </Navbar.Brand>
        <Nav>
          <Nav.Item icon={<AiFillHome />} href="/">
            Home
          </Nav.Item>
          <Nav.Item href="/about">About</Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
