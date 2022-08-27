import { Link } from "react-router-dom";

export default function Menu(){
    
    const nav={
        borderRadius: '10px',
        backgroundColor: '#24262b',
        display: 'flex',
        justifyContent: 'center'
    }
    const ul={
        display: 'flex'
    }
    const li={
        listStyle: 'none',
        fontSize: '18px',
        color: '#fff',
        textTransform: 'capitalize',
        fontWeigth: '500',
        position: 'relative'
    }
    const a={
        display: 'inline-block',
        textDecoration: 'none',
        padding: '20px',
        color:'#fff',
        fontSize: '1.em'
    }


    return(
        <nav style={nav}>
            <ul style={ul}>
                <li style={li}><Link style={a} to={'/'}>Home</Link></li>
                <li style={li}><Link style={a} to={'/modaFem'}>Moda Feminina</Link></li>
                <li style={li}><Link style={a} to={'/modaMasc'}>Moda Masculina</Link></li>
                <li style={li}><Link style={a} to={'/modaInf'}>Moda Infantil</Link></li>
                <li style={li}><Link style={a} to={'/sobre'}>Sobre</Link></li>
            </ul>
        </nav>
    )
}