
import React, { Fragment } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/router';


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
    { key: 'Locales', nav: '/locales-examples' },

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

  const router = useRouter();
  // console.log(router);
  const handleLocaleChange = (event) => {
      // console.log('locale selected - ', event.target.value);
      router.push(router.pathname, router.asPath, { locale: event.target.value})
  };

  const LocaleSwitcher = () => {
    return (<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Locales</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={router.locale}
          label="Locales"
          onChange={handleLocaleChange}
        >
          {router.locales.map((locale, index) => {
            return (
              <MenuItem key={index} value={locale}>{locale}
                {/* <Link href={asPath} locale={locale}>
                              {locale}
                          </Link> */}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>);

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
            {LocaleSwitcher()}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};
