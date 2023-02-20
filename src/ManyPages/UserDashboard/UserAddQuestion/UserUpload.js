import React from 'react';


const UserUpload = (props) => {

    
    const { driveLink, code, subject, status, year, _id ,index} = props.data
    
    let googleId = driveLink?.slice(32, 65);
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`


   


   

    return (
       <>
           <tr role="row" style={{ question: "2px solid gray",textAlign:"left" }} >
                            {/* <th scope="row">{index + 1}</th> */}
                            <td style={{fontWeight:600, color:"white"}}>{subject}</td>
                            <td style={{fontWeight:600, color:"white"}}>{code}</td>
                            {/* <td>{year}</td> */}
                         

                            <td>   <button  className="btn-style download-btn " ><a style={{textDecoration:"none"}} href={viewUrl} className="">See Syllabus</a></button>
                            </td> 
                            <td style={{fontWeight:600,color:"white"}}>{status}</td>
                            <td> <button
                                className="btn-style download-btn"
                            onClick={() => props.handleDeletes(_id)}
                            >
                                Delete question
                            </button></td>
                        </tr>
       </>
    );
};

export default UserUpload;