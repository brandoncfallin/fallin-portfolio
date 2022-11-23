import React from 'react';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import MainNav from '../components/main-nav';

import { Main } from 'next/document';

export default function Home() {
  const {theme, setTheme} = useTheme();
  return (
    <div className={theme == "dark" ? "dark" : ""}>
      <Head>
        <title>Brandon Fallin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 text-black">
        <section className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="pb-6 text-4xl font-inter font-extrabold leading-9 tracking-tight text-gray-900 dark:text-slate-50 sm:text-5xl sm:leading-10 md:text-6xl md:leading-14">
              Hi👋, I'm
              <span class="font-inter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Brandon</span>
              .
            </h1>
            <h2 className="mb-10 lg:px-20 md:px-10 sm:px-5 text-lg prose max-w-screen-2xl dark:text-slate-50">I'm currently an Aerospace Engineering PhD student at the University of Florida. My research focuses on differential privacy and its applications to control systems.</h2>
            <div className="cursor-pointer text-3xl flex justify-center gap-10 dark:bg-gray-900 dark:text-slate-50 bg-white text-black">
                <a href="https://github.com/trophyguarder" target="_blank"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/brandonfallin/" target="_blank"><AiFillLinkedin /></a>
                <a href="https://www.youtube.com/fallincam" target="_blank"><AiFillYoutube /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
