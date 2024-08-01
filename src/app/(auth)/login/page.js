"use client"
import { useRouter } from 'next/navigation'
import InputBox from "@/components/Common/InputBox";
import Image from "next/image"
import { useState } from "react";
import useAuth from '@/hooks/useAuth';
function Login() {
    const [formBody, setFormBody] = useState({
        email: "",
        password: ""
    })
    const {logIn} = useAuth()
    const handleSubmit = (e) => {
        e.preventDefault()
        logIn(formBody)

    }
    return (
        <div className="flex h-screen *:basis-full *:flex *:h-full">
            <div className="bg-neutral relative">
                <Image
                    src={"images/login.svg"}
                    alt="login illustration"
                    fill={true}
                    priority
                />
            </div>
            <div className="p-8 flex-col ">
                <div className="flex self-end justify-self-start">
                    <Image
                        width={140}
                        height={61.5}
                        alt="logo"
                        src="/images/logo.svg"
                        priority
                        quality={100}
                        unoptimized
                    />
                </div>
                <div className="flex h-full justify-center flex-col">
                    <form className="flex flex-col gap-y-16">
                        <div className="flex flex-col gap-y-4">
                            <InputContainer>
                                <label>Email</label>
                                <InputBox name="email" placeholder="Enter your email" value={formBody.email} onChange={(e) => setFormBody(prev => ({...prev, email: e.target.value}))}/>
                            </InputContainer>
                            <InputContainer>
                                <label>Password</label>
                                <InputBox name="password" type="password" value={formBody.password} onChange={(e) => setFormBody(prev => ({...prev, password: e.target.value}))}/>
                            </InputContainer>
                        </div>
                        <button onClick={handleSubmit} className='btn-primary'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
function InputContainer({children}) {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    )
}

export default Login;