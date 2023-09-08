import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="contatos">Contatos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}