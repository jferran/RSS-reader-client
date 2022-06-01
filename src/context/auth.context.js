import {createContext, useEffect, useState} from 'react'
import { verifyService } from '../services/auth.services'

const AuthContext = createContext()

function AuthWrapper(props){
    //todos los estados y funciones a utilizar dentro del contexto
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const authenticateUser = async () => {
        setIsLoading(true)
        try {
            
            // donde llamaremos a esa ruta verify
            const response = await verifyService(user)
            console.log("Token valido")
            console.log("el payload es:", response.data)
            setIsLoggedIn(true)
            setUser(response.data)
            setIsLoading(false)

        } catch (error) {
            console.log("El usuario no tiene token o el token no es valido")
            setIsLoggedIn(false)
            setUser(null)
            setIsLoading(false)
        }
    }

    const passedContext = {
        isLoggedIn,
        user,
        authenticateUser
    }

    useEffect(()=>{
        authenticateUser()
    },[])

    if (isLoading) return <div className='App'><h3>Verificando Usuario</h3></div>
    
    return (
        <AuthContext.Provider value={passedContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthWrapper}