import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import  image3  from "../Image/image 3.png";

const Section2 = () => {
  const navigate= useNavigate();
  return (
 
    <>
    <Box sx={{background: '#fafafa', display: 'flex', flexWrap:{ xs:'wrap',sm:'nowrap'}}}>
      <Box sx={{margin: 'auto'}}>
<Typography sx={{fontSize:{ xs:'20px',sm:'3vw'}}}>INY VINTAGE CHAIR</Typography>
<Typography sx={{fontSize:{ xs:'20px'}, maxWidth: '466px', fontWeight: '700', color: '#A86A3D'}}>SALE UP 90%

MODERN FURNITURE</Typography>
<Button sx={{mt:'20px'}} onClick={()=>{navigate('/store')}}>VIEW NOW</Button>
      </Box>
      <Box sx={{margin: 'auto'}} ><img src={image3} alt="" width='100%'/></Box>
    </Box>
    </>
  );
  
};

export default Section2;