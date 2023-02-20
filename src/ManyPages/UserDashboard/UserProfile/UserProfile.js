import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';
import './UserProfile.css'

const UserProfile = () => {
    const { user } = useAuth()
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data)
                console.log(data)
            })
    }, [user.email])
    return (
        <div className='user-profile ' style={{background:"#182533",borderRadius:"20px", margin:"9px"}}>
            <div className="profile-title d-flex justify-content-between align-items-center">
                <h3 style={{color:"white"}}>My Profile</h3>
                <Link style={{textDecoration:"none"}} to={'/dashboard/userUpdate'}><span> <FaEdit className='edit-icon' /> Edit </span></Link>
            </div>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="user-verify py-4">
                            <img src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Xsnkx3L/user.png'} alt="" />
                            <p style={{color:"white",textDecoration:"left"}}>{userInfo?.department ? "Profile Completed (100%)" : "Profile Completed (40%)"}</p>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="profile-information py-4" style={{textAlign:"left",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <div className="single-box" >
                                <h6 className='text-white mt-3'>Full Name : {user.displayName}</h6>

                                <h6 className='text-white mt-2' style={{textAlign:""}}>      Email : {user.email}</h6>

                                <h6 className='text-white mt-2'>DepartMent : {userInfo?.department ? userInfo?.department : "null"}</h6>

                                <p className='text-capitalize text-white mt-2'>Batch : {userInfo?.batch ? userInfo?.batch : "null"}</p>
                               
                            </div>
                         
                          
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserProfile;