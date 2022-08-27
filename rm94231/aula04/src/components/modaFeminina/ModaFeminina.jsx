import React from 'react'

export default function ModaFeminina() {
  const divStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  }
  
    return (
    <>
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <div>
            <img src='https://i.pinimg.com/originals/0f/2a/ec/0f2aecb2506aa75aa0c5a18c6f696d29.jpg'></img>
        </div>

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

            <div>
                <img src='https://img.ltwebstatic.com/images3_pi/2022/07/25/165871689282cd8cd593b1a7f74c8b349afff22f10.webp' width={'250px'}></img>
            </div>

            <div>
                <img src='https://img.ltwebstatic.com/images2_pi/2018/12/05/1543988839885282903.webp' width={'250px'}></img>
            </div>
        </div>
    </div>
    </>
  )
}
