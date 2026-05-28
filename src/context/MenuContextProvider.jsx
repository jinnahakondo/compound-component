import { useState } from "react"
import { MenuContext } from "./MenuContext"


export default function MenuContextProvider({ children }) {

    const [open, setOpen] = useState(false)
    console.log(open);
    const menuInfo = { open, setOpen }
    return (
        <MenuContext value={menuInfo}>
            {children}
        </MenuContext>
    )
}
