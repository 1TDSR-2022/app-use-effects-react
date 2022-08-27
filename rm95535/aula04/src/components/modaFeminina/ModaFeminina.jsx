import React from 'react'

export default function ModaFeminina() {
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
            <img src='https://secretocloset.com.br/media/catalog/category/BANNER-ROUPAS.jpg' width={'100%'}></img>
        </div>
    </div>

    <div style={divStyleOptions}>
        <div>
            <img src='https://images.tcdn.com.br/img/img_prod/838861/vestido_longo_jeri_barrados_pontilhados_tucanos_e_araras_fundo_salmao_4385_1_6b37c38f3ef7bfa800534347508d867d.jpg' width={'250px'}></img>
        </div>

        <div>
            <img src='https://images.tcdn.com.br/img/img_prod/838861/vestido_curto_atena_folhagens_tons_terrosos_fundo_off_white_e_barrado_terracota_4303_1_62b72f7cc853a90db51b92dbf014b351.jpg' width={'250px'}></img>
        </div>

        <div>
            <img src='https://a-static.mlcdn.com.br/1500x1500/vestido-estampado-com-marcacao-de-cintura-moikana/moikana1/143018/98d37a507c9e11e846b55af2deb57878.jpg' width={'190px'}></img>
        </div>

        <div>
            <img src='https://images2.marisa.com.br/medias/sys_master/images/images/he1/h1a/9255189250078/Vestido-feminino-Modelo-Midi-listrado-null-10027751770-C2.jpg' width={'250px'}></img>
        </div>

        <div>
            <img src='https://images.tcdn.com.br/img/img_prod/838861/vestido_longo_tulipa_frutinhas_e_folhagens_fundo_vinho_4353_1_f3bc61699a74283f88cad95afd462419.jpg' width={'250px'}></img>
        </div>
    </div>

    </>
  )
}
