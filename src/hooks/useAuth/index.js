"use client"
import { login } from "@/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState, useContext, createContext, useCallback } from "react";
const AuthContext = createContext()
function AuthProvider({children}) {
  const router = useRouter()
  const [user, setUser] = useState(null)

  const logIn = useCallback(({email, password}) => {
    login({email, password}).then(({data: res}) => {
      console.log(res)
      setUser(res.data.user)
      router.replace('/dashboard')
        
    })
    .catch(err => {
        if (err.response) {
            console.log(err.response)
        }
        else {
            //axios error
            console.log(err)
        }
    })
  }, [])
  const signOut = useCallback(() => {
    setUser(null)
    router.replace('/')
  }, [])
  return (
    <AuthContext.Provider value={{logIn, user, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}
const useAuth = () => useContext(AuthContext)
export default useAuth
export {AuthProvider};