import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProducts } from '../../context/CrudContextProvider';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({item}) {
  const navigate = useNavigate();

  const { deleteProduct } = useProducts();
  return (
    <Card sx={{  minHeight:350, minWidth: 350, my: 5, maxWidth:450}}>
    <CardMedia
    sx={{width: '67%'}}
      component="img"
      height="200"
      // image={item.picture}
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

    <Button size="small" onClick={()=>deleteProduct(item.id)}>Delete</Button>
<Button size="small" onClick={() => navigate(`/edit/${item.id}`)} >Edit</Button>
      
     
    </CardActions>
  </Card>
  );
}
