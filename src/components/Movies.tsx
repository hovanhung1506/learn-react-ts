import { Box, Button, Chip, TextField, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { OverridableStringUnion } from '@mui/types';
import React, { useContext, useState } from 'react';
import { MovieContext } from '../Contexts/MovieContext';
import { ThemeContext } from '../Contexts/ThemeContext';
interface ChipPropsColorOverrides {}
interface ButtonPropsColorOverrides {}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    moveInput: {
      marginRight: '5px',
    },
    moveChip: {
      fontSize: '2rem',
      padding: '30px 10px',
      margin: '5px',
    },
  });
});

const Movies = () => {
  const classes = useStyles();
  const [movie, setMovie] = useState<string>('');
  const onMovieInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setMovie(e.target.value);
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
  const { theme } = useContext(ThemeContext);
  const chipTheme = theme as OverridableStringUnion<'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning', ChipPropsColorOverrides>;
  const buttonTheme = theme as OverridableStringUnion<'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',ButtonPropsColorOverrides>;

  return (
    <>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your favourite movie..."
          variant="outlined"
          className={classes.moveInput}
          onChange={onMovieInputChange}
          value={movie}
          sx={{ width: '300px' }}
        />
        <Button
          variant="contained"
          color={buttonTheme}
          onClick={() => {
            addMovie(movie);
            setMovie('');
          }}
        >
          Add
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" my={5}>
        {movies.map((movie) => (
          <Chip key={movie.id} label={movie.title} clickable color={chipTheme} className={classes.moveChip} onDelete={deleteMovie.bind(this, movie.id)} />
        ))}
      </Box>
    </>
  );
};

export default Movies;
