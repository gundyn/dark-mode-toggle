import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Header = () => (
  <Navbar className="navbar" collapseOnSelect varient="dark" expand="md">
    <NavDropdown.Item>Search Bar</NavDropdown.Item>
    <NavDropdown.Item>Dark Mode</NavDropdown.Item>
  </Navbar>
)

export default Header