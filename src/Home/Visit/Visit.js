import React from 'react';
import { Typography, Box } from '@mui/material';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import Marquee from "react-fast-marquee";

const Visit = () => {
    return (
        <Box sx={{ bgcolor: '' }}>
            <Marquee direction='right'>
                <CoronavirusIcon sx={{ color: 'red' }} />
                <Typography> <a style={{ textDecoration: "none", color: 'white', fontWeight: 'bold' }} href="https://docs.google.com/forms/d/e/1FAIpQLSfvFQyfZbgWwUW8GE8tM1vCa3-44nj1GlDtVRmoM1aaWlediA/viewform"
                >Thank You Visit our Website</a></Typography>
                <CoronavirusIcon sx={{ color: 'red' }} />
            </Marquee>


        </Box>
    );
};

export default Visit;