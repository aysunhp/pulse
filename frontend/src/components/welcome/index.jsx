import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AirIcon from "@mui/icons-material/Air";
import "./welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="containerr">
        <div className="welcome-heading">
          <div className="svg-wrapper">
            <AirIcon style={{ color: "gray", fontSize: "100px" }} />
          </div>
          <div className="heading">
            <div className="line"></div>
            <h1>Welcome</h1>
            <div className="line"></div>
          </div>
        </div>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="box">
                <div className="box-heading">2002</div>
                <div className="box-content">
                  <p>
                  In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                  Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                  volutpat.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className="box">
                <div className="box-heading">2002</div>
                <div className="box-content">
                 <p> In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                  Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                  volutpat.</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className="box">
                <div className="box-heading">2002</div>
                <div className="box-content">
               <p>   In vitae nisi aliquam, scelerisque leo a, volutpat sem.
                  Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo
                  volutpat.</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>

        <div className="sign-img">
            <img src="https://preview.colorlib.com/theme/pulse/img/sign.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
