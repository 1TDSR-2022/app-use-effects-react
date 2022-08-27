import React from 'react'

export default function ModaFeminina() {
  const divStyleWoman = {
    display: 'flex-column',
  }
  const divStyleWomanOptions = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '30px'
  }
  
  return (
    <>
    <div style={divStyleWoman}> 
        <div>
            <img src='https://3.bp.blogspot.com/-Jhz-aQujuPs/W4lgbXAYV0I/AAAAAAAAQtc/rxiKJjp0OHEEB33fMxZz4gVbu2VAqfeIQCLcBGAs/s1600/listras%2Bprimaver%25C3%25A3o%2Bver%25C3%25A3o%2B2019%2Bonde%2Bcomprar%2B2.png' width={'100%'}></img>
        </div>
    </div>
    <div style={{display:'flex', justifyContent:'space-around'}}>
    <div style={divStyleWomanOptions}>
        <div>
            <img src='https://loja.donnamodelli.com.br/resources/img/blog-de-moda-feminina.jpg' width={'250px'}></img>
        </div>
    </div>

    <div style={divStyleWomanOptions}>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3fyAuulbEGihPdkj7uXsU3klsDuF67js4Q&usqp=CAU' width={'250px'}></img>
        </div>
    </div>
    
    </div>
    </>  
  )
}
