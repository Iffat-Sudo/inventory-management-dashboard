import { AppBar, Toolbar, Typography, Box, Avatar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface NavbarProps {
  onMenuClick: () => void;
}

function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#f8fafc',
        color: '#0f172a',
        boxShadow: 'none',
        borderBottom: '1px solid #e2e8f0',
        width: { sm: `calc(100% - 220px)` },
        ml: { sm: '220px' },
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Inventory Management Dashboard
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ width: 32, height: 32, bgcolor: '#3B82F6' }}>I</Avatar>
          <Typography>Iffat</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;