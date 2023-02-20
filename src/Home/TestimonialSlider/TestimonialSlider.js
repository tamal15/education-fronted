// import React from 'react';
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Avatar, Box, Container, Rating, Typography } from "@mui/material";
import "./TestimonialSlider.css";

// import required modules
import { FreeMode, Pagination,Autoplay } from "swiper";
import useAuth from "../../ManyPages/hooks/useAuth";

const TestimonialSlider = () => {
 const {user}=useAuth()
  const [review,setReview]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/review')
    .then(res=>res.json())
    .then(data=>setReview(data))
  },[])
  return (
    <div className="container">
     <div className="row">
      <div className="">
      <Swiper
         className="mySwiper"
         slidesPerView={3}
         spaceBetween={30}
         freeMode={true}
         // pagination={{
         //   clickable: true,
         // }}
         autoplay={{
           delay: 2000
         }}
        
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            }
          }}
       
         
         
        
         modules={[FreeMode, Pagination,Autoplay]}
        
       
       
       >



  

  
        
      
 
         
 
         
 
 
 
         <>
          {
           review.map((reviews)=>(
             <div>
             {/* <h1>{reviews._id}</h1> */}
             <SwiperSlide style={{width:"300px",  background:" #182533",padding:"12px",borderRadius:"12px"}}>  
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',width:"300px" }}>
 
               <Box sx={{ display: "flex", justifyContent: "center" }}>
                 <img style={{borderRadius:"50%"}}
                  src={reviews.image}
                   sx={{
                     width: 30,
                     borderRadius:"100%",
                     height: 30,
                     padding:"2px",
                     border: "1px solid lightgray",
                     marginBottom:"10px",
                     
                     marginTop:"10px"
                   }}
                 />
               </Box>
 
              <Box style={{padding:"10px",textAlign:"left"}}>
            {/* <h6 style={{fontSize:"15px"}}>  {reviews.name} </h6> */}
            {reviews.name}
             
             {/* <br></br> */}
        
          <p style={{fontSize:"12px",textAlign:"left"}}>{reviews.comment}</p>
            <p>
            <Rating
            
            name="half-rating-read"
            
            defaultValue={reviews.rating}
            precision={0.5}
            readOnly
          />
            </p>
 
              </Box>
               </div>
           
         
                
             </SwiperSlide>
             {/* <SwiperSlide>{reviews.rating}</SwiperSlide> */}
             </div>
           ))
          }
         </>
      
       </Swiper>
      </div>

     </div>
      
    </div>
  );
};

export default TestimonialSlider;