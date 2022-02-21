import { AppBar, Box, Button, Chip, FormControl, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import WelcomeMessage from './WelcomeMessage';
import dateFormat from 'dateformat';
import { ProgressContext } from '../Contexts/ProgressContext';
import { ThemeContext } from '../Contexts/ThemeContext';
import Login from './Login';
import { AuthContext } from '../Contexts/AuthContext';

function Navbar() {
  const [position, setPosition] = useState<string>('Full-stack Developer');
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  const onPositionChange = (e: SelectChangeEvent<string>) => setPosition(e.target.value);
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer);
  }, []);
  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);
  const colorText = theme === 'primary' ? '#1976d2' : '#9c27b0';
  const [loginOpen, setLoginOpen] = useState(false);
  const {
    authInfo: { isAuthenticated },
    toggleAuth,
  } = useContext(AuthContext);

  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box display="flex" justifyContent="space-between" alignItems="center" width={1} py={2}>
          <Typography variant="h6">My movies</Typography>
          <Box textAlign="center">
            <WelcomeMessage position={position} country="VietNam" />
            <Chip label={`Last time working on this project: ${lastTime} - Status: ${status}`} sx={{ background: '#f3f3f3' }} />
            <Box mt={1}>
              <FormControl variant="standard">
                <Select value={position} onChange={onPositionChange} sx={{ color: 'white' }}>
                  <MenuItem value="Full-stack Developer">Full-stack Developer</MenuItem>
                  <MenuItem value="Front-end Developer">Front-end Developer</MenuItem>
                  <MenuItem value="Back-end Developer">Back-end Developer</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">{dateFormat(time, 'ddd, mmm d yyyy, hh:MM:ss TT')}</Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                background: '#f3f3f3',
                color: '#000',
                ':hover': { background: '#f3f3f3', color: colorText },
              }}
              onClick={() => (isAuthenticated ? toggleAuth('') : setLoginOpen(true))}
            >
              {isAuthenticated ? 'Logout' : 'Login'}
            </Button>
          </Box>
          <Login isOpen={loginOpen} handleClose={setLoginOpen} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
