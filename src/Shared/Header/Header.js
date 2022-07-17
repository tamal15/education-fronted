import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../ManyPages/hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';


import './Header.css'


const Header = () => {
    const { userLogOut, user, toggle, setToggle, handleClick, admin } = useAuth()

    console.log(user.photoURL)

    return (

        <div className='header-area'>
            <Navbar expand="lg">
                <Container>
                {/* onClick={handleClick} */}
                    <NavLink  to="/" className='logo'><span>Education</span></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    {/* onClick={handleClick} */}
                        <Nav  className="ms-auto menu d-flex align-items-center">

                            <Nav.Link as={NavLink} to="/allQuestions" className='menu-item'>Questions</Nav.Link>
                            <Nav.Link as={NavLink} to="/allSyllabus" className='menu-item'>Syllabus</Nav.Link>
                            <Nav.Link as={NavLink} to="/allBlogs" className='menu-item'>Blogs</Nav.Link>
                            <Nav.Link as={NavLink} to="/allNotes" className='menu-item'>Notes</Nav.Link>
                            <Nav.Link as={NavLink} to="/allLabs" className='menu-item'>Labs</Nav.Link>
                            {/* <Nav.Link as={NavLink} to="/forum" className='menu-item'>Forums</Nav.Link> */}
                            <Nav.Link as={NavLink} to="/allBooks" className='menu-item'>All BOOKS</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact" className='menu-item'>Contact</Nav.Link>
                           
                            {admin ? <Nav.Link as={NavLink} to="/admin-dashboard/welcome" className='menu-item'>Admin Dashboard</Nav.Link> : ""}
                        </Nav>
                         {!user.email ? <Nav.Link as={NavLink} to="/login" className='menu-item'>
                            Login
                        </Nav.Link>
                            :

                            <>
                              
                                <img onClick={() => setToggle(!toggle)} src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Xsnkx3L/user.png'} alt="user" className="user-image p-1" />
                            </>
                        } 


                        {user.displayName && <div className={toggle ? "toggle-menu shadow-lg active" : "toggle-menu mt-5"}>
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