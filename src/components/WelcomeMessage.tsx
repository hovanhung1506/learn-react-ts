import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

interface WelcomeMessageProps {
  position: string;
  country?: string;
}

const WelcomeMessage = ({ position, country = 'Vietnam' }: WelcomeMessageProps) => {
  const {authInfo: {username}} = useContext(AuthContext);
  return (
    <Box mb={1}>
      Welcome {username} - {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
