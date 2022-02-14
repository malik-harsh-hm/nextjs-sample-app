
import React, { Fragment } from 'react';

import styles from './header.module.css'; // Import css modules stylesheet as styles

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

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

  const { data: session, status } = useSession();
  const loading = status === "loading";

  const SignInOutContent = () => {
    return (
      <Fragment>
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
      </Fragment>
    );

  }

  const pages = [
    { key: 'Home', nav: '/' },
    { key: 'Articles', nav: '/article' },
    { key: 'Markdown Page', nav: '/markdown-example' },
    { key: 'Protected API', nav: '/api-example' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>

      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h4" color="inherit" style={{ padding: '10px' }} >
            Next.js Showcase
          </Typography>
          {pages.map((page, index) => (
            <Button key={index} style={{
              backgroundColor: "white",
              margin: '4px'
            }}
              variant="contained"><Link href={page.nav}>{page.key}</Link></Button>
          ))}
          {SignInOutContent()}
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>

  );
};




