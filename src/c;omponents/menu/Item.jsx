

export default function Item({ children, href }) {
    return (
        <div>
            <a href={href} className="block text-slate-800 hover:text-blue-600 px-3 py-2 rounded-md transition">{children}</a>
        </div>
    )
}
