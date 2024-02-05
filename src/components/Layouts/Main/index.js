"use client"
import Header from "@/components/header"
import useHeader from "@/hooks/useHeader"
import SpinnerLoading from "@/components/UI/Loader"
import { useEffect, useState } from "react"

export const Layout = ({ children }) => {
  const {options} = useHeader()
  const [pageLoaded, setPageLoaded] = useState(false)
  useEffect(() => {
    setTimeout(() => setPageLoaded(true), 1000)
  }, [])
  return (
    <>
      {!pageLoaded && <SpinnerLoading />}
      {options?.shown != false ? <Header /> : null}
      {children}
    </>
  )
}