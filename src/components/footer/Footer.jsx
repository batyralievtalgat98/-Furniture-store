import React from 'react';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';

import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer>
            <Box sx={{ background: 'rgb(54,57,61)', color: 'white', display: 'wrap' }}
                px={{ xs: 4, sm: 10 }} py={{ xs: 6, sm: 10 }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid item px={5} xs={12} sm={6} md={3} sx={{  flexDirection: 'column', display: { xs: 'none', sm: 'flex' } }}>
                            <Typography variant='h6'>OUR PRODUCTS</Typography>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Furniture
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                               Bed
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Tables
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Chairs
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                            Furniture
                            </Link>



                        </Grid>





                        <Grid item px={5} xs={12} sm={6} md={3} sx={{ flexDirection: 'column', display: { xs: 'none', sm: 'flex' } }}>
                            <Typography variant='h6'>CONTACTS</Typography>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Store hours
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Phone
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Address
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Store location
                            </Link>

                        </Grid>

                        <Grid item pr={5} xs={12} sm={6} md={3} sx={{  flexDirection: 'column', display: { xs: 'none', sm: 'flex' } }}>
                            <Typography variant='h6'>COMPANY</Typography>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Company
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                About Us
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Partner network
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Careers
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Referral program
                            </Link>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Coupon code
                            </Link>



                        </Grid>
                        <Grid item pt={3}  xs={12} sm={6} md={3} sx={{ display: { xs: 'none', sm: 'block' } }}>

                            <Typography variant='h6'>PAYMENT METHODS</Typography>
                            <Grid py={3}>
                                <img style={{ margin: '5px', width: '70px', height: '40px' }} src="https://cdn.icon-icons.com/icons2/1316/PNG/128/if-visa-2593666_86609.png" alt="" />
                                <img style={{ margin: '5px', width: '70px', height: '40px' }} src="https://raw.githubusercontent.com/gregoiresgt/payment-icons/master/Assets/Payment/Apple/Apple-card-dark_512.png" alt="" />
                                <img style={{ margin: '5px', width: '70px', height: '40px' }} src="https://raw.githubusercontent.com/gregoiresgt/payment-icons/master/Assets/Credit%20Card/UnionPay/UnionPay-card-dark.png" alt="" />

                            </Grid>
                        </Grid>


                    </Grid>
                </Container>

                <Grid>
                    <Grid container spacing={3} px={{ xs: 4, sm: 3 }} py={{ xs: 6, sm: 3 }}>
                        <Grid item px={{ xs: 4, sm: 5 }} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Store hours
                            </Link>
                            <Box component='span' sx={{ color: 'white' }}>
                                Mon-Sun: 9AM-9PM
                            </Box>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Phone
                            </Link>
                            <Box component='span' sx={{ color: 'white' }}>
                                +996 555 555 555
                            </Box>
                            <Link variant='body1' py={{ xs: 1 }} sx={{ color: '#9999A6' }} href="#" color="inherit" underline="hover">
                                Address
                            </Link>
                            <Box component='span' sx={{ color: 'white' }} >
                                Manas street 55, Bishkek, Kyrghyzstan
                            </Box>
                        </Grid>


                    </Grid>


                    <Box textAlign='center' sx={{ color: 'white', display: 'flex', justifyContent: 'space-around', flexDirection: { xs: 'column', sm: 'row' } }} variant='body2' pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
                        <Typography variant='h6'>MOODY STUDIO</Typography>
                        <Box>&reg; {new Date().getFullYear()}  All Rights Reserved</Box>
                        <Box>
                            <Box component='span' p={2} ><TelegramIcon fontSize='large' /></Box>

                            <Box component='span' p={2} ><TwitterIcon fontSize='large' /></Box>
                            <Box component='span' p={2} ><InstagramIcon fontSize='large' /></Box>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </footer >
    );
};

export default Footer;