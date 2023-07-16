import { NavLink } from "react-router-dom";

export default function Sidebar( {props} ) {
    return (
        <aside className="menu shadow-3 surface-200 p-5 pl-6 md:h-screen">
            <p className="menu-label font-bold">
                General
            </p>
            <ul className="menu-list">
                {props.map((nav, index) => (
                    <li key={index}><NavLink to={nav.path} className={({ isActive, isPending }) => isPending ? "" : isActive ? "bg-blue-500 text-white" : ""}>{nav.label}</NavLink></li>
                ))}
            </ul>
        </aside>
    );  
};