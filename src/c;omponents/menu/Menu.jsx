
import Item from "./Item";
import Logo from "./Logo";
import Bar from "./Bar";
import Items from "./Items";

export default function Menu({ children, className }) {
    return (
        <div className={`${className} relative h-20  flex items-center justify-between px-6 bg-white/70 backdrop-blur-sm shadow-sm`}>
            {children}
        </div>
    )
}

Menu.Items = Items
Menu.Item = Item
Menu.Logo = Logo
Menu.Bar = Bar
