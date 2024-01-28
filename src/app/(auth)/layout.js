"use client"
import useHeader from "@/hooks/useHeader"
import { useEffect, useState } from "react"

export default function Layout({ children }) {
    const [isOptionChanged, setIsOptionChanged] = useState(false)
    const {changeOptions} = useHeader()
    useEffect(() => {
        changeOptions({shown: false})
        setIsOptionChanged(true)
    }, [])
    return isOptionChanged ? children : null
}