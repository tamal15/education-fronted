import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
// import foodImg from "./image/healthyFood.png";

// import background from "../../assets/image/gray_wave.svg";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Features = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <Box
      sx={{
        // backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        py: 10,
      }}
    >
      <Container>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid item xs={12} sm={12} md={8}>
            <Box>
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                sx={{ fontWeight: "500", color: "#3B4757" }}
              >
                <span style={{ color: "#46AADC" }}>Features</span> <span style={{color:"#46AADC"}}>we provide</span>
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontSize: "15px",
                  lineHeight: "1.5rem",
                  color: "#777",
                  my: 3,
                }}
              >
                We have put some important information on our website that will
                be of great help to student.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                className="featuress"
                sx={{
                  fontStyle: "italic",
                  fontFamily: "Georgia",
                  color:"white"
                
                
                }}
              >
                These are our Features
              </Typography>
            </Box>
            <Box data-aos="fade-up">
              <Grid container spacing={2} columns={{ xs: 12, sm: 8, md: 12 }}>
                <Grid item xs={12} sm={4} md={4}>
                  <CardActionArea>
                    <Link to="/schools" style={{ textDecoration: "none" }}>
                      <Card
                      // data-aos="fade-up"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://i.ibb.co/C25whhf/222.png"
                          alt=""
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Questions
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            We provide all the best question information here.
                          </Typography>
                        </CardContent>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Button size="small">Explore</Button>
                        </Box>
                      </Card>
                    </Link>
                  </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <CardActionArea>
                    <Link to="/privateTutor" style={{ textDecoration: "none" }}>
                      <Card
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          // image="https://i.ibb.co/sjk9MtL/pexels-photo-5303549.jpg"
                          // alt=""
                          image="https://i.ibb.co/17Zq9D5/1622955725643.png"
                          alt=""
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Syllbus
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            You can find your syllbus in this website.
                          </Typography>
                        </CardContent>

                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Button size="small">Explore</Button>
                        </Box>
                      </Card>
                    </Link>
                  </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <CardActionArea>
                    <Link to="/donation" style={{ textDecoration: "none" }}>
                      <Card
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://i.ibb.co/sjk9MtL/pexels-photo-5303549.jpg"
                          alt=""
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Blogs
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            You can provide share blogs our website.
                          </Typography>
                        </CardContent>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Button size="small">Explore</Button>
                        </Box>
                      </Card>
                    </Link>
                  </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <CardActionArea>
                    <Link to="/transport" style={{ textDecoration: "none" }}>
                      <Card
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://i.ibb.co/tBtFjYB/1622956051167.png"
                          alt=""
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Lab
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            We give service provide the labs note.
                          </Typography>
                        </CardContent>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Button size="small">Explore</Button>
                        </Box>
                      </Card>
                    </Link>
                  </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <CardActionArea>
                    <Link to="/books" style={{ textDecoration: "none" }}>
                      <Card
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://i.ibb.co/Q9yYdn7/hand-using-mobile-phone-online-shopping-business-ecommerce-concept-cart-icon-blue-background-8930399.jpg"
                          alt=""
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Buy Book
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            You can buy your kids books from here online.
                          </Typography>
                        </CardContent>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Button size="small">Explore</Button>
                        </Box>
                      </Card>
                    </Link>
                  </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <CardActionArea>
                    <Link to="/notes" style={{ textDecoration: "none" }}>
                      <Card
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                      >
                        <CardMedia
                          component="img"
                          height="140"
                          image="https://i.ibb.co/jhNmYLr/photo-1517842645767-c639042777db.jpg"
                          alt=""
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Notes
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            We also provide important class notes in our
                            website.
                          </Typography>
                        </CardContent>

                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Button size="small">Explore</Button>
                        </Box>
                      </Card>
                    </Link>
                  </CardActionArea>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <img  data-aos="zoom-in" height="350" width="350" src='https://i.ibb.co/PYRQwwP/1622955529676.png' alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;