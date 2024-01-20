import React , {useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import RoomServiceIcon from "@mui/icons-material/RoomService";
import { increaseBasket, fetchData,decreaseBasket ,deleteBasket } from "../../redux/slices/menuSlice";
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from "react-helmet";
import "./basket.scss"


const Basket = () => {

  const dispatch=useDispatch()
  const data= useSelector((state)=>state.menu.data)
  const basket= useSelector((state)=>state.menu.basket)
  useEffect(()=>{
      dispatch(fetchData())
  },[dispatch])

  console.log(basket)
  return (
    <div className="basket">
           <Helmet>
                <meta charSet="utf-8" />
                <title>Basket</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="containerr">
        <div className="basket-heading">
          <div className="svg-wrapper">
            <RoomServiceIcon style={{ color: "white", fontSize: "100px" }} />
          </div>
          <div className="heading">
            <div className="line"></div>
            <h1>Basket</h1>
            <div className="line"></div>
          </div>
        </div>

        <div className="table">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Ingredients</TableCell>
            <TableCell align="right">Total Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Increase </TableCell>
            <TableCell align="right">Decrease </TableCell>
            <TableCell align="right">Remove</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.ingredients}</TableCell>
              <TableCell align="right">{row.price*row.quantity}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right"><Button onClick={()=>{
                dispatch(increaseBasket(row))
              }}>Increse</Button></TableCell>
              <TableCell align="right"><Button onClick={()=>{
                row.quantity>1?  dispatch(decreaseBasket(row)):null
              
              }}>Decrese</Button></TableCell>
              <TableCell align="right"><Button color="error" onClick={()=>{
                dispatch(deleteBasket(row))
              }}>Delete</Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Basket;
