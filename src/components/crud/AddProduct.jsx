import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/CrudContextProvider';

const AddProduct = () => {

  const{ addProduct }=useProducts()


  const navigate = useNavigate()

  const [product, setProduct]= useState({
    name: '',
    description: '',
    price: 0,
    // picture: '',
    // type:''
  })

  const handleInp = (e)=>{
   
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      }
      setProduct(obj)
    
  }




  return (
    <Box sx={{ width: '60vw', margin: '10vh auto' }}>
      <TextField
      sx={{marginBottom: '10px', borderColor: 'black' }}
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name='name'
        size="small"
        onChange={handleInp}
        
      />
      <TextField
      sx={{marginBottom: '10px', borderColor: 'black' }}
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name='description' 
        size="small"
        onChange={handleInp}
        
      />
      <TextField
      sx={{marginBottom: '10px', borderColor: 'black' }}
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name='price'
        size="small"
        onChange={handleInp}

      />
      <TextField
      
      sx={{marginBottom: '10px', borderColor: 'black',backgroundColor: 'whitesmoke' }}
        fullWidth
        id="outlined-basic"
        label="Picture"
        variant="outlined"
        name='picture'
        size="small"
        onChange={handleInp}
        
      />
            <TextField
      
      sx={{marginBottom: '10px', borderColor: 'black',backgroundColor: 'whitesmoke' }}
        fullWidth
        id="outlined-basic"
        label="Type"
        variant="outlined"
        name='type'
        size="small"
        onChange={handleInp}
        
      />
      <Button
      sx={{marginBottom: '10px', borderColor: 'black', color: 'black', backgroundColor: 'whitesmoke' }}
        variant="outlined"
        fullWidth
        size="large"
    onClick={()=>addProduct(product)}
      >
       Add product
      </Button>
    </Box>
  );
};

export default AddProduct;