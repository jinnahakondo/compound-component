
import Item from "./Item";
import Logo from "./Logo";
import Bar from "./Bar";
import Items from "./Items";

export default function Menu({ children, className }) {
    return (
        <div className={`${className} h-20 border-b flex items-center justify-between px-6`}>
            {children}
        </div>
    )
}

Menu.Items = Items
Menu.Item = Item
Menu.Logo = Logo
Menu.Bar = Bar
