import { FaBars } from "react-icons/fa";
import Menu from "./menu/Menu";


export default function Navbar() {
    return (
        <div>
            <Menu className={`w-full`} >
                <Menu.Logo>Logo</Menu.Logo>
                <Menu.Items>
                    <Menu.Item href={'/about'}>Home</Menu.Item>
                    <Menu.Item href={'/about'}>About</Menu.Item>
                </Menu.Items>
                <Menu.Bar >
                    <FaBars />
                </Menu.Bar>
            </Menu>
        </div>
    )
}
