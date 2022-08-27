import React from 'react'

export default function ModaMasculina() {
  const divStyle = {
    display: 'flex-column',
  }
  const divStyleOptions = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '30px'
  }
  
    return (
    <>
    
    <div style={divStyle}> 
        <div>
            <img src='https://drazzo.vteximg.com.br/arquivos/ids/204237/Banner_Site_1.jpg?v=637873711603800000' width={'100%'}></img>
        </div>
    </div>

    <div style={divStyleOptions}>
        <div>
            <img src='https://i0.wp.com/www.canalmasculino.com.br/wp-content/uploads/2020/11/tendencia-verao-2021-moda-masculina-camisa-tom-cru.jpg?resize=564%2C653&ssl=1' width={'303px'}></img>
        </div>

        <div>
            <img src='https://1.bp.blogspot.com/-wiyjdf_eIrY/YVMlhfvazII/AAAAAAACql8/mKM2oEkoBoERMI96FftKIFl0sF92uYU2gCLcBGAsYHQ/s788/BERMUDA-DE-SARJA-MASCULINA%2B%25283%2529.jpg' width={'250px'}></img>
        </div>

        <div>
            <img src='https://damyller.vteximg.com.br/arquivos/ids/650924-475-713/BERMUDA-MASCULINA-SLIM-G4C29-Frente--.jpg?v=637731782466030000' width={'233px'}></img>
        </div>

        <div>
            <img src='https://i.pinimg.com/236x/ee/8b/57/ee8b576a584981836c3b8f10ddbda404.jpg' width={'233px'}></img>
        </div>

        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKR32m54jn1NC27zDf4AkIJHMQ6v_BJca3BL8-nBN2p41GdNAIjKK1zL_OiiKgBq9YOiE&usqp=CAU' width={'233px'}></img>
        </div>
    </div>

    </>
  )
}
