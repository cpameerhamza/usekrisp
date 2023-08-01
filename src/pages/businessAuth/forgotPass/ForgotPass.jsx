import "./forgotPass.css";
import "../css/authStyles.css";
import googleIcon from "../../../assets/google-ico.png";
import { emailIcon } from "../../../shared/utils/svgIcons";
import closeIcon from "../../../assets/close-ico.png";

const ForgotPass = () => {
    return(
        <>
            <div className="popup">
                <div className="content small">
                    <div className="holder relative">
                        <div className="forgot-screen">
                            <header className="popup-header">
                                <h2>Forgot password</h2>
                                <p>Enter the email address associated with your account and we'll send you 4-digit OTP code to reset your password.</p>
                            </header>
                            <form className="auth-form">
                                <div className="field-row flex ico-holder">
                                    <input type="text" placeholder="Email address" className="email-input" />
                                    <div className="input-ico left">{emailIcon()}</div>
                                </div>
                                <div className="field-row flex">
                                    <input type="submit" value="Send Code" />
                                </div>
                            </form>
                        </div>
                        <div className="otp-screen hidden">
                            <header className="popup-header">
                                <h2>Enter OTP Code</h2>
                                <p>Please enter the one-time password (OTP) you received on your email to change your password.</p>
                            </header>
                            <form className="auth-form">
                                <div className="field-row flex otp-boxes">
                                    <input type="number" placeholder="2" />
                                    <input type="number" placeholder="1" />
                                    <input type="number" placeholder="0" />
                                    <input type="number" placeholder="0" />
                                </div>
                                <div className="field-row flex">
                                    <input type="submit" value="Send Code" />
                                </div>
                                <div className="field-row misc-text flex">
                                    <p>Didn’t received any code? <button type="button" className="btn-create">Resend</button></p>
                                </div>
                            </form>
                        </div>
                        <button type="button" className="btn-close"><img src={closeIcon} alt="#" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPass