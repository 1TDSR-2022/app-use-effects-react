import React from 'react'

export default function Infantil() {
  const divStyle = {
    display: 'flex-column',
    margin: '10px'
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
            <img src='https://anozero.vteximg.com.br/arquivos/ids/175897/202204-banner-full.jpg?v=637943552208830000' width={'100%'}></img>
        </div>
    </div>

    <div style={divStyleOptions}>
        <div>
            <img src='https://images.tcdn.com.br/img/img_prod/805712/casaco_de_pelinhos_off_white_685_1_b9851c7f4bff5d556cd5f589497fe88e.jpg?1661559152' width={'250px'}></img>
        </div>

        <div>
            <img src='https://images.tcdn.com.br/img/img_prod/805712/vestido_manga_longa_em_malha_com_bolso_nylon_preto_vic_vicky_1203_1_c3bbd62007bc0ed31668b737f92a26f0.jpg?1661559152' width={'250px'}></img>
        </div>

        <div>
            <img src='https://images.tcdn.com.br/img/img_prod/805712/180_vestido_malha_preto_e_blusa_manga_longa_tule_off_white_1221_2_92ea3572b0415b88e787698b61b0d2fb.jpg' width={'250px'}></img>
        </div>

        <div>
            <img src='https://images.tcdn.com.br/img/img_prod/805712/180_conjunto_plush_trio_de_casaco_calca_e_shorts_veludo_verde_com_lilas_1239_2_5df07a73675e9d03d2bb893a65f95d79.jpg' width={'250px'}></img>
        </div>

        <div>
            <img src='https://images.tcdn.com.br/img/img_prod/805712/180_vestido_suede_babado_preto_e_blusa_manga_longa_tule_preto_1215_2_d033279e994a3b932998a9f3ff484b03.jpg' width={'250px'}></img>
        </div>
    </div>

    </>
  )
}