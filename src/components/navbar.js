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

    return (
        <nav className="navbar p-3 shadow-3 surface-200">
                <div className="navbar-start">
                    <div className="navbar-item">
                        <Button label="Dashboard" icon="pi pi-home" iconPos="right"/>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <Button icon="pi pi-cog"/>
                    </div>
                    <div className="navbar-item">
                        <Button icon="pi pi-sign-out" loading={loading} onClick={signOutPressed}/>
                    </div>
                </div>
        </nav>
    );
};