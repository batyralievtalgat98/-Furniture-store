import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProducts } from '../../context/CrudContextProvider';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContextProvider';
import {ADMIN} from '../../helpers/Consts';
import { Box } from '@mui/system';
import  ShoppingBag  from '@mui/icons-material/ShoppingBag';

import { MoreHoriz } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useCart } from '../../context/CardContextProvider';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';


export default function ProductCard({item}) {
  const navigate = useNavigate();
  const { userName } = useAuth();
  const { deleteProduct,toogleLike } = useProducts();

  const { addProductToCart, checkProductInCart } = useCart()

  return (
    <Card sx={{  minHeight:350, minWidth: 350, my: 5, maxWidth:450}}>
    <CardMedia
    sx={{width: '67%'}}
      component="img"
      height="200"
      image={item.image}
      // alt={item.name}
    />
    <CardContent >
      <Typography sx={{display: 'flex', textAlign: 'center'}} gutterBottom variant="h5" component="div">
        {item.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {item.description}
      </Typography>
      <Typography variant="body2" 
      sx={{color: 'black', fontWeight: 'bold'}}>
       {item.price} $
      </Typography>
    </CardContent>
    <CardActions>
{userName===ADMIN ? (
<Box>
<Button size="small" onClick={()=>deleteProduct(item.id)}>Delete</Button>
<Button size="small" onClick={() => navigate(`/edit/${item.id}`)} >Edit</Button>
</Box>
):(<Box><IconButton onClick={() => addProductToCart(item)}>
<ShoppingBag
  color={checkProductInCart(item.id) ? 'warning' : ''}
/>
</IconButton></Box>)}
   
   <IconButton onClick={() => navigate(`/product/${item.id}`)}>
          <MoreHoriz/>
          </IconButton>

          <ThumbUpAltIcon onClick={()=>toogleLike(item.id)}/>{item.likes}
     
    </CardActions>
  </Card>
  );
}
