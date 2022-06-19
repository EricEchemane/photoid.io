import '../styles/globals.css';
import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookies } from 'cookies-next';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { AppStateProvider } from 'contexts/AppState';

export default function App(props: AppProps & { colorScheme: ColorScheme; }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AppStateProvider>
          <Component {...pageProps} />
        </AppStateProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext; }) => ({
  // get color scheme from cookie
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});