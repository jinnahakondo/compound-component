import { useContext } from "react"
import { MenuContext } from "../../context/MenuContext"


export default function Items({ children }) {
    const { open } = useContext(MenuContext)
    return (
        <div className="flex gap-2 items-center">
            {open ? children : ""}
        </div>
    )
}
