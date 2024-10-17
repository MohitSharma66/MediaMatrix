import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Hamburger from 'hamburger-react';
import PropTypes from 'prop-types';
import * as React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navItems = ['About Us', 'Past Event', 'Team', 'FAQ', 'Contact Us'];

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
        <Typography variant="h6" sx={{ my: 2, marginLeft: "auto", marginRight: "auto", fontFamily: "Montserrat" }}>
          MUN
        </Typography>
      </div>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} href={`#${item}`} onClick={() => setOpen(prev => !prev)}>
              <ListItemText primary={item} disableTypography={true} sx={{ fontFamily: "Montserrat" }} />
            </ListItemButton>
          </ListItem>
        ))} */}
         <ListItem><ListItemButton href="#About Us" onClick={()=>setOpen(false)}>About Us</ListItemButton></ListItem>
         <NavLink to="/past-events"><ListItem><ListItemButton onClick={()=>setOpen(false)}>Past Events</ListItemButton></ListItem></NavLink>
        <NavLink to="/team"><ListItem><ListItemButton onClick={()=>setOpen(false)}>Team</ListItemButton></ListItem></NavLink>
        <ListItem><ListItemButton href="#FAQ" onClick={()=>setOpen(false)}>FAQ</ListItemButton></ListItem>
        <ListItem><ListItemButton href="#Contact Us" onClick={()=>setOpen(false)}>Contact Us</ListItemButton></ListItem>
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
          background: backgroundColor, 
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
                    borderRadius: "20px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5.4px)",
                    webkitBackdropFilter: "blur(5.4px)",
                     marginRight:"auto", gap:"2vh",padding:"0.5vh",border: "3px solid #006765",margin:"auto"} }}>
              {/* {navItems.map((item) => (
                <Button 
                  key={item} 
                  sx={{ color: navlistColor, fontFamily: "Montserrat"}}
                  href={`#${item}`}
                >
                  {item}
                </Button>
              ))} */}
                 <ul style={{display:'flex', justifyContent:"space-between", listStyle:"none", gap:"2.5vh", margin:"1vh", paddingLeft:"0"}} className='nav-list'>
              <a href="/about"><li>About Us</li></a>
              <NavLink to="/past-events"><li>Past Events</li></NavLink>
             <NavLink to="/team"><li>Team</li></NavLink>
              <a href="#FAQ"><li>FAQ</li></a>
              <a href="#Contact Us"><li>Contact Us</li></a>
            </ul>
            </Box>
            {/* <button className='nav-button'>Contact Us</button> */}
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
              keepMounted: false, 
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: "100%",
                background: "rgba(88, 0, 140, 0.6)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(6px)",
                webkitBackdropFilter: "blur(6px)",
                border: "1px solid rgba(88, 0, 140, 0.3)",
                color: "white",
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