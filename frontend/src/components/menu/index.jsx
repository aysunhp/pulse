import React, { useEffect } from "react";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { addWishlist, fetchData, addBasket } from "../../redux/slices/menuSlice";
import { useSelector, useDispatch } from 'react-redux'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";


 import "./menu.scss"
import { Typography } from "@mui/material";
const Menu = () => {

    const dispatch=useDispatch()
    const data= useSelector((state)=>state.menu.data)
    const wishlist= useSelector((state)=>state.menu.wishlist)
    useEffect(()=>{
        dispatch(fetchData())
    },[dispatch])

    console.log(data)
  return (
    <div className="menu">
      <div className="container">
        <div className="menu-heading">
          <div className="svg-wrapper">
            <RoomServiceIcon style={{ color: "white", fontSize: "100px" }} />
          </div>
          <div className="heading">
            <div className="line"></div>
            <h1>Welcome</h1>
            <div className="line"></div>
          </div>
        </div>
        <div className="menu-type">
            <ul>
                <li>
                    Breakfast
                </li>
                <li>
                    Lunch
                </li>
                <li>
                    Dinner
                </li>
                <li>
                    Breakfast
                </li>
            </ul>
        </div>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            
        {
          data && data.map(item=>{
            return<>
            <Grid item xs={12} sm={12} md={12} xl={6} lg={6} key={item._id}>
              <div className="box">
                <div className="box-heading">{item.name}</div>
                <div className="box-content">
                  <p>
                 {item.ingredients}
            
                  </p>
                  <p>..............................</p>
                  <h3>${item.price}</h3>

                  
                 <Typography onClick={()=>{
                  dispatch(addWishlist(item))
                 }}> {
                    wishlist.find(elem=>elem._id==item._id)?<FavoriteIcon style={{margin:"0px", color:"white" , marginRight:"10px"}}/>:<FavoriteBorderIcon style={{margin:"0px", color:"white" , marginRight:"10px"}}/>
                  }</Typography>
                <Typography onClick={()=>{
                  dispatch(addBasket(item))
                }}>
                <ShoppingBasketIcon style={{margin:"0px", color:"white"}}/>
                </Typography>
                <Typography>
              <Link to={"/"+item._id}> <Button variant="outline">View</Button></Link>
                </Typography>
                </div>
              </div>
            </Grid>
            </> 
          })
        }
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Menu;
