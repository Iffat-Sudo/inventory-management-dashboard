import { AppBar, Toolbar, Typography, Box, Avatar } from '@mui/material';

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#f8fafc',
        color: '#0f172a',
        boxShadow: 'none',
        borderBottom: '1px solid #e2e8f0',
        width: `calc(100% - 220px)`,
        ml: '220px',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap>
          Inventory Management Dashboard
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ width: 32, height: 32, bgcolor: '#3B82F6' }}>I</Avatar>
          <Typography>Iffat</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;