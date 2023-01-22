import React, { useContext, useState } from 'react'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { store } from '../ContextProvider'

const Header = () => {
// const[updatetime,setUpdateTime] = useState("")
// const time = ()=>{
//   const date = new Date().toLocaleTimeString();
//   return date
// }
// setInterval(()=>{
//   setUpdateTime(time())
// },0)
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
    <Navbar expand="lg" className='nav-area'>
      <Container className="position">
        <Link to="/" className='navLink'><Navbar.Brand><span className='icon'>Shahariar</span><span className='icon nav-icon'>Rahaman</span></Navbar.Brand></Link>
          {/* <span className='time'>{updatetime}</span> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto d-flex align-items-center">
            <Nav.Link ><Link className='navLink' to="/"><span className='navButton'>Home</span></Link></Nav.Link>
            <Nav.Link ><Link className='navLink' to="about"><span className='navButton'>About</span></Link></Nav.Link>
            <Nav.Link ><Link className='navLink' to="about"><span className='navButton'>Resume</span></Link></Nav.Link>
            <Nav.Link><Link className='navLink' to="/blog"><span className='navButton'>My Blog</span></Link></Nav.Link>
          </Nav>
          {
            state.userInfo?
                <NavDropdown title={state.userInfo.name} id="nav-dropdown">
              {
                  state.userInfo.is_admin?
                  <>
                  <NavDropdown.Item ><Link className='navLink dropdownStyle' to="/blogEdit">Blog Post</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link className='navLink dropdownStyle' to="/figmaEdit">Figma Post</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link className='navLink dropdownStyle' to="/reactEdit">React Post</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link className='navLink dropdownStyle' to="/basicEdit">Basic Post</Link></NavDropdown.Item>
                  </>
                  :
                  <Link className='navLink' to="/blogEdit"><NavDropdown.Item href="#action/3.1">Blog Post</NavDropdown.Item></Link>

              }
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
            </NavDropdown>
            :
            <Link className='navLink' to="/registration"><span className='navButton'>SignIn/Login</span></Link>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header