import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
// import countbg from "../../assets/image/about.jpg";
// import countbg from "../../assets/image/gray_wave.svg";
import cloud from "../../assets/image/cloud.svg";
import useAuth from "../../ManyPages/hooks/useAuth";

const Facility = () => {

  const {booksCount,privateTeacherCount,schoolsCount} = useAuth();

  return (
    <Box
      sx={{
        // backgroundImage: `url(${countbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: '20px',
        py: 20,
      }}
    >
        <h2 style={{color:"white", marginBottom:"70px"}}>Find Our Achievements</h2>
      <Container >
        <Grid container spacing={2}>
          {/* box-1 */}
          <Grid item xs={12} sm={12} md={3}>
            <Box
              sx={{
                background: "#fff",
                w: "25%",
                maxWidth: "194px",
                minHeight: "170px",
                p: "25px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                mb: "30px",
                transform: "rotate(10deg)",
              }}
            >
              <Box style={{ position: "relative" }}>
                <img src={cloud} alt="" />
                <Typography
                  style={{ position: "absolute", top: "-15%", left: "20%" }}
                  sx={{ color: "#46AADC", fontSize: "60px", lineHeight: 2 }}
                  variant="h4"
                  gutterBottom
                  component="div"
                >
                  800
                </Typography>
              </Box>

              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "500",
                  mb: 0,
                  py: 3,
                }}
                variant="subtitle2"
                gutterBottom
                component="div"
              >
                Total Questions
              </Typography>
            </Box>
          </Grid>
          {/* box-2 */}
          <Grid item xs={12} sm={12} md={3}>
            <Box
              sx={{
                background: "#fff",
                w: "25%",
                maxWidth: "194px",
                minHeight: "170px",
                p: "25px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                mb: "30px",
                transform: "rotate(2deg)",
              }}
            >
              <Box style={{ position: "relative" }}>
                <img src={cloud} alt="" />
                <Typography
                  style={{ position: "absolute", top: "-15%", left: "20%" }}
                  sx={{ color: "#FFAF60", fontSize: "60px", lineHeight: 2 }}
                  variant="h4"
                  gutterBottom
                  component="div"
                >
                  50
                </Typography>
              </Box>

              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "500",
                  mb: 0,
                  py: 3,
                }}
                variant="subtitle2"
                gutterBottom
                component="div"
              >
                Question Asked
              </Typography>
            </Box>
          </Grid>
          {/* box-3 */}
          <Grid item xs={12} sm={12} md={3}>
            <Box
              sx={{
                background: "#fff",
                w: "25%",
                maxWidth: "194px",
                minHeight: "170px",
                p: "25px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                mb: "30px",
                transform: "rotate(-5deg)",
              }}
            >
              <Box style={{ position: "relative" }}>
                <img src={cloud} alt="" />
                <Typography
                  style={{ position: "absolute", top: "-15%", left: "20%" }}
                  sx={{ color: "#76BEBA", fontSize: "60px", lineHeight: 2 }}
                  variant="h4"
                  gutterBottom
                  component="div"
                >
                  120
                </Typography>
              </Box>

              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "500",
                  mb: 0,
                  py: 3,
                }}
                variant="subtitle2"
                gutterBottom
                component="div"
              >
                Total Syllbus
              </Typography>
            </Box>
          </Grid>
          {/* box-4 */}
          <Grid item xs={12} sm={12} md={3}>
            <Box
              sx={{
                background: "#fff",
                w: "25%",
                maxWidth: "194px",
                minHeight: "170px",
                p: "25px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                mb: "30px",
                transform: "rotate(7deg)",
              }}
            >
              <Box style={{ position: "relative" }}>
                <img src={cloud} alt="" />
                <Typography
                  style={{ position: "absolute", top: "-15%", left: "20%" }}
                  sx={{ color: "#7192BD", fontSize: "60px", lineHeight: 2 }}
                  variant="h4"
                  gutterBottom
                  component="div"
                >
                  100
                </Typography>
              </Box>

              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "500",
                  mb: 0,
                  py: 3,
                }}
                variant="subtitle2"
                gutterBottom
                component="div"
              >
               Total Books
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Facility;