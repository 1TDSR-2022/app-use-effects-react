import React from 'react'

export default function Consumer(){
    
    useEffect(() => {
        Document.title = "USE-EFFECTS"
    }, [])

    return (

        
        <div>
            <h1>Lista de Usuários do GitHub</h1>
        </div>
    )
}