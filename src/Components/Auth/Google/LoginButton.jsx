import React, { useState } from "react";
import './LoginButton.css'
import { GoogleLogin, GoogleLogout } from "react-google-login";

const GoogleLoginPage = () => {
    const client_id = "544792226859-ebg2fcr24ggqgq0k9iop5a3n2s26384q.apps.googleusercontent.com";
    const [showLoginButton, setLoginButton] = useState(true);
    const [showLogoutButton, setLogoutButton] = useState(false);
    const loginHandler = (res) => {
        console.log("res", res.profileObj);
        console.log("this is my")
        setLoginButton(false);
        setLogoutButton(true);
    };
    const failureHandler = (res) => {
        console.log("login failed", res);
    };
    const logoutHandler = (res) => {
        alert("logout sucessfully");
        setLoginButton(true);
        setLogoutButton(false);
    };
    return (
        <>
            {showLoginButton && (
                <>
                    <GoogleLogin
                        clientId="544792226859-ebg2fcr24ggqgq0k9iop5a3n2s26384q.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button
                                className="btn button btn-outline google-btn"
                                style={{ color: 'black' }}
                                onClick={renderProps.onClick}
                            // disabled={renderProps.disabled}
                            >
                                <img src='https://fatoura.work/assets/images/google.svg' alt="" width="20px"/>
                                &nbsp; Sign in with google
                            </button>
                        )}
                        onSuccess={loginHandler}
                        onFailure={failureHandler}
                        cookiePolicy={"single_host_origin"}
                    />
                </>
            )}
            
            {showLogoutButton && (
                <GoogleLogout
                    clientId={client_id}
                    render={(renderProps) => (
                        <button
                            className="btn button btn-outline"
                            style={{ color: 'black' }}
                            onClick={renderProps.onClick}
                        >
                            <img src='https://fatoura.work/assets/images/google.svg' alt=""/>
                            &nbsp; Sign in with google
                        </button>
                    )}
                    onLogoutSuccess={logoutHandler}
                ></GoogleLogout>
            )}
        </>
    );
};
export default GoogleLoginPage;