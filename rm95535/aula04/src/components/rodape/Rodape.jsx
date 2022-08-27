import React from 'react'

export default function Rodape() {

    const lista={
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center'
      }
  
    return (
    
    <footer>
        <ul style={lista}>
            <li><img src='https://img.icons8.com/plasticine/100/FA5252/facebook-new.png' width={'50px'}></img></li>
            <li><img src='https://img.icons8.com/plasticine/100/000000/twitter.png' width={'50px'}></img></li>
        </ul>
    </footer>
    
  )
}
