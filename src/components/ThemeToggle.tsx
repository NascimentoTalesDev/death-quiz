"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [variant, setVariant] = React.useState("light")
    
    const toggleVariant = React.useCallback(() => {
        setVariant((currentVariant) => (currentVariant === 'light' ? "dark" : "light"))        
        // setTheme(variant)
    },[])

  return (
    <div className="text-my_text mb-4">
        {variant === "light" ?
           <button className="p-4" onClick={() => {setTheme("dark"), toggleVariant()}}>
                <Sun /> 
           </button> 
         :
            <button className="p-4" onClick={() => {setTheme("light"), toggleVariant()}}>
                <Moon />
            </button>
        }
    </div>
  )
}
