
import React, { Fragment } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react"


export default function MainHeader() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const pages = [
    { key: 'Home', nav: '/' },
    { key: 'Technology', nav: '/technology' },
    { key: 'HR', nav: '/hr' },
  ];

  const { data: session, status } = useSession();

  const loading = status === "loading";

  const SignInOutContent = () => {
    return (
      <span style={{ padding: '0 0 0 760px' }}>
        {!session && !loading && (
          <>
            <Button color="inherit" onClick={e => {
              e.preventDefault()
              signIn()
            }
            }>Login</Button>
          </>
        )}
        {session && (
          <>
            <Button color="inherit" onClick={e => {
              e.preventDefault()
              signOut()
            }}>Logout</Button>

          </>
        )}
      </span>
    );

  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{ padding: '0 30px' }} >
              AKQA Intranet
            </Typography>
            {pages.map((page, index) => (
              <Box key={index} style={{ padding: '0 10px' }}>
                <Link color="primary" href={page.nav}>{page.key}</Link>
              </Box>
            ))}
            {SignInOutContent()}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};
