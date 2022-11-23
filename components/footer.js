import React from 'react';
import { useTheme } from 'next-themes';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { } from 'react-icons/fi'


function MainFooter() {
    const {theme, setTheme} = useTheme();
    return (
        <div className={theme == "dark" ? "dark" : ""}>
            <div>
            <h2 className="text-sm flex font-inter font-extralight justify-center lg:px-20 py-5 md:px-10 sm:px-5 text-lg prose max-w-screen-2xl dark:bg-gray-900 dark:text-slate-50 bg-white text-black">© Brandon Fallin 2022</h2>
            </div>
        </div>
    );
}

export default MainFooter;