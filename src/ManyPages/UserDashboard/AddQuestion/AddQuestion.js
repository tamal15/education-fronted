import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';
// import Swal from 'sweetalert/sweetalert';

const AddQuestion = () => {
    const {admin}=useAuth()
    // const { user } = useFirebase()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // data.userName = user.displayName
        // data.email = user.email
        // data.status = 'Pending'
        data.role=admin;

        fetch("http://localhost:5000/postQuestion", {
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
                // Swal.fire(
                //     'Question Posted Successfully.',
                // )
                reset()
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
                                className='w-75 mb-3'  {...register("subject", { required: true })} placeholder='Enter Course Title' /> <br />
                                <input
                                  style={{fontWeight:"500"}}
                                className='w-75 mb-3'  {...register("code", { required: true })} placeholder='example: cse234-mid/final-2018' /> <br />

                                <select {...register("department")}>
                                <option value="">Department</option>
                                    <option value="ece">ECE</option>
                                    <option value="cse">CSE</option>
                                    <option value="bba">BBA</option>
                                    <option value="diploma">diploma</option>
                                </select>
                                <br></br>
                                <br></br>

                                {/* <select {...register("type")}>
                                <option value="">Question Type</option>
                                    <option value="mid">Mid</option>
                                    <option value="final">Final</option>
                                 </select> */}

                                {/* <select {...register("year")}>
                                    <option value="">Select Year</option>
                                    <option value="2027">2027</option>
                                    <option value="2026">2026</option>
                                    <option value="2025">2025</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                </select> */}



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

export default AddQuestion;