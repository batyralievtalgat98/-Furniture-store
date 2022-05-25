import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/CrudContextProvider';
import  image2  from "../Image/image 2.png";




const Section1 = () => {

const navigate= useNavigate();
  return (
    <>
    <Box sx={{background: '#DBD0CC', display: 'flex', flexWrap:{ xs:'wrap',sm:'nowrap'}}}>
      <Box sx={{margin: 'auto'}} ><img src={image2} alt="" width='100%'/></Box>
      <Box sx={{margin: 'auto'}}>
<Typography sx={{fontSize:{ xs:'20px',sm:'3vw'}}}>HOT DEALS THIS WEEK</Typography>
<Typography sx={{fontSize:{ xs:'20px',sm:'3.5vw'}, maxWidth: '466px', fontWeight: '700', color: '#A86A3D'}}>SALE UP 50%

MODERN FURNITURE</Typography>
<Button sx={{mt:'20px'}} onClick={()=>{navigate('/store')}}>VIEW NOW</Button>
      </Box>
    </Box>
    </>
  );
};

export default Section1;