import { useContext } from "react"
import { ThemeContext } from "../context/Theme"

export default function Home() {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <>
            <h1>Home</h1>
            <button onClick={toggleTheme}>Mudar tema</button>
            <div>
                <p>O tema atual é: {theme}</p>
            </div>
        </>
    )
}