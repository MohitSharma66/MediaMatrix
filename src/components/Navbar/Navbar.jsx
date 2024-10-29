import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Hamburger from 'hamburger-react';
import PropTypes from 'prop-types';
import * as React from 'react';
import "./navbar.css";
import {NavLink} from "react-router-dom"

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [backgroundColor, setBackgroundColor] = React.useState("transparent");
  const [navlistColor, setNavlistColor] = React.useState("white");

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const [isOpen, setOpen] = React.useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setBackgroundColor("rgba(0, 0, 0, 0.7)");
      setNavlistColor("white");
    } else {
      setBackgroundColor("transparent");
      setNavlistColor("black");
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [window]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <div className="ham-head" style={{ display: "flex" }}>
        <Typography variant="h6" sx={{ my: 2, marginLeft: "auto", marginRight: "auto", fontFamily: "Montserrat", color:"white" }}>
          Media Matrix
        </Typography>
      </div>
      <Divider />
      <List>
      <ListItem><Button onClick={()=>setOpen(false)} sx={{color:"white"}}>HOME</Button></ListItem>
        <ListItem><Button onClick={()=>setOpen(false)} sx={{color:"white"}}>EVENTS</Button></ListItem>
        <ListItem><Button onClick={()=>setOpen(false)} sx={{color:"white"}}>CONTACT US</Button></ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className='nav'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{
          height: "8vh",
          background: backgroundColor, // Should change based on scroll
          display: "flex",
          justifyContent: "center",
          boxShadow: "0",
          zIndex: "1201",
          transition: "background 0.3s ease"
        }}>
          <Toolbar>
            <div className="ham">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' }, zIndex: "1201" }}
              >
                <Hamburger toggled={isOpen} toggle={setOpen}
                  aria-label="open drawer"
                  edge="start"
                  className="hamburger-icon"
                  sx={{ zIndex: "1201" }}
                />
              </IconButton>
            </div>
            {/* <div className="nav-logo">
              <img src={Logo} alt="Logo" />
            </div> */}
            <Box sx={{ display: { xs: 'none', sm: 'flex', background: "transparent",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5.4px)",
                    webkitBackdropFilter: "blur(5.4px)",
                     marginRight:"auto", gap:"2vh",padding:"0.5vh",border: "1px solid red",margin:"auto", width:"100%", borderTop:"none"} }}>
                 <ul style={{display:'flex', listStyle:"none", gap:"10vh", margin:"0.5vh", paddingLeft:"0", fontFamily:"Poppins"}} className='nav-list'>
                 <NavLink to="/"><li>Home</li></NavLink>
                 <a href="/event"><li>Event</li></a>
                 <a href="#Contact"><li>Contact Us</li></a>
                </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            anchor="right"
            ModalProps={{
              keepMounted: false, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: "100%",
                background: "rgba(0, 0, 0, 0.43)",
boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
backdropFilter: "blur(5.8px)",
webkitBackdropFilter: "blur(5.8px)",
border: "1px solid rgba(0, 0, 0, 0.3)",
                zIndex: "1"
              }
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
