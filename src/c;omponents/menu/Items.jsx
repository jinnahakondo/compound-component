import { useContext } from "react"
import { MenuContext } from "../../context/MenuContext"


export default function Items({ children }) {
    const { open } = useContext(MenuContext)
    return (
        <div className={`flex gap-2 items-center ${open ? 'flex' : 'hidden'} absolute top-full right-4 mt-2 w-44 flex-col bg-white rounded-lg shadow-lg p-2`}>
            {open ? children : null}
        </div>
    )
}
