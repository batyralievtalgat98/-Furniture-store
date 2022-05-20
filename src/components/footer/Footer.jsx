import { Box, Container, Divider, Grid, Link } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  function Copyright(props) {
    return (
      <Box textAlign='center' pt={{xs:1, sm:5}} pb={{xs:1, sm:0}}>
          {new Date().getFullYear()}Urban Outfitters © – All rights reserved 
      </Box>
    );
  }

  return (
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 3, sm: 3 }}
      pb={{ xs: 3, sm: 3 }}
      mb={{ xs: 10, sm: 10 }}
      bgcolor="#323334"
      color=" #FFFFFF"
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={6} sm={4} sx={{ mt: '1rem', my: '1rem' }}>
            <Box sx={{ fontWeight: 'medium', fontSize: '1rem' }}>URBAN OUTFITTERS</Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem'}}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </Link>
            </Box>
            <Box my={{ xs: 1, sm: 1 }}>
              <Link
                href="/"
                color="#FFFFFF"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                121 king street, Melbourne 3000
                +996225050805
                contact@urbanoutfitters.com
              </Link>
              <Box sx={{display: 'flex', flexDirection: 'row',justifyContent:"space-between", fontSize: '0.4rem'}}
             my={{ xs: 1, sm: 2 }} 
             >
             <p><FacebookIcon/></p>
            <p><TwitterIcon/></p>
            <p><InstagramIcon/></p>
            <p><YouTubeIcon/></p>
             </Box>
            </Box>
          </Grid>
          {/* болунду2 */}
            <Grid item xs={4} sm={2} sx={{ mt: '0.6rem' }}>
            <Box sx={{ fontWeight: 'medium', fontSize: '1.1rem' }}>
            SHOPPING
            </Box>
            <Box my={{ xs: 1, sm: 2, }}>
              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
                display='flex'
              >
                <p>Your cart</p>
               
              </Link>
            
              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
                display='flex'
              >
                <p>Your orders</p>
              </Link>
          
              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
                display='flex'
              >
               <p>Compared items</p>
              </Link>
            
            
              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
                display='flex'
              >
                <p>Wishlist items</p>
              </Link>
            
              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
                
              >
                Shipping detail 
              </Link>
          
            </Box>
          </Grid>
          {/* болунду 3 */}
          <Grid item xs={5} sm={3} sx={{ mt: '0.6rem' }}>
            <Box sx={{ fontWeight: 'medium', fontSize: '1.1rem' }}>
            MORE LINK
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
                display='flex'
              >
                <p>Blog</p>
              </Link>
           
              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
                display='flex'
              >
               <p>Gift Center</p> 
              </Link>
            
              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
                display='flex'
              >
                <p>Buying Guides</p>
              </Link>
            
              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
                display='flex'
              >
                <p>New Arrivals</p>
              </Link>
              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5);"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
                display='flex'
              >
                <p>Clearance</p>
              </Link>
            </Box>
          </Grid>
          {/* болунду 4*/}
          <Grid item xs={5} sm={3} sx={{ mt: '0.6rem' }}>
            <Box sx={{ fontWeight: 'medium', fontSize: '1.1rem' }}>
            FROM THE BLOG
            </Box>
            <Box my={{ xs: 1, sm: 2 }}>
              <Link
                herf="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
              >
                <p>26 may</p>
              </Link>
           
              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
                
              >
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
              </Link>

              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
                
              >
                <p>3 comments</p>
              </Link>
            
              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem'}}
                display='flex'
              >
        
                <p>27 may</p>
              </Link>
            
              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5)"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
              
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Link>
              <Link
                href="/"
                color="rgba(255, 255, 255, 0.5);"
                underline="hover"
                sx={{ fontSize: '0.8rem' }}
        
              >
                <p>3 comments</p>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Copyright sx={{ m: '8px auto 4px' }} />
    </Box>
  );
};
export default Footer;