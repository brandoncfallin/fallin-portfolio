import React from 'react';
import Head from 'next/head';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import MainNav from '../components/main-nav';

import { Main } from 'next/document';

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Brandon Fallin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
        
        </section>
      </main>
    </div>
  );
}
