import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CustomButton from '../Button/Button'
import {Link} from 'react-scroll'
import logo from '../../assets/logo.png'
import './Navbar.css'

const pages = ['Home', 'Pricing', 'Contact Us'];


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const navHomeIndication = () => {
        document.querySelector('#navIndicator').style.left = '-93%'
    }
    const navPriceIndication = () => {
        document.querySelector('#navIndicator').style.left = '-64%'
    }
    const navContactIndication = () => {
        document.querySelector('#navIndicator').style.left = '-30%'
    }

  return (
    <AppBar position="sticky" sx={{height: 70, backgroundColor: 'white', color: 'black'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{padding: '0px 0px' }}>
          <img src={logo} width={100} alt="LOGO" style={{marginLeft: 68}}/>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
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
            <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 32, justifyContent: 'space-between', fontWeight: 'bolder', textDecoration: 'none', width: 410}}>

              <Link className='nav-link' to='home' spy={true} smooth={true} style={{color: 'black', fontFamily: 'Gilroy-ExtraBold', textDecoration: 'none'}} onClick={navHomeIndication}>Home</Link>
              <Link className='nav-link' to='pricing' spy={true} smooth={true} style={{color: 'black', fontFamily: 'Gilroy-ExtraBold', textDecoration: 'none'}} onClick={navPriceIndication}>Pricing</Link>
              <Link className='nav-link' to='contact' spy={true} smooth={true} style={{color: 'black', fontFamily: 'Gilroy-ExtraBold', textDecoration: 'none'}} onClick={navContactIndication}>Contact Us</Link>

            <span id='navIndicator' className='nav-indicator' style={{position: 'relative', zIndex: 9999, top: 30, left: '-93%', width: 8, height: 8, backgroundColor: '#0c4d71', borderRadius: 12}}/>
          </Box>
        <CustomButton/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
