import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

interface LoginProps {
  isOpen: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({isOpen, handleClose}: LoginProps) => {

  const { toggleAuth } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onLoginSubmit = () => {
    toggleAuth(username);
    setUsername('');
    handleClose(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose.bind(this, false)}>
      <DialogContent>
        <TextField
          label="Username"
          onChange={onUsernameChange}
          required
          value={username}
          variant="standard"
          sx={{ width: 300 }}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="contained" onClick={onLoginSubmit} disabled={username === ''}>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
