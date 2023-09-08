import { createContext, useState } from "react";

interface Contexto {
    theme: string,
    toggleTheme: () => void
}

export const ThemeContext = createContext<Contexto>()

export function ThemeProvider({children}:any) {

    const [theme, setTheme] = useState("claro")

    function toggleTheme() {
        setTheme(theme === "claro" ? "escuro" : "claro")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}