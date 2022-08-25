import { Link } from "react-router-dom";
import './Menu.css'

export default function Menu(){
    
    return(
        <nav>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/modaFem'}>Moda Feminina</Link></li>
                <li><Link to={'/modaMasc'}>Moda Masculina</Link></li>
                <li><Link to={'/modaInf'}>Moda Infantil</Link></li>
                <li><Link to={'/sobre'}>Sobre</Link></li>
            </ul>
        </nav>
    )
}