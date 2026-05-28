

export default function Item({ children, href }) {
    return (
        <div>
            <a href={href} className="link">{children}</a>
        </div>
    )
}
