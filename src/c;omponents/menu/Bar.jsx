import { useContext } from "react"
import { MenuContext } from "../../context/MenuContext"

export default function Bar({ children }) {
    const { open, setOpen } = useContext(MenuContext)
    return (
        <div>
            <button onClick={() => setOpen(!open)}>{children}</button>
        </div>

    )
}
