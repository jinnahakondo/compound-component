import { useContext } from "react"
import { MenuContext } from "../../context/MenuContext"

export default function Bar({ children }) {
    const { open, setOpen } = useContext(MenuContext)
    return (
        <div>
            <button onClick={() => setOpen(!open)} className="p-2 rounded-md border border-slate-200 hover:bg-slate-50">{children}</button>
        </div>

    )
}
