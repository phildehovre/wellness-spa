import { ReactNode } from 'react';
import { AppBar, Box, Container, Toolbar, Typography, Button, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { title: 'Accueil', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'À Propos', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

export const Layout = ({ children }: LayoutProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} component={RouterLink} to={item.path}>
            <ListItemText 
              primary={item.title}
              sx={{ 
                color: theme.palette.text.primary,
                textAlign: 'center',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                color: theme.palette.text.primary,
                textDecoration: 'none',
                fontSize: '1.8rem',
              }}
            >
              Serenity Wellness
            </Typography>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.title}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      color: theme.palette.text.primary,
                      '&:hover': {
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: theme.palette.background.paper,
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Serenity Wellness. Tous droits réservés.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}; 