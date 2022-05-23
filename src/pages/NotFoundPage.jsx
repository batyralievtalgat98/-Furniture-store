import { Box } from '@mui/system';
import React from 'react';
import img404 from '../components/Image/404.png'
const NotFoundPage = () => {
  return (
    <Box sx={{
      width:{xs:'100%', md:'80%'},
      display: 'flex',
      margin: '0 auto'
    }}>
      <img src={img404} alt="" width='100%' />
    </Box>
  );
};

export default NotFoundPage;