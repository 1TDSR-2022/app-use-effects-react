import React from 'react'
import './estilo.css'

export default function Rodape() {

    const footer={
        lineHeight: '1.5',
        fontFamily: 'Poppins, sans-serif',
        backgroundColor: '#24262b',
        marginTop: '10px',
        borderRadius: '30px',
        padding: '30px 0',
        color: '#C0C0C0'

    }
    const container={
        maxWidht: '1170px ',
        margin: 'auto'
    }
    const row={
        display: 'flex',
        flexWrap: 'wrap'
    }
    const footerCol={
        padding: '0 150px'
    }
    const h4={
        fontSize: '18px',
        color: '#fff',
        textTransform: 'capitalize',
        marginBottom: '35px',
        fontWeigth: '500',
        position: 'relative'
    }
    const ul={
        listStyle: 'none'
    }



    return (
        <footer style={footer}>
            <div style={container}>
                <div style={row}>
                    <div style={footerCol}>
                        <h4 style={h4}>company</h4>
                        <ul style={ul}>
                            <li>about us</li>
                            <li>our services</li>
                            <li>privacy policy</li>
                            <li>affiliate program</li>
                        </ul>
                    </div>
                    <div style={footerCol}>
                        <h4 style={h4}>get help</h4>
                        <ul style={ul}>
                            <li>FAQ</li>
                            <li>shipping</li>
                            <li>returns</li>
                            <li>order status</li>
                            <li>payment options</li>
                        </ul>
                    </div>
                    <div style={footerCol}>
                        <h4 style={h4}>online shop</h4>
                        <ul style={ul}>
                            <li>watch</li>
                            <li>bag</li>
                            <li>shoes</li>
                            <li>dress</li>
                        </ul>
                    </div>
                    <div style={footerCol}>
                        <h4 style={h4}>follow us</h4>
                        <ul style={ul}>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                            <li>LinkeIn</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}