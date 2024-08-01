"use client"
import useAuth from "@/hooks/useAuth";

function SignOut() {
  const {signOut} = useAuth()
  signOut()
  return
}

export default SignOut;