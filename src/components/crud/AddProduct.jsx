import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/CrudContextProvider';

const AddProduct = () => {

  const{ addProduct }=useProducts()


  const navigate = useNavigate()

  const [product, setProduct]= useState({
    name: '',
category: '',
price: '',
description: '',
made_in: '',
  })


  const handleInp = (e)=>{
   
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      }
      setProduct(obj)



  }

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <Box sx={{ width: '60vw', margin: '10vh auto' }}>
      <TextField
      sx={{marginBottom: '10px', borderColor: 'black' }}
        fullWidth
        id="outlined-basic"
        label="Category"
        variant="outlined"
        name='category'
        size="small"
        onChange={handleInp}
      />

{/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          // label="Age"
          name='category'
          onChange={handleInp}
        >
          <MenuItem value={10}>Tables</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
      
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
        label="Description"
        variant="outlined"
        name='description'
        size="small"
        onChange={handleInp}
        
      />
            <TextField
      
      sx={{marginBottom: '10px', borderColor: 'black',backgroundColor: 'whitesmoke' }}
        fullWidth
        id="outlined-basic"
        label="Made in ..."
        variant="outlined"
        name='made_in'
        size="small"
        onChange={handleInp}
        
      />
      {/* <TextField
      
      sx={{marginBottom: '10px', borderColor: 'black',backgroundColor: 'whitesmoke' }}
        fullWidth
        id="outlined-helperText"

        helperText="Вставьте картинку"
        name='picture'
        size="small"
        onChange={handleInp}
        type='file'
      
      /> */}
    
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