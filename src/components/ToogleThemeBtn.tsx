import { Fab, Theme } from '@mui/material';
import React, { useContext } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { ThemeContext } from '../Contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    floatBtn: {
      position: 'fixed',
      right: '3rem',
      bottom: '3rem',
    },
  });
});

const ToogleThemeBtn = () => {
  const classes = useStyles();
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <Fab 
      color={theme} variant="extended" className={classes.floatBtn} 
      onClick={toggleTheme.bind(this, theme === 'primary' ? 'secondary' : 'primary')}
    >
      Toogle Theme
    </Fab>
  );
};

export default ToogleThemeBtn;
