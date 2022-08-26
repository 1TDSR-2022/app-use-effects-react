import React from 'react'

export default function ModaFeminina() {
  const divStyle = {
    display: 'flex',
    justifyContent: 'space-around'
  }
  
    return (
    <div style={divStyle}> 
        <div>
            <img src='https://img.ltwebstatic.com/images3_pi/2022/07/12/1657591199c9d4e104cab098f8195bd4af53bb792b.webp' width={'250px'}></img>
        </div>

        <div>
            <img src='https://img.ltwebstatic.com/images3_pi/2022/07/18/165812863204d4d409546b197825482a5e5fdf09ad.webp' width={'250px'}></img>
        </div>

        <div>
            <img src='https://img.ltwebstatic.com/images3_pi/2022/07/13/165768003061ad495fb20f494ea33f14b426c8be1d.webp' width={'250px'}></img>
        </div>
    </div>
  )
}
