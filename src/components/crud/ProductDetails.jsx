import React, { useEffect, useState } from 'react';

import { useProducts } from '../../context/CrudContextProvider';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button, TextField, Typography } from '@mui/material';
import { useAuth } from '../../context/AuthContextProvider';
import { ADMIN } from "../../helpers/Consts";
const ProductDetails = () => {
  const { getProductDetails, productDetails,getComments,comments,addComment,deleteComm } = useProducts();
const {userName}=useAuth()
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
    getComments(id)
  }, []);

  const [comm, setComm] = useState('')

  const [clear, setClear] = useState("")

  useEffect(() => {
    getProductDetails(id);
    getComments(id)
  }, [comments]);




  const handleInp = (e) => {
let id2 = Number(id)
    let obj = {
      product:id2,
      text: e.target.value
    }
    setComm(obj)
    setClear(e.target.value)
  }

  const clearInp =(e)=>{
    setClear('')
  }


  return (
    <div>
    <Box sx={{width:{xs:'100%',sm :'85%'}, margin:'10px auto', display: 'flex', flexWrap: 'wrap'}}>
      <Box sx={{marginLeft: '20px'}}>
       <Typography sx={{fontSize:{ xs:'20px',sm:'3vw'},marginTop: '25px'}} >{productDetails.name}</Typography>
       <Typography sx={{fontSize:{ xs:'20px',md:'2vw'}}}>{productDetails.price}$</Typography>
       <Typography>Made in {productDetails.made_in}</Typography>
       <Typography sx={{fontSize:{ xs:'15px',md:'20px'}}}>Description {productDetails.description}</Typography>

       {userName ? (
       <Box> <TextField size="small"
       onChange={handleInp}
       value={clear}
       /><Button onClick={()=>{addComment(comm);clearInp()}} sx={{color: 'black'}}>Add comment</Button></Box>
       ):(null)}
       
       </Box>


       <Box sx={{minWidth: '300px',width:'40%', margin: ' 10px auto', borderRadius: '15px'}}> <img  src={productDetails.image}
       alt=""  width="100%" style={{borderRadius: '15px'}}/></Box>
       
       
      
    </Box>
     <Box sx={{display: 'flex', flexDirection: 'column'}}>
        {(comments.comments == undefined || comments.comments.length == 0)  ? (''):('Comments:')}
   {(comments.comments == undefined || comments.comments.length == 0)  ? (null):(comments.comments.map((item)=>{
     return (<Box component="div" display="inline" key={item.id} sx={{fontSize:'20px',border: '1px solid #E5E5E5',p:'10px',borderRadius:'5px', display:'inline'}}>{item.text} ({item.user}) 
       {(userName===item.user || userName===ADMIN) ? (<Button onClick={()=>deleteComm(item.id)}>Delete</Button>):(null) }
      
      </Box>)
   }))}
   </Box>
   </div>
  );
};

export default ProductDetails;