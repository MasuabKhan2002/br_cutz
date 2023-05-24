import { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Navigate } from "react-router-dom";
import LogInAuth from "../firebase/auth";

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
        } else if (!regex.test(emailvalue)) {
            showError('Email is Invalid');
        }
        if (!passwordvalue) {
            showError('Password is required')
        }
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
      return <Navigate to="/"/>;          
    }

    return(
        <>
            <Toast ref={toast} />
            <div class="flex justify-content-center align-items-center pt-8">
                <p class="font-semibold p-4 text-3xl text-white">Log-In</p>
            </div>
            <div class="flex justify-content-center align-items-center">
                <div class="box bg-primary p-5 text-center w-4 h-20rem">
                    <p class="font-semibold p-4 text-xl">Email</p>
                    <div class="flex justify-content-center">
                        <span className="p-input-icon-left">
                            <i className="pi pi-user"/>
                            <InputText 
                                value={emailvalue} 
                                onChange={(e) => setEmailvalue(e.target.value)}
                                placeholder="E.g User@gmail.com"/>        
                        </span>
                    </div>
                    <p class="font-semibold p-4 text-xl">Password</p>
                    <div class="flex justify-content-center">
                        <span className="p-input-icon-left">
                            <i className="pi pi-user"/>
                            <Password 
                                value={passwordvalue} 
                                onChange={(e) => setPasswordvalue(e.target.value)}
                                placeholder="Password"
                                feedback={false}/>
                        </span>
                    </div>
                    <div class="p-4 flex justify-content-center">
                        <Button
                            label="Log In"
                            icon="pi pi-check"
                            iconPos="right"
                            className="surface-900"
                            loading={loading}
                            onClick={handleSubmit}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginScreen;