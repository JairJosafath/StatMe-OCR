import Navbar from "rsuite/Navbar";
import Nav from "rsuite/Nav";
import Dropdown from "rsuite/Dropdown";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../../Logo";
import { FlexboxGrid } from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";

const NavBar = () => {
  return (
    <>
      <Navbar appearance="inverse">
        <Navbar.Brand href="/">
          <FlexboxGrid>
            <FlexboxGridItem>StatMe beta</FlexboxGridItem>
            <FlexboxGridItem>{/* <Logo w={40} h={40} /> */}</FlexboxGridItem>
          </FlexboxGrid>
        </Navbar.Brand>
        <Nav>
          <Nav.Item icon={<AiFillHome />} href="/">
            Home
          </Nav.Item>
          {/* <Nav.Item href="news">News</Nav.Item> */}
          <Nav.Item href="/about">About</Nav.Item>
        </Nav>
        {/* <Nav pullRight>
          <Dropdown title={user.username} icon={<BsFillPersonFill />}>
            {/* <Dropdown.Item as={"a"} href="subscription">
              Subscription
            </Dropdown.Item> */}
        {/* <Dropdown.Item as={"a"} href="/profile">
              Account
            </Dropdown.Item>
            <Dropdown.Item onClick={signOut}>Log Out</Dropdown.Item>
          </Dropdown> */}
        {/* </Nav> */}
      </Navbar>
    </>
  );
};

export default NavBar;
