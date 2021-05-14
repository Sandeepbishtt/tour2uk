import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="mx-4">
          <h2>tour2uk</h2>
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Header;
