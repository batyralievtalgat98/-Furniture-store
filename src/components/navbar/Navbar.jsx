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

import FavoriteIcon from '@mui/icons-material/Favorite';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link} from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Badge, InputBase } from '@mui/material';



const pages = [
  { name: 'HOME', link: '/', id: 1 },

  { name: 'STORE', link: '/store', id: 2 },
  { name: 'ACCESSORIES', link: '/', id: 3 },
  { name: 'BRAND', link: '/', id: 4 },
  { name: 'ABOUT US', link: '/about', id: 5 },
  { name: 'CONTACT US', link: '/', id: 6 },
  { name: 'ADMIN PAGE', link: '/adminPage', id: 7 },
  
];


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',

  }));

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    right: 0,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        width: '10ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <AppBar position="static" sx={{background: '#E5E5E5', boxShadow: 'none'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters   >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              
              textDecoration: 'none',
              
            }}
          >
            STORE
          </Typography>

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
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            STORE
          </Typography>
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
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex' }}>
          <Search sx={{mr: '10px', display:{xs: 'none',sm: 'block'}}} >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
         <FavoriteIcon 
          sx={{fontSize: '30px', mt:'5px', mr:'5px'}}
         />
          <Badge badgeContent={4} color="primary" sx={{mr:'10px',mt:'5px'}}>

          <ShoppingCartIcon 
          sx={{fontSize: '30px', }}
         />
          </Badge>

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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;