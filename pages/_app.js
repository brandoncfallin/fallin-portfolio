import '../styles/globals.css'
import React from 'react';
import Layout from '../components/layout';
import Home from '.';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Component darkMode={darkMode} setDarkMode={setDarkMode} {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp