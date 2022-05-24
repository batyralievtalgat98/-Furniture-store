import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import {ADMIN} from '../../helpers/Consts';

import FavoriteIcon from '@mui/icons-material/Favorite';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link} from 'react-router-dom';


import { Badge} from '@mui/material';

import logo from '../Image/logo.PNG'
import { useAuth } from '../../context/AuthContextProvider';
import { useCart } from '../../context/CardContextProvider';

 


const pages = [
  { name: 'HOME', link: '/', id: 1 },

  { name: 'STORE', link: '/store', id: 2 },
 
  { name: 'BRAND', link: '/', id: 4 },
  { name: 'ABOUT US', link: '/about', id: 5 },
  { name: 'CONTACT US', link: '/', id: 6 },
  // { name: 'ADMIN PAGE', link: '/adminPage', id: 7 },
  
];




// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { userName,logout } = useAuth();

 let settings=[
    {name: 'Registration', link: '/register',id:1},
    {name: 'Authorization', link: '/login',id:2},
  ]
  if(userName){
    
       settings= [
      {name: 'Logout', link: '/',id:1},  
    ]
  
  } 

  const {addProductToCart,getCountProductsInCart} = useCart()
  const [count, setCount] = React.useState(0)

  React.useEffect (()=> {
    setCount(getCountProductsInCart)
  },[addProductToCart])


  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  



  return (
    <AppBar position="static" sx={{background: '#E5E5E5', boxShadow: 'none'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters   >
          <Box sx={{maxWidth:'60px',display: { xs: 'none', md: 'flex' }}}>
            <img src={logo} alt=""  width='100%'/>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Link to={page.link}>
                      <Typography className='navbar-item' sx={{ ml: 'auto',my: 1, display: 'block',}}>{page.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
                {userName===ADMIN ? (
              <Link to={'/adminPage'}>
                <Button  
                 sx={{ ml: 'auto',my: 2, color: 'black', display: 'block'}}
                 className='navbar-item'
                >
                 ADMIN PANEL
                </Button>
              </Link>
            ):('')}
            </Menu>
          <Box sx={{maxWidth:'50px',display: { xs: 'flex', md: 'none'}, margin: 'auto' }}>
            <img src={logo} alt=""  width='100%'/>
          </Box>
          </Box>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none',
           md: 'flex',
          
           } }}>
          {pages.map((page) => (
              <Link to={page.link} key={page.id}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ ml: 'auto',my: 2, color: 'black', display: 'block'}}
                  className='navbar-item'
                >
                  {page.name}
                </Button>
              </Link>
            ))} 

            {userName===ADMIN ? (
              <Link to={'/adminPage'}>
                <Button  
                 sx={{ ml: 'auto',my: 2, color: 'black', display: 'block'}}
                 className='navbar-item'
                >
                 ADMIN PANEL
                </Button>
              </Link>
            ):('')}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex' }}>
          {/* <TextField
          sx={{mr: '10px', display:{xs: 'none',sm: 'block'}}}
        fullWidth
        id="input-with-icon-textfield"
        label="Search..."
        // value={search}
        onChange={(e) => searchFilter(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      /> */}
          {/* <Search sx={{mr: '10px', display:{xs: 'none',sm: 'block'}}} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={(e) => setSearch(e.target.value)} 
                         />
          </Search> */}
         <FavoriteIcon 
          sx={{fontSize: '30px', mt:'5px', mr:'5px'}}
         />
         <Link to='/card'>
          <Badge badgeContent={count} color="error" sx={{mr:'10px',mt:'5px'}}>

          <ShoppingCartIcon 
          color='error'
          sx={{fontSize: '30px', }}
         />
          </Badge>
          </Link>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
              {settings.map((setting) => (
                <Link to={setting.link} key={setting.id}>
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {setting.name==='Logout' ? (
                    <Typography onClick={logout} textAlign="center">{setting.name}</Typography>
                  ):(
                    <Typography textAlign="center">{setting.name}</Typography>
                    )}
                  
                </MenuItem>
                </Link>
              ))}
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;