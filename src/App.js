import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users'
import Contact from './components/Contact'
import Technologies from './components/Technologies'
import Html from './components/Html'
import Javascript from './components/Javascript'
import {Navbar,Nav,Container} from 'react-bootstrap'
import React ,{useState} from 'react';

function App() {



  return (
    <div className=" App">
      <Navbar bg="dark" expand="lg"  variant="dark" >
        <Container className='nav-heads'>
          <Navbar.Brand href="#">MyFoodBlog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/"  >Home</Nav.Link>
              <Nav.Link href="users"  >Users</Nav.Link>
              <Nav.Link href="technologies" >About</Nav.Link>
              <Nav.Link href="contact" >ContactUs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/technologies" element={<Technologies />} >
          <Route path="Html" element={<Html />} />
          <Route path="javascript" element={<Javascript />} />
        </Route>
      </Routes>

     
    </div>  

  )
}

export default App;
