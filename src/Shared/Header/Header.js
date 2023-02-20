import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../ManyPages/hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';


import './Header.css'


const Header = () => {
    const { userLogOut, user, toggle, setToggle, handleClick, admin ,ad} = useAuth()

    console.log(user.photoURL)

    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (

        <div className='header-area'>
            <Navbar expand="lg"  bg="red"  className={(isSticky) ? "navbar  navbar-expand-lg  bg-dark texts fixed-top" : "navbar  navbar-expand-lg "}>
                <Container>
                {/* onClick={handleClick} */}
                    <NavLink  to="/" className='logo'><span>Edu Desk</span></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    {/* onClick={handleClick} */}
                        <Nav  className="ms-auto menu d-flex align-items-center">

                            <Nav.Link as={NavLink} to="/question" className='menu-item'>Questions</Nav.Link>
                            <Nav.Link as={NavLink} to="/allSyllbus" className='menu-item'>Syllabus</Nav.Link>
                            {/* <Nav.Link as={NavLink} to="/allBlogs" className='menu-item'>Blogs</Nav.Link> */}
                            <Nav.Link as={NavLink} to="/allSyllbus" className='menu-item'>Notes</Nav.Link>
                            <Nav.Link as={NavLink} to="/allbooks" className='menu-item'>Labs</Nav.Link>
                            {/* <Nav.Link as={NavLink} to="/forum" className='menu-item'>Forums</Nav.Link> */}
                            <Nav.Link as={NavLink} to="/allbooks" className='menu-item'>All BOOKS</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className='menu-item'>Contact</Nav.Link>
                           
                            {ad? <Nav.Link as={NavLink} to="/admin-dashboard/welcome" className='menu-item'>Admin Dashboard</Nav.Link> : ""}
                        </Nav>
                         {!user.email ? <Nav.Link as={NavLink} to="/login" className='menu-item'>
                            Login
                        </Nav.Link>
                            :

                            <>
                              
                                <img onClick={() => setToggle(!toggle)} src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Xsnkx3L/user.png'} alt="user" className="user-image " />
                                
                            </>
                        } 


                        {user.email && <div className={toggle ? "toggle-menu shadow-lg active" : "toggle-menu"}>
                        <Nav.Link as={NavLink} to="/dashboard/welcome" className='menu-item'>Dashboard</Nav.Link>
                            <Link style={{textDecoration:"none"}} to={'/'}><li onClick={userLogOut}>Log Out</li></Link>
                        </div>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; 