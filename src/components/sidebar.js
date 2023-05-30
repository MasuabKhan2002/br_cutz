import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="menu shadow-3 surface-200 w-3 p-5 pl-6 h-screen">
            <p className="menu-label font-bold">
                General
            </p>
            <ul className="menu-list">
                <li><NavLink to="/admin/dashboard/home" className={({ isActive, isPending }) => isPending ? "" : isActive ? "bg-blue-500 text-white" : ""}>Dashboard</NavLink></li>
                <li><NavLink to="/admin/dashboard/bookings" className={({ isActive, isPending }) => isPending ? "" : isActive ? "bg-blue-500 text-white" : ""}>Bookings</NavLink></li>
            </ul>
        </aside>
    );
};