import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './UserReview.css'
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";


const UserReview = () => {
    const { user } = useAuth()

    //react hook form
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire("Review Added Successfully !");
                    reset();
                }
            });
    };

    return (
        <>
            <Container>
                <Row>
                    <div className="col-12 col-lg-6 mx-auto review-part">
                        <div className="form-container py-5" style={{background:"#182533",borderRadius:"20px"}}>
                            <Form
                                onSubmit={handleSubmit(onSubmit)}
                                className="shadow-lg px-2 px-md-5 py-3 text-cyan"
                            >
                                <h2 className=" text-center mb-2 abril-font text-white">
                                    Give Us An Honest Review, Please !
                                </h2>
                                <p className="text-cyan text-center mb-5 text-white">
                                    Your review helps us to improve our operating system and
                                    provide you better services.
                                </p>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label className="text-white fw-bold">Your Name</Form.Label>
                                        <Form.Control
                                              style={{fontWeight:"600",color:" #0E1621"}}
                                            value={user?.displayName}
                                            className="text-secondary fw-semi-bold"
                                            readOnly
                                            {...register("name", { required: true })}
                                            {...(errors.name && <span>Name is required</span>)}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label className="text-white fw-bold">Email</Form.Label>
                                        <Form.Control
                                           style={{fontWeight:"600",color:" #0E1621"}}
                                            type="email"
                                            value={user?.email}
                                            className="text-secondary fw-semi-bold"
                                            readOnly
                                            {...register("email", { required: true })}
                                            {...(errors.email && <span>Email is required</span>)}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridImage">
                                        <Form.Label className="text-white fw-bold">image</Form.Label>
                                        <input
                                           style={{fontWeight:"600",color:" #0E1621"}}
            {...register("image", { required: true })}
                placeholder="Image Link"
                defaultValue={user.photoURL}
                className="p-2 m-2  input-field"
              />
                                    </Form.Group>
                                   
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        className="mb-3 "
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label className="text-white fw-bold">Comment</Form.Label>
                                        <Form.Control
                                           style={{fontWeight:"600",color:" #0E1621"}}
                                            className="shadow-none"
                                            as="textarea"
                                            rows={1}
                                            placeholder="Write something here..."
                                            {...register("comment", { required: true })}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridRating">
                                        <Form.Label className="text-white fw-bold">
                                            Give Us A Rating (1 is the wrost , 5 is the best)
                                        </Form.Label>
                                        <select
                                           style={{fontWeight:"600",color:" #0E1621"}}
                                            required
                                            className="form-control shadow-none"
                                            {...register("rating")}
                                        >
                                            <option>Select Rating</option>
                                            <option value="1">1</option>
                                            <option value="1.5">1.5</option>
                                            <option value="2">2</option>
                                            <option value="2.5">2.5</option>
                                            <option value="3">3</option>
                                            <option value="3.5">3.5</option>
                                            <option value="4">4</option>
                                            <option value="4.5">4.5</option>
                                            <option value="5">5</option>
                                        </select>
                                    </Form.Group>
                                </Row>

                                <div className="text-center">
                                    <Button
                                        type="submit"
                                        className="px-4 py-2 fw-bold review-button shadow-none"
                                    >
                                        <i className="fas fa-clipboard-check text-white me-2"></i>
                                        Review Us
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default UserReview;
