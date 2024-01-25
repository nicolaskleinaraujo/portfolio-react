// Modules
import { createContext, useState } from "react"

// Context
export const LangContext = createContext()

// Provider
export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState("br")

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    )
}
