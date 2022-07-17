import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
const UserWelcome = () => {
    const {user}= useAuth()
    return (
        <div className='dashboard-welcome'>
        <Row>
            <Col md={6}>
                <h2>Hello, <span className='fs-1'>{user.displayName}</span></h2>
                <p className='fs-4'>Welcome to Education</p>
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