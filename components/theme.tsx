'use client';
import React, { useEffect, useState } from 'react'
import { CiLight,CiDark  } from "react-icons/ci";

type Theme = "light" | "dark"; 

export default function Theme() {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark");
        }
        else {
            setTheme('light');
            window.localStorage.setItem("theme","light");
            document.documentElement.classList.remove("dark");

        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;

        if(localTheme) {
            setTheme(localTheme);
            if(localTheme === 'dark'){
                document.documentElement.classList.add("dark")
            }
        } else if (window.matchMedia("(prfrefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    },[])
  return (
    <button className='fixed top-5 right-5 h-[3rem] w-[3rem] bg-white bg-opacity-80 border-white border-opacity-40 shadow-xl rounded-full flex items-center justify-center hover:scale-105 active:scale-105 transition-all'
    onClick={toggleTheme}>
        {theme === "light" ? <CiLight/> : <CiDark/>}
    </button>
  )
}
