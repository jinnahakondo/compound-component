import { useState } from "react"
import { MenuContext } from "./MenuContext"


export default function MenuContextProvider({ children }) {

    const [open, setOpen] = useState(false)
    const menuInfo = { open, setOpen }
    return (
        <MenuContext value={menuInfo}>
            {children}
        </MenuContext>
    )
}
