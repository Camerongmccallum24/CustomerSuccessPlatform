import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            Customer Success Platform
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box component={Link} to="/customers" sx={{ color: 'inherit', textDecoration: 'none', mr: 2 }}>
            Customers
          </Box>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }}>
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            © 2024 Customer Success Platform
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;