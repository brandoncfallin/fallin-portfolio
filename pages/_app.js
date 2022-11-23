import '../styles/globals.css'
import React from 'react';
import Layout from '../components/layout';
import { ThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';
import Home from '.';

function MyApp({ Component, pageProps }) {
  const {theme, setTheme} = useTheme();
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen dark:bg-gray-900">
        <Layout theme={theme} setTheme={setTheme}>
          <Component theme={theme} setTheme={setTheme} {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  )
}

export default MyApp