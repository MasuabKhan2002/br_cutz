import { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Navigate } from "react-router-dom";
import { LogInAuth } from "../firebase/auth";

function LoginScreen() {
    const [emailvalue, setEmailvalue] = useState('');
    const [passwordvalue, setPasswordvalue] = useState('');
    const [loading, setLoading] = useState(false);
    const [navigation, setNavigation] = useState(false);
    const toast = useRef(null);

    const showError = (error) => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: error})
    }

    const validation = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!emailvalue) {
            showError('Email is required')
            return true;
        } else if (!regex.test(emailvalue)) {
            showError('Email is Invalid');
            return true;
        } else if (!passwordvalue) {
            showError('Password is required')
            return true;
        }
        return false;
    }

    const handleSubmit = () => {
        setLoading(true);
        const validationError = validation();

        if (!validationError) {
            LogInAuth(emailvalue, passwordvalue)
                .then((user) => {
                    setLoading(false);
                    setNavigation(true)
                })
                .catch((error) => {
                    setLoading(false);
                    showError('Incorrect Email/Password')
                })
        }

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    if (navigation) {
      return <Navigate to="/admin/dashboard/home"/>;          
    }

    return(
        <>
            <Toast ref={toast} />
            <div className="flex justify-content-center align-items-center pt-8">
                <p className="font-semibold p-4 text-4xl text-surface-900">Sign In</p>
            </div>
            <form onSubmit={handleSubmit} className="flex justify-content-center align-items-center">
                <div className="box bg-primary p-5 text-center w-4 h-20rem">
                    <p className="font-semibold p-4 text-xl">Email</p>
                    <div className="flex justify-content-center">
                        <span className="p-input-icon-left">
                            <i className="pi pi-user"/>
                            <InputText 
                                value={emailvalue} 
                                onChange={(e) => setEmailvalue(e.target.value)}
                                placeholder="E.g User@gmail.com"/>
                        </span>
                    </div>
                    <p className="font-semibold p-4 text-xl">Password</p>
                    <div className="flex justify-content-center">
                        <span className="p-input-icon-left">
                            <i className="pi pi-user"/>
                            <Password 
                                value={passwordvalue} 
                                onChange={(e) => setPasswordvalue(e.target.value)}
                                placeholder="Password"
                                feedback={false}/>
                        </span>
                    </div>
                    <div className="p-4 flex justify-content-center">
                        <Button
                            label="Log In"
                            severity="secondary"
                            type="submit"
                            raised
                            icon="pi pi-check"
                            iconPos="right"
                            loading={loading}
                            onClick={handleSubmit}/>
                    </div>
                </div>
            </form>
        </>
    );
}

export default LoginScreen;