import React, { useEffect, useState } from 'react';

import './UserAddQuestion.css'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import UserUpload from './UserUpload';



const MyQuestions = () => {

    const { user } = useAuth()

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myQuestions/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setQuestions(data)
            });
    }, [user?.email]);


    const handleDelete=(id)=>{
        const proceed=window.confirm('are you sure, you want to delete');
        if(proceed){
            fetch(`http://localhost:5000/deleteQuestion/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('delete');
                    const remaining=questions.filter(product=>product._id !==id)
                    setQuestions(remaining)
                    console.log(data)
                }
            })

        }

    }

    return (
        <div className='my-questions'>
            <div className='d-flex justify-content-between align-items-center my-question-header'>
                <h2 className='text-white'>My <span className='my-question'>Question</span></h2>
                <Link to={'/dashboard/userQuestion'}>
                    <button className='btn-style'>Upload Your Questions</button>
                </Link>
            </div>
            <table className="table " style={{ width: "100%" }}>
                <thead  >
                    <tr className="table-design mb-3 p-2" style={{ question: "1px solid red" ,textAlign:"left"}}>

                        {/* <th >Number</th> */}
                        <th >subject</th>
                    
                        <th className=''>Code</th>
                        {/* <th >Year</th> */}

                        <th >question Preview</th>

                        <th >Status</th>
                        <th >Request To Delete</th>

                    </tr>
                </thead>
                {questions?.map((question, index) => (
                    <tbody key={question._id}>
                     <UserUpload
                         index={index}
                         handleDeletes={handleDelete}
                        data={question}></UserUpload>
                    </tbody>

                ))}
            </table>
        </div>
    );

    
    
};



export default MyQuestions;