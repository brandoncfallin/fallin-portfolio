import React from 'react';
import { useTheme } from 'next-themes';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { } from 'react-icons/fi'


function MainFooter() {
    const {theme, setTheme} = useTheme();
    return (
        <div className={theme == "dark" ? "dark" : ""}>
            <div className="cursor-pointer text-3xl flex justify-center gap-16 pb-10 dark:bg-gray-900 dark:text-slate-50">
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
            </div>
        </div>
    );
}

export default MainFooter;