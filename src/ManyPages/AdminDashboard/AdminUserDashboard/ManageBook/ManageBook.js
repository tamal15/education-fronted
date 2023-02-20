import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import BookTable from './BookTable';

// import ManageTable from './ManageTable';
// import useFirebase from '../../../hooks/useFirebase';

const ManageBook = () => {

    

    const [book, setBook] = useState([])
    const { user } = useAuth()
    console.log(book)

    const [status, setStatus] = useState('')


    useEffect(() => {
        fetch(`http://localhost:5000/postBook`)
            .then((res) => res.json())
            .then((data) => setBook(data));
            // console.log(data)
    }, [user?.email]);
    // console.log(data)



    // delete 

    const handleDelete=(id)=>{
        const proceed=window.confirm('are you sure, you want to delete');
        if(proceed){
            fetch(`http://localhost:5000/deleteBook/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('delete');
                    const remaining=book.filter(product=>product._id !==id)
                    setBook(remaining)
                    console.log(data)
                }
            })

        }

    }

// let value=question.drivelink;

   

    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        setStatus(statusData)
    }


    const managePost = book?.filter(question => question?.status === 'Pending');
     console.log(managePost)
    return (
        < div className="container all-question-container" >
            <div className="text-center pb-3">
                <h1 className="mb-2 text-center pt-2 text-white">Total Questions <span style={{ color: "#1289A7" }}>{book.length}</span>  </h1>
            </div>

            <table className="table table-gray" style={{ width: "100%" }}>
                <thead  >
                    <tr className=" text-white mb-3 p-2 mb-3" style={{ question: "1px solid red", background:"#182533" }}>

                        {/* <th >Number</th> */}
                        <th >BookName</th>
                        <th >Uploader</th>
                        <th >code</th>

                        <th >question Preview</th>
                        <th >Status</th>
                        <th >Update</th>
                        <th >delete</th>
                       
                    </tr>
                </thead>
                {managePost?.map((question, index) => (
                    <tbody key={question._id}>
                      <BookTable
                       deletes={handleDelete}
                        data={question}></BookTable>
                    </tbody>

                ))}
            </table>
        </div >
    );
};

export default ManageBook;