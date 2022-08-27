import React from 'react'

export default function Infantil() {
    const divStyle = {
        display: 'flex',
        justifyContent: 'space-around',
    }
    return (
    <>
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', alignContent: 'space-around'}}>
         <div>
            <img src='https://www.globalmixx.com.br/wp-content/uploads/2017/09/banner-moda-infantil.jpg'></img>
        </div>

        <div style={divStyle}> 
            <div>
                <img src='https://img.ltwebstatic.com/images3_pi/2022/03/29/16485235186b75c5688583ef8624818999fdb5c519_thumbnail_900x.webp' width={'250px'}></img>
            </div>

            <div>
                <img src='https://img.ltwebstatic.com/images3_pi/2022/02/25/16457536084b5e42e0c9253aa8593c0ede72e65f2f.webp' width={'250px'}></img>
            </div>

            <div>
                <img src='https://img.ltwebstatic.com/images3_pi/2022/05/27/16536336734feeb680cf1d0e059a387688f0511e3d.webp' width={'250px'}></img>
            </div>

            <div>
                <img src='https://img.ltwebstatic.com/images3_pi/2022/02/25/164575363889c1b5c845391dd0ad38132d95bf66f1.webp' width={'250px'}></img>
            </div>

            <div>
                <img src='https://img.ltwebstatic.com/images3_pi/2022/02/25/1645753659d9ba7711de9de41b65d74e47283deed4.webp' width={'250px'}></img>
            </div>
        </div>
        </div>
    </>
  )
}
