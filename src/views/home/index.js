import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import {
  howItWorksTips
} from "./data";
import './index.scss'

const HomePage = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section name="About" style={{backgroundColor:'black'}}>

      {/* How it works*/}
      <Container sx={{ mt: "248px" }} className='diagram-container'>
        <Grid container spacing={12} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h2" sx={{ textAlign: "center" }}>
              TITLE some text
            </Typography>
          </Grid>
        </Grid>
        {!isMobile && (
          <Box className="arrow"></Box>
        )}
        {/* {isMobile && (
         
        )} */}
        {!isMobile && (
          <Grid
            container
            spacing={4}
            sx={{ mt: "60px" }}
            justifyContent="center"
            className="diagram-panel"
          >
            
            {howItWorksTips.map((benefit, index) => {
              return (
                <Grid item xs={6} md={4}>
                  
                  <Box
                    className='step-box'
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 5,
                        textAlign: "center",
                        height: "100%",
                      }}
                      className={index==3?'step-paper no-bgcolor':'step-paper'}
                    >
                      <Typography variant="body1" sx={{ fontSize: "18px" }}>
                        {benefit}
                      </Typography>
                    </Paper>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
        {isMobile && (
          <Grid
            container
            spacing={4}
            sx={{ mt: "60px" }}
            justifyContent="center"
            className="diagram-panel"
          >
            
            
            {howItWorksTips.map((benefit, index) => {
              return (
                <>
                  <Grid item xs={12} className='box-grid'>
                    
                    <Box
                      className='step-box'
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 5,
                          textAlign: "center",
                          height: "100%",
                        }}
                        className={index==4?'step-paper no-bgcolor':'step-paper'}
                      >
                        <Typography variant="body1" sx={{ fontSize: "18px" }}>
                          {benefit}
                        </Typography>
                      </Paper>
                    </Box>
                  </Grid>
                  {index != 4 && (
                    <Box className="bar"></Box> 
                  )}
                </>

              );
            })}
          </Grid>
        )}
      </Container>
    </section>
  );
};

export default HomePage;
