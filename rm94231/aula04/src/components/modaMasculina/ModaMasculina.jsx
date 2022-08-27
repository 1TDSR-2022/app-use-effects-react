import React from 'react'

export default function ModaMasculina() {
    const divStyle = {
        display: 'flex',
        justifyContent: 'space-around',
      }

  return (
    <>
        <div>
        <div>
            <img src='https://www.agencianectarina.com.br/lojavirtual/wp-content/uploads/2021/04/banner-home-2.jpg'></img>
        </div>

            <div style={divStyle}> 
                <div>
                    <img src='https://img.ltwebstatic.com/images3_pi/2022/07/20/165829736154496aeecdd09b18b8c4e64b0dc3d764.webp' width={'250px'}></img>
                </div>

                <div>
                    <img src='https://img.ltwebstatic.com/images3_pi/2022/07/11/1657503225336226a783493c839c1acb05de3662f6.webp' width={'250px'}></img>
                </div>

                <div>
                    <img src='https://img.ltwebstatic.com/images3_pi/2022/07/11/1657527609533516233b3e26c0d398415b21175bd6_thumbnail_900x.webp' width={'250px'}></img>
                </div>

                <div>
                    <img src='https://img.ltwebstatic.com/images3_pi/2021/11/12/163670921296603a5de74ad666beb1d5fd916234d8.webp' width={'250px'}></img>
                </div>

                <div>
                    <img src='https://img.ltwebstatic.com/images3_pi/2022/08/04/1659609542ed283168b69eda49d18cf932ad6dcd1c.webp' width={'250px'}></img>
                </div>
            </div>
        </div>
    </>
  )
}
