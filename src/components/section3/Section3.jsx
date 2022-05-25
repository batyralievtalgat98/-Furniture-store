import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import  "./Section3.css";

const OurPartners = () => {

  const itemData = [ 
    {
      img: 'https://decorall.kg/uploads/picture/image/2791/large_%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D1%82%D0%BE%D0%BB_Cillo_sale.jpg',
      title: 'Breakfast',
    },
    {
      img: 'https://decorall.kg/uploads/picture/image/451/large_%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D1%82%D0%BE%D0%BB_Win_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9.jpg',
      title: 'Burger',
    },
    {
      img: 'https://decorall.kg/uploads/picture/image/336/large_%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D1%82%D0%BE%D0%BB_Bloom-2.jpg',
      title: 'Camera',
    },
    {
      img: 'https://decorall.kg/uploads/picture/image/358/large_Arrival_C_M_Wenge_Akcaagac_-_Kopya.jpg',
      title: 'Coffee',
    },
    {
      img: 'https://decorall.kg/uploads/picture/image/362/large_%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D1%82%D0%BE%D0%BB_Monument_%D0%B0%D0%BA%D1%86%D0%B8%D1%8F.jpg',
      title: 'Robert Mondavi',
    },
    {
      img: 'https://decorall.kg/uploads/picture/image/339/large_%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D1%82%D0%BE%D0%BB_Labrab_%D0%BE%D1%80%D0%B5%D1%85.jpg',
      title: 'Gailo Family',
    },
    {
      img: 'https://decorall.kg/uploads/picture/image/335/large_%D0%9F%D0%B8%D1%81%D1%8C%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D1%82%D0%BE%D0%BB_Barok_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9.jpg',
      title: 'Concha y Toro ',
    },
    {
      img: 'https://decorall.kg/uploads/picture/image/358/large_Arrival_C_M_Wenge_Akcaagac_-_Kopya.jpg',
      title: 'BareFoot',
    },

  ];
      
 
  return (
    <Box py={10} id='ourpartners'  sx={{background: '#fafafa'}}>



      <Typography variant="h3" sx={{textAlign: 'center', fontWeight: 'bold'}} >Desks</Typography>

<Grid container sx={{ maxWidth: '1100px', alignItems: 'center' }} className='OurPartners'>

   {itemData.map((item, index) => (
     <Grid item md={3} xs={12} sm={6} key={index} >
       <Box sx={{display: { xs:'block', sm: 'flex' }}}   className='imageOurPartners' >
    <img 
  
    src={`${item.img}`}
    srcSet={`${item.img}`}
    alt={item.title}
    loading="lazy" 
    width={250}
    height={200}
    align='center'
    

    />
    </Box>
</Grid>
    ))}

</Grid>   
    </Box>
  );
};
export default OurPartners;