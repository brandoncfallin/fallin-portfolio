import React from 'react';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { } from 'react-icons/fi'

function MainFooter({ darkMode, setDarkMode }) {``
    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="cursor-pointer text-3xl flex justify-center gap-16 py-3 pb-10 dark:bg-gray-900 dark:text-slate-50">
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
            </div>
        </div>
    );
}

export default MainFooter;