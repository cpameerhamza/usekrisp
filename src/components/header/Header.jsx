import "./header.css";
import Login from "../../pages/businessAuth/login/Login";
// import Signup from "../../pages/businessAuth/signup/Signup";
// import WorkingHours from "../../pages/businessAuth/workingHours/WorkingHours";
// import ForgotPass from "../../pages/businessAuth/forgotPass/ForgotPass";
// import NewPassword from "../../pages/businessAuth/newPassword/NewPassword";
// import SuceessPopup from "../../components/successPopup/SuccessPopup";


import logo from "../../assets/logo.png";
import noticeIcon from "../../assets/notice-ico.png";
import chatIcon from "../../assets/chat-ico.png";
import userIcon from "../../assets/user.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const [showAuth, setShowAuth] = useState(false);
    return(
        <>
            <header id="header">
                <div className="container flex v-center">
                    <Link to="/" className="logo"><img src={logo} alt="Usekrisp" /></Link>
                    <div className="right ml-auto flex v-center">
                        <ul className="list-none flex">
                            <li>
                                <img src={noticeIcon} alt="#" />
                                <span className="count">2</span>
                            </li>
                            <li>
                                <img src={chatIcon} alt="#" />
                                <span className="count">4</span>
                            </li>
                            <li>
                                <img src={userIcon} alt="#" className="user" />
                            </li>
                        </ul>
                        <button type="button" className="btn-primary" onClick={() => setShowAuth(true)}>For Businesses</button>
                    </div>
                </div>
            </header>
            {
                showAuth ? <Login /> : ""
            }
        </>
    )
}

export default Header