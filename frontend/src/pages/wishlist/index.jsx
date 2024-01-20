import React, { useEffect } from "react";
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { addWishlist, fetchData, addBasket, deleteWishlist } from "../../redux/slices/menuSlice";
import { useSelector, useDispatch } from 'react-redux'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Helmet } from "react-helmet";


 import "./wishlist.scss"
import { Typography } from "@mui/material";
const Wishlist = () => {

    const dispatch=useDispatch()
    const data= useSelector((state)=>state.menu.data)
    const wishlist= useSelector((state)=>state.menu.wishlist)
    useEffect(()=>{
        dispatch(fetchData())
    },[dispatch])

    console.log(data)
  return (
    <div className="wishlist">
           <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlisr</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="container">
        <div className="wishlist-heading">
          <div className="svg-wrapper">
            <LoyaltyIcon style={{ color: "white", fontSize: "100px" }} />
          </div>
          <div className="heading">
            <div className="line"></div>
            <h1>Wishlist</h1>
            <div className="line"></div>
          </div>
        </div>
       

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            
        {
          wishlist && wishlist.map(item=>{
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
                  dispatch(deleteWishlist(item))
                 }}> 
                  <FavoriteIcon style={{margin:"0px", color:"white", marginRight:"12px"}}/>
                  </Typography>
                <Typography onClick={()=>{
                  dispatch(addBasket(item))
                }}>
                <ShoppingBasketIcon style={{margin:"0px", color:"white"}}/>
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

export default Wishlist;
