"use client"
import { createContext, useContext, useEffect, useState } from "react";

const HeaderContext = createContext(null)


function HeaderProvider({children}) {
    const defaultO = {
        shown: true
    }
    const [options, setOptions] = useState(null)
    const changeOptions = (nOptions) => {
        setOptions((prev) => ({...prev,...nOptions}))
    }
    const resetOptions = () => {
        setOptions(defaultO)
    }
    useEffect(() => {
        setOptions(defaultO)
    }, [])
    return (
        <HeaderContext.Provider value={{options, changeOptions, resetOptions}}>
            {children}
        </HeaderContext.Provider>
    );
}

const useHeader = () => useContext(HeaderContext)
export default useHeader

export { HeaderProvider }   