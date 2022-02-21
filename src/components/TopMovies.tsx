import { Box, Card, CardContent, CardHeader, Checkbox, List, ListItem, ListItemIcon, ListItemText, Theme } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { TopMovieContext } from './../Contexts/TopMovieContext';
import { OverridableStringUnion } from '@mui/types';
export interface CheckboxPropsColorOverrides {}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    topMoviesHeader: {
      paddingBottom: 0,
    },
    topMoviesList: {
      paddingTop: 0,
    },
    topMoviesItem: {
      paddingTop: '2px',
      paddingBottom: '2px',
    },
  });
});

const TopMovies = () => {
  const classes = useStyles();
  //context
  const { topMovies, getTopMovies, toggleWatched } = useContext(TopMovieContext);
  const { theme } = useContext(ThemeContext);
  const colorCheckBox = theme as OverridableStringUnion<
    'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default',
    CheckboxPropsColorOverrides
  >;

  useEffect(() => {
    getTopMovies();
  }, []);

  return (
    <Box mt={1} ml={2}>
      <Card raised>
        <CardHeader
          title="Top 10 movies of all time"
          className={classes.topMoviesHeader}
          titleTypographyProps={{ variant: 'h4', align: 'center', color: theme }}
        />
        <CardContent className={classes.topMoviesList}>
          <List>
            {topMovies.map((movie) => (
              <ListItem button className={classes.topMoviesItem} key={movie.imdbID}>
                <ListItemIcon>
                  <Checkbox checked={movie.Watched} onClick={toggleWatched.bind(this, movie.imdbID)} color={colorCheckBox} />
                </ListItemIcon>
                <ListItemText primary={movie.Title} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopMovies;
