import "./login.css";
import "../css/authStyles.css";
import googleIcon from "../../../assets/google-ico.png";
import closeIcon from "../../../assets/close-ico.png";
import { closedEye, emailIcon, passIcon } from "../../../shared/utils/svgIcons";
import { useState } from "react";

const Login = ({setShowSignup, setShowAuth}) => {
    const [showPopup, setShowPopup] = useState(false);
    const closePopup = () => {
        setShowPopup(false);
        setShowAuth(false);
    }
    return(
        <>
            <div className="popup">
                <div className="content small">
                    <div className="holder relative">
                        <header className="popup-header">
                            <h2>Let’s get started</h2>
                            <p>Sign in to your account and gain access to a wide range of service providers in your area.</p>
                        </header>
                        <form className="auth-form">
                            <div className="field-row flex ico-holder">
                                <input type="text" placeholder="Email address" className="email-input" />
                                <div className="input-ico left">{emailIcon()}</div>
                            </div>
                            <div className="field-row flex ico-holder">
                                <input type="password" placeholder="Password" className="password-input" />
                                <div className="input-ico left">{passIcon()}</div>
                                <button type="button" className="input-ico">{closedEye()}</button>
                            </div>
                            <div className="field-row flex">
                                <button type="button" className="forgot-link ml-auto">Forgot Password?</button>
                            </div>
                            <div className="field-row flex">
                                <input type="submit" value="Login" />
                            </div>
                            <div className="or"><span>OR</span></div>
                            <div className="google-login">
                                <img src={googleIcon} alt="#" />
                                <span>Continue with Google</span>
                            </div>
                            <div className="field-row misc-text flex">
                                <p>Don’t have an account? <button type="button" className="btn-create" onClick={() => setShowSignup(true)}>Create One!</button></p>
                            </div>
                        </form>
                        <button type="button" className="btn-close" onClick={closePopup}><img src={closeIcon} alt="#" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login