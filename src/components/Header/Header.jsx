import { NavLink } from "react-router-dom";
import "./header.scss";

export const Header = () => {
    return (
        <header>
            <NavLink to="/images">Каталог</NavLink>
            <NavLink to="/users">Наши клиенты</NavLink>
        </header>
    );
};
