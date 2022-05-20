import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../context/CrudContextProvider';

const EditCard = () => {

  
    const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(productDetails);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const handleInp = (e) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
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
      value={product.category || ''}
      onChange={handleInp}
      
    />
    <TextField
    sx={{marginBottom: '10px', borderColor: 'black' }}
      fullWidth
      id="outlined-basic"
      label="Name"
      variant="outlined"
      name='name' 
      size="small"
      value={product.name || ''}
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
      value={product.price || ''}
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
      value={product.description || ''}
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
      value={product.made_in || ''}
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
      defaultValue="Default Value"
    /> */}
  
    <Button
    sx={{marginBottom: '10px', borderColor: 'black', color: 'black', backgroundColor: 'whitesmoke' }}
      variant="outlined"
      fullWidth
      size="large"
  onClick={()=>saveEditedProduct(product)}
    >
     Add product
    </Button>
  </Box>
  );
};

export default EditCard;