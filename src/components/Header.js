import React, { useContext } from 'react'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { store } from '../ContextProvider'

const Header = () => {
  const navigator = useNavigate()
  const {state,dispatch}=useContext(store)
    const styles={
        border:'1px solid red',
        textAlign: 'center',
    }
    let handleLogout = () => {
      dispatch({ type: "user_logout" });
      localStorage.removeItem("userInfo");
      navigator("/");
    };
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto d-flex align-items-center">
            <Nav.Link ><Link className='navLink' to="/">Home</Link></Nav.Link>
            <Link className='navLink' to="about"><Nav.Link >About</Nav.Link></Link>
            <Nav.Link><Link className='navLink' to="/blog">My Blog</Link></Nav.Link>
          </Nav>
          {
            state.userInfo?
            <NavDropdown title={state.userInfo.name} id="basic-nav-dropdown">
              {
                  state.userInfo.is_admin?
                  <>
                  <Link className='navLink' to="/blogEdit"><NavDropdown.Item href="#action/3.1">Blog Post</NavDropdown.Item></Link>
                  <Link className='navLink' to="/figmaEdit"><NavDropdown.Item href="#action/3.2">Figma Post</NavDropdown.Item></Link>
                  <Link className='navLink' to="/reactEdit"><NavDropdown.Item href="#action/3.3">React Post</NavDropdown.Item></Link>
                  <Link className='navLink' to="/basicEdit"><NavDropdown.Item href="#action/3.3">Basic Post</NavDropdown.Item></Link>
                  </>
                  :
                  <Link className='navLink' to="/blogEdit"><NavDropdown.Item href="#action/3.1">Blog Post</NavDropdown.Item></Link>

              }
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>Log Out</NavDropdown.Item>
            </NavDropdown>
            :
            <Link className='navLink' to="/registration">SignIn/Login</Link>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header