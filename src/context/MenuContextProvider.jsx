import { useState } from "react"
import { MenuContext } from "./MenuContext"


export default function MenuContextProvider({ children }) {

    const [open, setOpen] = useState(false)

    return (
        <MenuContext value={open, setOpen}>
            {children}
        </MenuContext>
    )
}
