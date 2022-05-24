import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import bed from '../Image/rectangle13.png'
import './SectionBed.css'
const SectionBed = () => {
  return (
    <Box>
      <img src={bed} alt="" className='sectionBedImg' />
      <Box sx={{ p: {xs:'10px',md:'100px'}}} >



        <Box sx={{
          background: 'rgba(255, 255, 255, 0.7)', width: { xs: '95%', md: '50%' }, padding: '20px', ml: {xs:0,md:'50px'},
          pr: '80px',
        }}>
          <Typography sx={{ fontSize: { xs: '16px', md: '28px' } }}>
            BEDSHEET SETS
          </Typography>

          <Box sx={{ display: 'flex' }}>
            <Typography sx={{ fontSize: { xs: '16px', md: '28px' }, color: '#7B5136' }}>
              $50.00
            </Typography>
            <Typography sx={{
              fontSize: '16px', textDecoration: 'line-through',
              textDecorationColor: '#7B5136',
              pt: {sx:0,md:'10px'},
              color: '#7B5136',
              ml: '20px'
            }}>
              $220.00
            </Typography>
          </Box>
          <Typography sx={{display:{xs:'none',sm:'block'}}} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </Typography>
          <Button>VIEW DETAILS</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionBed;