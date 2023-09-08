import { useContext } from 'react'
import { ThemeContext } from '../context/Theme'

export default function Contatos() {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <>
            <h1>Contatos</h1>
            <button onClick={toggleTheme}>Mudar tema</button>
            <p>O tema atual é: {theme}</p>
        </>
    )
}