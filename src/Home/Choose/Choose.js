import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

import './Choose.css'

const ChooseData = [
    {
        id: 1,
        title: 'Perfect Information',
        dis: 'Perfect information provide this website.'
    },
    {
        id: 2,
        title: 'Download Question',
        dis: 'We provide all semester question and search the course code.'
    },
    {
        id: 3,
        title: 'Online  Books',
        dis: 'Students can buy thier selected books for them in online.'
    },
    {

        id: 4,
        title: 'Download Lab',
        dis: 'We provide all semester Syllbus and search the course code.'
    },
    {
        id: 5,
        title: 'Download Notes',
        dis: 'Students can find their important notes here and can download the PDF.'
    },
    {
        id: 6,
        title: 'Download Syllbus',
        dis: 'We provide all semester Syllbus and search the course code..'
    },
]
const Choose = () => {
    return (
       <Container>
         <Box sx={{ padding: '100px 0' }}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
                <Typography variant='h6'
                    sx={{ color: '#46AADC', pb: 2, fontFamily: 'Georgia', fontStyle: 'italic' }}
                >Read on to understand our differene</Typography>
                <Typography variant='h4'
                    sx={{ fontWeight: 'bold' ,color:"white"}}
                >Why Choose Education Desk</Typography>

            </Box>

            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {ChooseData.map((data, index) => (
                            <Grid item xs={12} sm={4} md={4} key={index}
                                sx={{ height: '200px' }} className={
                                    `${data.id === 1 || data.id === 3 || data.id === 5 ? "Why-ChooseUs-bg" : ""}`}

                            >
                                <Box
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    sx={{ display: 'flex' }}>
                                    <Box>
                                        <Typography variant='h4'
                                            sx={{ color: 'rgb(70, 170, 220)', fontWeight: 'bold' }}
                                        >
                                            
                                        </Typography>
                                    </Box>
                                    <Box style={{textAlign:"left"}}>
                                        <Typography variant='h5' sx={{ color: '#46AADC', pb: 2, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: '600', textAlign: 'left', margin: '5px',fontSize:"20px" }}>
                                          <ul><li>  {data.title}</li></ul>

                                        </Typography>
                                        <Typography variant='body' style={{color:"#46AADC", fontWeight:"600",textAlign:"left"}}>
                                       <ul>     {data.dis}</ul>



                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
       </Container>
    );
};

export default Choose;