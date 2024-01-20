import React , { useEffect, useState} from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";
import "./add.scss";
import { fetchData, postData , deleteData} from "../../redux/slices/menuSlice";
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper';
import * as Yup from 'yup';
import { Helmet } from "react-helmet";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(60, 'Too Long!')
    .required('Required'),
  ingredients: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  type: Yup.string() .min(2, 'Too Short!')
  .max(50, 'Too Long!').required('Required'),
  price: Yup.number() .positive().min(1).required('Required'),
});



const Add = () => {
  const [search, setSearch]=useState("")
  const [type, setType]=useState("")
  const dispatch=useDispatch()
  const data= useSelector((state)=>state.menu.data)
  useEffect(()=>{
      dispatch(fetchData())
  },[dispatch])

const filteredData=()=>{
  if(type=="az"){
    return [...data].sort((a,b)=>a.name.localeCompare(b.name))
  }else   if(type=="za"){
    return [...data].sort((a,b)=>b.name.localeCompare(a.name))
  }else   if(type=="price"){
    return [...data].sort((a,b)=>Number(a.price)-Number(b.price))
  }else{
    return data
  }

  return data
}


  return (
    <div className="add">
           <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="containerr">
        <div className="add-heading">
          <div className="svg-wrapper">
            <AddBoxIcon style={{ color: "white", fontSize: "100px" }} />
          </div>
          <div className="heading">
            <div className="line"></div>
            <h1>Add Page</h1>
            <div className="line"></div>
          </div>
        </div>

        <div className="form">
        <Formik
       initialValues={{
         name: '',
         ingredients: '',
         price: '',
         type: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         dispatch(postData(values))
         console.log(values);
       }}
     >
       {({ errors, touched , handleSubmit}) => (
         <Form onSubmit={handleSubmit} style={{width:"50%"}}>
           <Field name="name"  style={{ padding:"15px 20px", borderRadius:"15px", width:"100%", border:"none", marginBottom:"20px"}}/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <br />
           <Field name="ingredients" style={{ padding:"15px 20px", borderRadius:"15px", width:"100%", border:"none", marginBottom:"20px"}}/>
           {errors.ingredients && touched.ingredients ? (
             <div>{errors.ingredients}</div>
           ) : null}
            <br />
           <Field name="price" style={{ padding:"15px 20px", borderRadius:"15px", width:"100%", border:"none", marginBottom:"20px"}}/>
           {errors.price && touched.price ? <div>{errors.price}</div> : null}
           <br />
           <Field name="type" style={{ padding:"15px 20px", borderRadius:"15px", width:"100%", border:"none", marginBottom:"20px"}}/>
           {errors.type && touched.type ? <div>{errors.type}</div> : null}
           <br />

           <Button variant="text"  type="submit">Submit</Button>
          
         </Form>
       )}
     </Formik>

        </div>
      </div>
      <div className="table">

      <TextField id="outlined-basic" label="Search..." variant="outlined" onChange={(e)=>{
        setSearch(e.target.value)
      }}/>
      <Button  variant="outlined" onClick={()=>{
        setType("az")
      }}>A-Z</Button>
      <Button variant="outlined" onClick={()=>{
        setType("za")
      }}>Z-A</Button>    <Button variant="outlined" onClick={()=>{
        setType("price")
      }}>Price</Button>    <Button variant="outlined" onClick={()=>{
        setType("")
      }}>Default</Button>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Ingredients</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData().filter(item=>item.name.toLowerCase().includes(search.toLowerCase())).map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.ingredients}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right"><Button variant="outlined" color="error" onClick={()=>{
                dispatch(deleteData(row._id))
              }}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  );
};

export default Add;
