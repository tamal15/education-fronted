
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../ManyPages/hooks/useAuth';



const Login = () => {

    const { loginWithGoogle, loginWithOwnEmailAndPass } = useAuth()

    //Location & navigate
    const location = useLocation()
    const navigate = useNavigate()

    //handle google login here
    const handleGoogleLogin = () => {
        loginWithGoogle(location, navigate);
    };



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data.email)
        loginWithOwnEmailAndPass(data.email, data.password, location, navigate)
    }
    return (
        <div className='py-5'>
            <Container>
                <Row>
                <div className='row'>
                    <div className='col-lg-4'>
                     <div className='images mt-5'>
                     <img height="300" width="300"src="https://i.ibb.co/2MrGp9J/1.webp"/>
                     </div>
                    </div>
                    <div className='col-lg-8'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center">
                            <h2 className='mb-5'>Login to Education</h2>
                            {/* onSubmit={handleSubmit(onSubmit)} */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className='w-75 mb-3'
                                    {...register("email", { required: true })}
                                    placeholder='Enter Email' />
                                <br />

                                <input
                                    className='w-75 mb-3'
                                    {...register("password", { required: true })} placeholder='Enter Password' />
                                <br />

                                <button type='submit'>Login</button>
                            </form>
                            <div className='login-meta mt-4'>
                                <p>New to Education <Link to={'/register'}><span className='login-links'>Create a free Account</span></Link></p>
                                <span style={{ cursor: "pointer" }} 
                                // onClick={handleGoogleLogin}
                                 className='fs-4'>Continue with <FcGoogle onClick={handleGoogleLogin} className='fs-2 google' /></span>
                            </div>
                        </div>
                    </Col>
                    </div>
                </div>
                </Row>
            </Container>
        </div>
    );
};

export default Login;