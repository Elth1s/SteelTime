import { createContext, useContext } from "react"

interface IThemeContent {
    darkTheme: boolean,
    setDarkTheme: (bool: boolean) => void
}

export const ThemeContext = createContext<IThemeContent>({
    darkTheme: true,
    setDarkTheme: () => { }
});

export const useThemeContext = () => useContext(ThemeContext);