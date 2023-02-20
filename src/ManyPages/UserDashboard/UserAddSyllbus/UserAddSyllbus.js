import React, { useEffect, useState } from 'react';

// import './UserAddQuestion.css'
import { Link } from 'react-router-dom';


import useAuth from '../../hooks/useAuth';
import UserUploadSyllbus from './UserUploadSyllbus';



const UserAddSyllbus = () => {

    const { user } = useAuth()

    const [syllbus, setsyllbus] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/postSyllbus/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setsyllbus(data)
            });
    }, [user?.email]);


    const handleDelete=(id)=>{
        const proceed=window.confirm('are you sure, you want to delete');
        if(proceed){
            fetch(`http://localhost:5000/deleteSyllbus/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('delete');
                    const remaining=syllbus.filter(product=>product._id !==id)
                    setsyllbus(remaining)
                    console.log(data)
                }
            })

        }

    }

    return (
        <div className='my-syllbus'>
            <div className='d-flex justify-content-between align-items-center my-question-header'>
                <h2 style={{fontWeight:"700",color:"white"}}>My <span className='my-question'>Syllabus</span></h2>
                <Link to={'/dashboard/useraddSyllbus'}>
                    <button className='btn-style'>Upload Your Syllbus</button>
                </Link>
            </div>
            <table className="table " style={{ width: "100%" }}>
                <thead  >
                    <tr className="table-design mb-3 p-2" style={{ question: "1px solid red" ,textAlign:"left"}}>

                        {/* <th >Number</th> */}
                        <th >BookName</th>
                    
                        <th >Code</th>
                        {/* <th >Author</th> */}

                        <th >question Preview</th>

                        <th >Status</th>
                        <th >Request To Delete</th>

                    </tr>
                </thead>
                {syllbus?.map((question, index) => (
                    <tbody key={question._id}>
                     <UserUploadSyllbus
                         index={index}
                         handleDeletes={handleDelete}
                        data={question}></UserUploadSyllbus>
                    </tbody>

                ))}
            </table>
        </div>
    );

    
    
};



export default UserAddSyllbus;