import { Link, useLocation } from 'react-router-dom';
import { Drawer, List, ListItemButton, ListItemText, Toolbar, Typography, Box } from '@mui/material';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Suppliers', path: '/suppliers' },
  { label: 'Purchase Orders', path: '/orders' },
];

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const drawerContent = (
    <Box>
      <Toolbar>
        <Typography variant="h6" noWrap>
          📦 InventoryPro
        </Typography>
      </Toolbar>
      <List>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItemButton
              key={item.path}
              component={Link}
              to={item.path}
              selected={isActive}
              onClick={onClose}
              sx={{
                color: 'white',
                '&.Mui-selected': { backgroundColor: '#334155' },
                '&:hover': { backgroundColor: '#334155' },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      {/* Mobile: overlay drawer that opens/closes */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          [`& .MuiDrawer-paper`]: {
            width: 220,
            boxSizing: 'border-box',
            backgroundColor: '#1e293b',
            color: 'white',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop: always-visible sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: 220,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 220,
            boxSizing: 'border-box',
            backgroundColor: '#1e293b',
            color: 'white',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Sidebar;