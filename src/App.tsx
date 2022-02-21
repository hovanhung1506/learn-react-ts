import { Grid } from '@mui/material';
import React from 'react';
import './App.css';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import ToogleThemeBtn from './components/ToogleThemeBtn';
import TopMovies from './components/TopMovies';
import AuthContextProvider from './Contexts/AuthContext';
import MovieContextProvider from './Contexts/MovieContext';
import ProgressContextProvider from './Contexts/ProgressContext';
import ThemeContextProvider from './Contexts/ThemeContext';
import TopMovieContextProvider from './Contexts/TopMovieContext';

function App() {
  return (
    <div>
      <TopMovieContextProvider>
        <AuthContextProvider>
          <ThemeContextProvider>
            <MovieContextProvider>
              <ProgressContextProvider>
                <Navbar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovies />
                  </Grid>
                  <Grid item xs={8}>
                    <Movies />
                  </Grid>
                </Grid>
                <ToogleThemeBtn />
              </ProgressContextProvider>
            </MovieContextProvider>
          </ThemeContextProvider>
        </AuthContextProvider>
      </TopMovieContextProvider>
    </div>
  );
}

export default App;
