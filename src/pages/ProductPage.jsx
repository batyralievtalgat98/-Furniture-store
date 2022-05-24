import { Grid } from '@mui/material';
import React from 'react';
import ProductList from '../components/crud/ProductList';
import SideBar from '../components/sideBar/SideBar';

const ProductPage = () => {
  return (
    <>
    <Grid container sx={{flexWrap: 'wrap'}}>
<Grid item xs={9} sm={4} md={2} >
  <SideBar />
  </Grid >
  <Grid item xs={10} >
      <ProductList/>
      </Grid>
      </Grid>
    </>
  );
};

export default ProductPage;