import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';


// import useFirebase from '../../../hooks/useFirebase';
// import Swal from 'sweetalert/sweetalert';

const AdminPostBook = () => {
    const { admin } = useAuth()
    // const {admin}=useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // data.userName = user.displayName
        // data.email = user.email
        // data.status = 'Pending'
        data.role=admin;
     

        fetch("http://localhost:5000/postBook", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.insertedId){
                    alert('added successfully');
                    reset()
                }
                // console.log(result)
                // Swal.fire(
                //     'Question Posted Successfully.',
                // )
                // reset()
            });
    };
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center shadow" style={{background:"#182533",borderRadius:"20px"}}>
                            <h2 className='mb-5 text-white'>Add Your Question</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input
                                  style={{fontWeight:"500"}}
                                className='w-75 mb-3'  {...register("bookName", { required: true })} placeholder='Book Name' /> <br />

                                <input
                                  style={{fontWeight:"500"}}
                                className='w-75 mb-3'  {...register("authorName", { required: true })} placeholder='Author Name' /> <br />

                                <input
                                  style={{fontWeight:"500"}}
                                className='w-75 mb-3'  {...register("code", { required: true })} placeholder='example: cse234' /> <br />

                                

                                <input
                                  style={{fontWeight:"500"}}
                                className='w-75 mb-3' {...register("driveLink", { required: true })} placeholder='Question Link' /> <br />

                                <button className='submit-all' type='submit'>Submit</button>
                            </form>

                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    );
};

export default AdminPostBook;