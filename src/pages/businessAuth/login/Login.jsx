import "./login.css";
import "../css/authStyles.css";
import googleIcon from "../../../assets/google-ico.png";
import closeIcon from "../../../assets/close-ico.png";

const Login = () => {
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
                            <div className="field-row flex">
                                <input type="text" placeholder="Email address" className="email-input" />
                            </div>
                            <div className="field-row flex">
                                <input type="password" placeholder="Password" className="password-input" />
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
                                <p>Don’t have an account? <button type="button" className="btn-create">Create One!</button></p>
                            </div>
                        </form>
                        <button type="button" className="btn-close"><img src={closeIcon} alt="#" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login