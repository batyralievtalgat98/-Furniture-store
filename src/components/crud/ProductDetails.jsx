import React, { useEffect } from 'react';

import { useProducts } from '../../context/CrudContextProvider';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import { TextField, Typography } from '@mui/material';

const ProductDetails = () => {
  const { getProductDetails, productDetails,getComments,comments } = useProducts();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
    getComments(id)
  }, []);

console.log(comments.comments);
  return (
    <Box sx={{width:{xs:'100%',sm :'85%'}, margin:'10px auto', display: 'flex', flexWrap: 'wrap'}}>
      <Box sx={{marginLeft: '20px'}}>
       <Typography sx={{fontSize:{ xs:'20px',sm:'3vw'},marginTop: '25px'}} >{productDetails.name}</Typography>
       <Typography sx={{fontSize:{ xs:'20px',md:'2vw'}}}>{productDetails.price}$</Typography>
       <Typography>Made in {productDetails.made_in}</Typography>
       <Typography sx={{fontSize:{ xs:'15px',md:'20px'}}}>{productDetails.description}</Typography>
       </Box>
       <Box sx={{minWidth: '300px',width:'60%', margin: ' 10px auto'}}> <img src={productDetails.image}
       alt=""  width="100%"/></Box>
       <TextField/>
       <Box sx={{display: 'flex', flexDirection: 'column'}}>
       {(comments.comments == undefined || comments.comments.length == 0)  ? (null):(comments.comments.map((item)=>{
         return <Box sx={{fontSize:'50px'}}>{item.text}</Box>
       }))}
       </Box>
    </Box>
  );
};

export default ProductDetails;