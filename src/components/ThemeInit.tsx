"use client"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setThemeAs } from "../store/themeSlice";


const ThemeInit = () => {
    const theme = useSelector((state: RootState) => state.theme);
    const dispatch = useDispatch();
    useEffect(() => {
        const root = document.documentElement;
        root.classList.add('theme-transition');
        root.classList.toggle('dark', theme !== 'light');
        localStorage.setItem('theme', theme);
        const timeout = setTimeout(() => root.classList.remove('theme-transition'), 500);
        return () => clearTimeout(timeout);
    }, [theme]);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            dispatch(setThemeAs(storedTheme));
            document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        }
    }, []);

    return null
}

export default ThemeInit