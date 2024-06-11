import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ravenLogo from '../../assets/ravenLogo.png';
import { Link } from 'react-router-dom';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Organisations', 'Add'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: 'Major Mono Display, monospace', fontSize: '1.5rem' }}>
        RAVEN
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton component={Link} to={item === 'Home' ? '/' : `/${item.toLowerCase() === 'add' ? 'organisations/add' : item.toLowerCase()}`} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} sx={{ fontFamily: 'News Cycle, sans-serif', fontSize: '1.25rem' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#091a2a' }}>
        <Toolbar sx={{ minHeight: 80 }}> {/* Increase height here */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 1, mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={ravenLogo} alt="Raven Logo" style={{ width: '60px', height: 'auto', marginRight: '10px' }} />
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: 'left', display: { xs: 'none', sm: 'block' }, fontFamily: 'Major Mono Display, monospace', fontSize: '1.5rem' }}
          >
            RAVEN
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} component={Link} to={item === 'Home' ? '/' : `/${item.toLowerCase() === 'add' ? 'organisations/add' : item.toLowerCase()}`} sx={{ color: '#fff', fontFamily: 'News Cycle, sans-serif', fontSize: '1.25rem' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: { sm: 10, xs: 0 } }}> {/* Adjust the margin top (mt) to account for the taller AppBar */}
        {/* Content goes here */}
      </Box>
    </Box>
  );
}