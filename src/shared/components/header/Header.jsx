import "./header.css";
import Login from "../../../pages/businessAuth/login/Login";
import Signup from "../../../pages/businessAuth/signup/Signup";
import WorkingHours from "../../../pages/businessAuth/workingHours/WorkingHours";
import ForgotPass from "../../../pages/businessAuth/forgotPass/ForgotPass";
import NewPassword from "../../../pages/businessAuth/newPassword/NewPassword";
import SuceessPopup from "../../components/successPopup/SuccessPopup";

import logo from "../../../assets/logo.png";
import noticeIcon from "../../../assets/notice-ico.png";
import chatIcon from "../../../assets/chat-ico.png";
import userIcon from "../../../assets/user.png";
import profileIcon from "../../../assets/profile-icon.png";
import { accountIcon, cardsIcon, logoutIcon } from "../../utils/svgIcons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
    const [showAuth, setShowAuth] = useState(false);
    const [showNotices, setShowNotices] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showHours, setShowHours] = useState(false);
    // useEffect(() => {
    //     setShowLogin(false);
    //     setShowSignup(false);
    // }, [showHours]);
    const handleNoticesDropdown = () => {
        setShowNotices(!showNotices)
    }
    const handleUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown)
    }
    return(
        <>
            <header id="header">
                <div className="container flex v-center">
                    <Link to="/" className="logo"><img src={logo} alt="Usekrisp" /></Link>
                    <div className="right ml-auto flex v-center">
                        {/* <ul className="list-none flex profile-list">
                            <li className="flex v-center">
                                <img src={profileIcon} alt="#" className="user" />
                                <div className="flex v-center">
                                    <Link to="#">Log In /</Link>
                                    <Link to="#">Sign Up</Link>
                                </div>
                            </li>
                        </ul> */}
                        <ul className="list-none flex">
                            <li onClick={handleNoticesDropdown}>
                                <img src={noticeIcon} alt="#" />
                                <span className="count">2</span>
                                {
                                    showNotices &&
                                    <div className="dropdown">
                                        <h2>Recent Notification</h2>
                                        <ul className="list-none">
                                            <li className="just-now">
                                                <img src={userIcon} alt="#" />
                                                <div className="text">
                                                    <div className="txt">
                                                        <strong>James Smith <span>sent you a text message</span></strong>
                                                    </div>
                                                    <span className="time">Just now</span>
                                                </div>
                                            </li>
                                            <li>
                                                <img src={userIcon} alt="#" />
                                                <div className="text">
                                                    <div className="txt">
                                                        <strong>James Smith <span>sent you a text message</span></strong>
                                                        <div className="buttons">
                                                            <button type="button">Accept</button>
                                                            <button type="button" className="reject">Reject</button>
                                                        </div>
                                                    </div>
                                                    <span className="time">5 mins ago</span>
                                                </div>
                                            </li>
                                            <li>
                                                <img src={userIcon} alt="#" />
                                                <div className="text">
                                                    <div className="txt">
                                                        <strong><span>Your job has been completed.</span></strong>
                                                    </div>
                                                    <span className="time">10 Jun 2023</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </li>
                            <li>
                                <img src={chatIcon} alt="#" />
                                <span className="count">4</span>
                            </li>
                            <li onClick={handleUserDropdown}>
                                <img src={userIcon} alt="#" className="user" />
                                {
                                    showUserDropdown &&
                                    <div className="user-dropdown">
                                        <ul className="list-none">
                                            <li><Link to="/account">{accountIcon()} My Account</Link></li>
                                            <li><Link to="/account">{cardsIcon()} Manage Cards</Link></li>
                                            <li><Link to="/" className="logout-btn">{logoutIcon()} Logout</Link></li>
                                            {/* <li><button type="button" className="logout-btn">{logoutIcon()} Logout</button></li> */}
                                        </ul>
                                    </div>
                                }
                            </li>
                        </ul>
                        <button type="button" className="btn-primary" onClick={() => setShowAuth(true)}>For Businesses</button>
                    </div>
                </div>
            </header>
            {
                showAuth && !showSignup ? <Login setShowAuth={setShowAuth} setShowSignup={setShowSignup}  /> :
                showAuth && showSignup && !showLogin ? <Signup setShowAuth={setShowAuth} setShowLogin={setShowLogin} setShowSignup={setShowSignup} setShowHours={setShowHours} /> : ""
            }
        </>
    )
}

export default Header