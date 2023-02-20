import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';
// import useFirebase from '../../../hooks/useFirebase';
import './Dashboard.css';
import { FaThLarge, FaUser, FaBookmark, FaCommentDots, FaSignOutAlt, FaTasks, FaUserShield, FaSchool } from 'react-icons/fa'
import useAuth from '../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import HomeIcon from '@mui/icons-material/Home';

const Dashboard = () => {
    const { admin, userLogOut } = useAuth()
    return (
        <div  className='dashboard' style={{background:"#0E1621"}}>
            <Header></Header>
          
            <Row>
                <Col md={3}>
                    <div className="dashboard-menu   px-5 py-4 "style={{background:"#182533"}}>
                        <div className="logo mb-4 ">
                            <h4 style={{textAlign:"left"}}><span style={{color:"#CCCCCC"}}>Education</span> <span style={{color:"white"}}> Desk</span></h4>
                        </div>
                        <ul className=''>
                            <li className=''>
                                <NavLink className="des" to={'/'} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><HomeIcon className='me-1' /> Home</NavLink>
                            </li>
                            <li className=''>
                                <NavLink className="des" to={`welcome`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaThLarge className='me-1' /> Dashboard</NavLink>
                            </li>
                           
                            <li>
                                  <NavLink className="des" to={`userProfile`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaUser style={{textAlign:"left"}} className='me-1' /> My Profile</NavLink>
                              </li>


                            {
                                admin &&
                               <div>
                                 
                                <li>
                                <NavLink className="des" to={`manageQuestion`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> Pending Question</NavLink>
                            </li>
                                <li>
                                <NavLink className="des" to={`add`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> Add Question</NavLink>
                            </li>
                                <li>
                                <NavLink className="des" to={`addBook`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> Add Book</NavLink>
                            </li>
                                <li>
                                <NavLink className="des" to={`adminaddSyllbus`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> Add Syllbus</NavLink>
                            </li>
                                <li>
                                <NavLink className="des" to={`manageBook`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> Pending Book</NavLink>
                            </li>
                                <li>
                                <NavLink className="des" to={`manageSyllbus`} style={({ isActive }) => ({
                                    color: isActive ? "#CCCCCC" : "#CCCCCC",
                                })}><FaBookmark className='me-1' /> Pending Syllbus</NavLink>
                            </li>
                               </div>
                            }


                         {
                            !admin && 
                           <div style={{textAlign:"left"}}>

    
                            
                              <li>
                                  <NavLink className="des" to={`useraddQuestion`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaBookmark className='me-1' /> Add Questions</NavLink>
                              </li>
                              {/* <li>
                                  <NavLink className="des" to={`my-labs`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaBookmark className='me-1' /> Add Labs</NavLink>
                              </li> */}
                              <li>
                                  <NavLink className="des" to={`userBook`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaCommentDots className='me-1' /> Add Books</NavLink>
                              </li>
                              <li>
                                  <NavLink className="des" to={`userDisplaySyllbus`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaSchool className='me-1' /> Add Syllabus</NavLink>
                              </li>
                              <li>
                                  <NavLink className="des " to={`review`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> UserReview</NavLink>
                              </li>

                           </div>
                           
                       
                            
                            
                        }

                                <li className=''>
                                  <NavLink className="des" to={'/'} style={({ isActive }) => ({
                                      color: isActive ? "white" : "white",
                                  })}><li onClick={userLogOut} className='dashboard-logOut'>
                                  <FaSignOutAlt className='me-1' /> Log Out
                              </li></NavLink>
                              </li>

                           

                           
                          
                           {/* <NavLink className="des" to={'/'}><li onClick={userLogOut} className='dashboard-logOut'>
                                <FaSignOutAlt className='me-1' /> Log in
                            </li></NavLink> */}
                           
                            
                            

                            {/* <li>
                                <NavLink to={`pending-questions`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaCommentDots className='me-1' /> Pending Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to={`add-depertments`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaSchool className='me-1' /> Add Depertment</NavLink>
                            </li> */}

                            {/* {admin && <div> */}
                            {/* <li>
                                <NavLink to={`manage-questions`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaTasks className='me-1' /> Manage Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to={`make-admin`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaUserShield /> Make Admin</NavLink>
                            </li> */}
                            {/* </div>} */}

                           
                        </ul>
                    </div>
                </Col>
                <Col md={9} className='py-5' style={{background:"#0E1621"}}>
                    <Outlet />
                </Col>
            </Row>
            <Footer></Footer>
        </div >
    );
};

export default Dashboard;