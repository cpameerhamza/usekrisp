import "./signup.css";
import "../css/authStyles.css";
import googleIcon from "../../../assets/google-ico.png";
import closeIcon from "../../../assets/close-ico.png";
import { Link } from "react-router-dom";

const Signup = () => {
    return(
        <>
            <div className="popup">
                <div className="content small">
                    <div className="holder relative">
                        <header className="popup-header">
                            <h2>Create your account</h2>
                            <p>Register to your account to manage your profile, view leads, connect with customers, and take advantage of all the features.</p>
                        </header>
                        <form className="auth-form">
                            <div className="field-row flex">
                                <div className="field-col">
                                    <input type="text" placeholder="First name" className="fname-input" />
                                </div>
                                <div className="field-col">
                                    <input type="text" placeholder="Last name" className="lname-input" />
                                </div>
                            </div>
                            <div className="field-row flex">
                                <div className="field-col">
                                    <input type="text" placeholder="Email address" className="email-input" />
                                </div>
                                <div className="field-col">
                                    <input type="text" placeholder="+1 (111)11-111-111" className="tel-input" />
                                </div>
                            </div>
                            <div className="field-row flex">
                                <div className="field-col">
                                    <input type="text" placeholder="City" className="city-input" />
                                </div>
                                <div className="field-col">
                                    <select className="state-input">
                                        <option>State</option>
                                        <option>State 1</option>
                                        <option>State 2</option>
                                        <option>State 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="field-row flex">
                                <input type="text" placeholder="Street Address" className="street-input" />
                            </div>
                            <div className="field-row flex">
                            <input type="password" placeholder="Password" className="pass-input" />
                            </div>
                            <div className="field-row flex text">
                                <input type="checkbox" id="accept-terms" className="hidden fancy-check" />
                                <label htmlFor="accept-terms" className="fancy-checkbox">Accept to <Link to="/">Privacy Policy</Link> and <Link to="/">Terms & conditions</Link></label>
                            </div>
                            <div className="field-row flex">
                                <input type="submit" value="Signup" />
                            </div>
                            <div className="or"><span>OR</span></div>
                            <div className="google-login">
                                <img src={googleIcon} alt="#" />
                                <span>Continue with Google</span>
                            </div>
                            <div className="field-row misc-text flex">
                                <p>Already have an account? <button type="button" className="btn-create">Login</button></p>
                            </div>
                        </form>
                        <button type="button" className="btn-close"><img src={closeIcon} alt="#" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup