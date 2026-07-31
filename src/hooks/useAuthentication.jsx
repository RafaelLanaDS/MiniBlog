import { db } from "../firebase/config"

import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)      // vai guardar mensagens de erro
    const [loading, setLoading] = useState(null)  // vai indicar se tá carregando (ex: "logando...")
    const [cancelled, setCancelled] = useState(null) // controle de cleanup
    const auth = getAuth() // pega a instância de autenticação do Firebase
    
    //cleanup
    //deal with memory leak
    
    const checkIfIsCancelled = () => {
        if(cancelled){
            return
        }
    }

    //Register
    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)

            return user

        } catch (error) {

            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"
            } else if (error.message.includes("email-already")){
                systemErrorMessage = "E-mail ja cadastrado"
            }else {
                systemErrorMessage = "Ocorreu um erro tente mais tarde"
            }

            setLoading(false)

            setError(systemErrorMessage)
        } finally {
            setLoading(false)
        }
    }

    //Logout - sign out
    const logout = () => {
        checkIfIsCancelled()

        signOut(auth)
    }

    // Login - sign in
    const login = async(data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        } catch (error) {
            let systemErrorMessage

            if(error.message.includes("user-not-found")){
                systemErrorMessage = "Usuario não encontrado"
            }else if(error.message.includes("wrong-password")){
                systemErrorMessage = "Senha incorreta"
            }else {
                systemErrorMessage = "ocorreu um erro tente mais tarde "
            }

            setError(systemErrorMessage)
            setLoading(false)
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    }
}

