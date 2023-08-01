import "./signup.css";
import "../css/authStyles.css";
import googleIcon from "../../../assets/google-ico.png";
import closeIcon from "../../../assets/close-ico.png";
import { userInputIcon, emailIcon, locationIcon, streetIcon, passIcon, closedEye } from "../../../shared/utils/svgIcons";
import { Link } from "react-router-dom";

const Signup = ({setShowLogin, setShowSignup, setShowAuth, setShowHours}) => {
    const closePopup = () => {
        setShowAuth(false);
    }
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
                                <div className="field-col ico-holder">
                                    <input type="text" placeholder="First name" className="fname-input" />
                                    <div className="input-ico left">{userInputIcon()}</div>
                                </div>
                                <div className="field-col ico-holder">
                                    <input type="text" placeholder="Last name" className="lname-input" />
                                    <div className="input-ico left">{userInputIcon()}</div>
                                </div>
                            </div>
                            <div className="field-row flex">
                                <div className="field-col ico-holder">
                                    <input type="text" placeholder="Email address" className="email-input" />
                                    <div className="input-ico left">{emailIcon()}</div>
                                </div>
                                <div className="field-col ico-holder">
                                    <input type="text" placeholder="+1 (111)11-111-111" className="tel-input" />
                                </div>
                            </div>
                            <div className="field-row flex">
                                <div className="field-col ico-holder">
                                    <input type="text" placeholder="City" className="city-input" />
                                    <div className="input-ico left">{locationIcon()}</div>
                                </div>
                                <div className="field-col ico-holder">
                                    <select className="state-input">
                                        <option>State</option>
                                        <option>State 1</option>
                                        <option>State 2</option>
                                        <option>State 3</option>
                                    </select>
                                    <div className="input-ico left">{locationIcon()}</div>
                                </div>
                            </div>
                            <div className="field-row flex ico-holder">
                                <input type="text" placeholder="Street Address" className="street-input" />
                                <div className="input-ico left">{streetIcon()}</div>
                            </div>
                            <div className="field-row flex ico-holder">
                            <input type="password" placeholder="Password" className="pass-input" />
                            <div className="input-ico left">{passIcon()}</div>
                            <button type="button" className="input-ico">{closedEye()}</button>
                            </div>
                            <div className="field-row flex text">
                                <input type="checkbox" id="accept-terms" className="hidden fancy-check" />
                                <label htmlFor="accept-terms" className="fancy-checkbox">Accept to <Link to="/">Privacy Policy</Link> and <Link to="/">Terms & conditions</Link></label>
                            </div>
                            <div className="field-row flex">
                                <input type="submit" value="Signup" />
                                {/* <button type="button" className="submit-btn" onClick={() => setShowHours(true)}>Signup</button> */}
                            </div>
                            <div className="or"><span>OR</span></div>
                            <div className="google-login">
                                <img src={googleIcon} alt="#" />
                                <span>Continue with Google</span>
                            </div>
                            <div className="field-row misc-text flex">
                                <p>Already have an account? <button type="button" className="btn-create" onClick={() => setShowSignup(false)}>Login</button></p>
                            </div>
                        </form>
                        <button type="button" className="btn-close" onClick={closePopup}><img src={closeIcon} alt="#" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup