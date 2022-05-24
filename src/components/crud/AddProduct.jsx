import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/CrudContextProvider';

const AddProduct = () => {

  const { addProduct } = useProducts()


  

  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    made_in: '',
    // image:''
  })


  const handleInp = (e) => {

    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    }
    setProduct(obj)
    
  }
  const handleInpFile = (e) => {

// console.log(e.target.files[0]);
   let file= e.target.files[0]
   console.log(file);
   setProduct({
     ...product, 
     image: file
   })

    
  }

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: '60vw', margin: '10vh auto' }}>


      <FormControl fullWidth
        size="small"
        sx={{ marginBottom: '10px', borderColor: 'black' }}
        
      >
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name='category'
          value={age}
          
          onChange={(e)=>{ handleChange(e);handleInp(e)}
          }
        >
          <MenuItem value={'Tables'}>Tables</MenuItem>
          <MenuItem value={'Bed'}>Bed</MenuItem>
          <MenuItem value={'Chairs'}>Chairs</MenuItem>
        </Select>
      </FormControl>



      <TextField
        sx={{ marginBottom: '10px', borderColor: 'black' }}
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name='name'
        size="small"
        onChange={handleInp}

      />
      <TextField
        sx={{ marginBottom: '10px', borderColor: 'black' }}
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name='price'
        size="small"
        onChange={handleInp}

      />
      <TextField

        sx={{ marginBottom: '10px', borderColor: 'black', backgroundColor: 'whitesmoke' }}
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name='description'
        size="small"
        onChange={handleInp}

      />
      <TextField

        sx={{ marginBottom: '10px', borderColor: 'black', backgroundColor: 'whitesmoke' }}
        fullWidth
        id="outlined-basic"
        label="Made in ..."
        variant="outlined"
        name='made_in'
        size="small"
        onChange={handleInp}

      />
      <TextField
      
      sx={{marginBottom: '10px', borderColor: 'black',backgroundColor: 'whitesmoke' }}
        fullWidth
        id="outlined-helperText"

        helperText="Вставьте картинку"
        name='image'
        size="small"
        onChange={handleInpFile}
        type='file'
      
      />

      <Button
        sx={{ marginBottom: '10px', borderColor: 'black', color: 'black', backgroundColor: 'whitesmoke' }}
        variant="outlined"
        fullWidth
        size="large"
        onClick={() => addProduct(product)}
      >
        Add product
      </Button>
    </Box>
  );
};

export default AddProduct;