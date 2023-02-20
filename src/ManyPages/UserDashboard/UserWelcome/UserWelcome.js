import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
const UserWelcome = () => {
    const {user}= useAuth()
    return (
        <div className='dashboard-welcome'>
        <Row>
            <Col md={6}>
                <h2 style={{color:"white"}}>Hello, <span style={{color:"#46AADC"}} className='fs-1'>{user.displayName}</span></h2>
                <p style={{color:"white"}} className='fs-4'>Welcome to <span style={{color:"#46AADC",fontWeight:"600"}}>Education</span> Desk</p>
            </Col>
            <Col md={6}>
                <div className="dashboard-image">
                    <img src={user.displayName ? user.photoURL : 'https://i.ibb.co/Xsnkx3L/user.png'} alt="user" />
                </div>
            </Col>
        </Row>
    </div>
    );
};

export default UserWelcome;