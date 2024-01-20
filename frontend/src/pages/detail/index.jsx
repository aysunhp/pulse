import React, {useEffect} from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {  fetchData, addBasket, addWishlist } from "../../redux/slices/menuSlice";
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Helmet} from "react-helmet";
import "./detail.scss"

const Detail = () => {

  const {id}= useParams()
  console.log(id)
  const dispatch=useDispatch()
  const data= useSelector((state)=>state.menu.data)
  const wishlist= useSelector((state)=>state.menu.wishlist)
  useEffect(()=>{
      dispatch(fetchData())
  },[dispatch])

  const found=data.find(item=>item._id==id)
  console.log(found)
  return (
    <div className="detail">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Detail</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="containerr">
        <div className="detail-heading">
          <div className="svg-wrapper">
            <RemoveRedEyeIcon style={{ color: "white", fontSize: "100px" }} />
          </div>
          <div className="heading">
            <div className="line"></div>
            <h1>Look Detailed</h1>
            <div className="line"></div>
          </div>
        </div>

        <div className="card">
      {
        found &&   <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {found.type}
          </Typography>
          <Typography variant="h5" component="div">
        Name:  {found.name}
          </Typography>
          <Typography variant="h5" component="div">
        Price:  ${found.price}
          </Typography>
          <Typography variant="body2">
          {found.ingredients}
          </Typography>
        </CardContent>
        <CardActions>
        
          <Button size="small"onClick={()=>{
            dispatch(addWishlist(found))
          }} >  {
            wishlist.find(item=>item._id==found._id)?<FavoriteIcon/>:<FavoriteBorderIcon/>
          }</Button>
          <Button size="small" onClick={()=>{
            dispatch(addBasket(found))
          }}><ShoppingBasketIcon/></Button>
        </CardActions>
      </Card>
      }
        </div>
      </div>
    </div>
  );
};

export default Detail;
