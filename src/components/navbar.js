import { useState } from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { SignOut } from "../firebase/auth";

export default function Navbar() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const signOutPressed = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            SignOut();
            navigate("/login");
        }, 1000);
    };

    const settingsPressed = () => {
        navigate("/admin/settings/profile");
    };

    const homePressed = () => {
        navigate("/admin/dashboard/bookings");
    };

    function toggleBurgerMenu() {
        document.querySelector('.navbar-menu').classList.toggle('is-active');
    };

    return (
        <nav className="navbar p-3 shadow-3 surface-200" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <p className="text-3xl">BRCUTZ</p>
                </div>

                <p role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleBurgerMenu}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </p>
            </div>

            <div className="navbar-menu surface-200 shadow-none" id="navbarBasicExample">
                <div className="navbar-start">
                    <div className="navbar-item">
                        <Button label="Dashboard" icon="pi pi-home" iconPos="right" onClick={homePressed}/>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <Button icon="pi pi-cog" onClick={settingsPressed}/>
                    </div>
                    <div className="navbar-item">
                        <Button icon="pi pi-sign-out" loading={loading} onClick={signOutPressed}/>
                    </div>
                </div>
            </div>
        </nav>
    );
};