import { useEffect } from "react"

export default function App(){

    useEffect(()=>{
        document.tittle = "use-effect"

    },[])

    useEffect(()=>{
        document.tittle = "use-state atualizado"

    },[repositorios])

    return(
        <div>
            <h1>Lista de usuários do GitHub</h1>
            <Consumer/>
        </div>
    )
}