import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { observer } from 'mobx-react-lite';
import { MainHeaderMenu } from './components/main-header-menu';
import { SearchBar } from './components/search-bar';
import { ContactEdit } from '../ContactEdit';
import { Contact } from '../../services';
import { contactsStore } from '../../stores';

export const MainHeader = observer(() => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleContactEdit = (values: Contact) => {
    return contactsStore.add(values);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Контакты
          </Typography>
          <SearchBar />
          <ContactEdit onSubmit={handleContactEdit}/>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              size="large"
              edge="end"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <MainHeaderMenu
        anchorEl={anchorEl}
        isMenuOpen={isMenuOpen}
        setAnchorEl={setAnchorEl}
      />
    </Box>
  );
});
