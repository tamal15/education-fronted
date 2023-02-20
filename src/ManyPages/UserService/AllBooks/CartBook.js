import React from 'react';

const CartBook = ({ data }) => {


    const { author, bookName, driveLink,authorName, code, year } = data

    let googleId = driveLink?.slice(32, 65);
    console.log(driveLink)

    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`
    return (
        <div className="col">
            <div className="card custom-cart h-100 shadow">
                <iframe title="question" src={viewUrl}
                    className="img-fluid rounded-start w-100 " style={{ height: "290px" }} allow="autoplay"></iframe>
                <div className="card-body" style={{background:"#182533",color:"white"}}>
                    <h5 className="card-title fs-3">{bookName}</h5>
                    <h5 className="card-title"><b>Author:</b> {authorName}</h5>
                    <h5 className="card-title"><b>Course Code:</b> {code}</h5>
                    {/* <h5 className="card-title"><b>Edition:</b> {edition}</h5>
                    <h5 className="card-text "><b>Year:</b> {year}</h5> */}
                    <div className="d-flex justify-content-between pt-3" >
                        <button  className="btn-style download-btn " ><a style={{textDecoration:"none"}} href={download} className="">Download</a></button>
                        <button  className="btn-style download-btn " ><a style={{textDecoration:"none"}} href={viewUrl} className="">See Book</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartBook;