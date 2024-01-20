import React from 'react'
import "./service.scss"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RoomServiceIcon from "@mui/icons-material/RoomService";

const Service = () => {
  return (
    <div className="service">
    <div className="containerr">
      <div className="service-heading">
        <div className="svg-wrapper">
          <RoomServiceIcon style={{ color: "gray", fontSize: "100px" }} />
        </div>
        <div className="heading">
          <div className="line"></div>
          <h1>Our Services</h1>
          <div className="line"></div>
        </div>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <div className="box">
              <div className="box-heading">Breakfast</div>
              <div className="box-content">
                <p>
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <div className="box">
              <div className="box-heading">Brunch</div>
              <div className="box-content">
               <p> Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <div className="box">
              <div className="box-heading">Lunch</div>
              <div className="box-content">
             <p>   Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3} >
          <div className="box">
              <div className="box-heading">Dinner</div>
              <div className="box-content">
             <p>  Scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis.</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

     
    </div>
  </div>
  )
}

export default Service