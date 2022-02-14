import React from "react";
import Link from 'next/link';
import MainHeader from './header/header';
import MainContent from './content/content';
import MainFooter from './footer/footer';
import { StyledEngineProvider } from '@mui/material/styles';

export default function SiteLayout(props) {

  return (
<StyledEngineProvider injectFirst>
      <MainHeader />
      <MainContent {...props} />
      {/* <MainFooter /> */}
</StyledEngineProvider>
  );
};