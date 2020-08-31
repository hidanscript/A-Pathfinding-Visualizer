import React from "react";
import { Navbar } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar expand="lg" variant="dark" bg="dark">
      <Navbar.Brand href="#">Pathfinding Visualizer</Navbar.Brand>
    </Navbar>
  );
}
