import "./newPassword.css";
import "../css/authStyles.css";
import googleIcon from "../../../assets/google-ico.png";
import { passIcon, closedEye } from "../../../shared/utils/svgIcons";
import closeIcon from "../../../assets/close-ico.png";

const NewPassword = () => {
    return(
        <>
            <div className="popup">
                <div className="content small">
                    <div className="holder relative">
                        <header className="popup-header">
                            <h2>Set new password</h2>
                            <p>Your new password must be different from previously used passwords.</p>
                        </header>
                        <form className="auth-form">
                            <div className="field-row flex ico-holder">
                                <input type="text" placeholder="New password" className="pass-input" />
                                <div className="input-ico left">{passIcon()}</div>
                                <button type="button" className="input-ico">{closedEye()}</button>
                            </div>
                            <div className="field-row flex ico-holder">
                                <input type="password" placeholder="Confirm password" className="password-input" />
                                <div className="input-ico left">{passIcon()}</div>
                                <button type="button" className="input-ico">{closedEye()}</button>
                            </div>
                            <div className="field-row flex">
                                <input type="submit" value="Change Password" />
                            </div>
                        </form>
                        <button type="button" className="btn-close"><img src={closeIcon} alt="#" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewPassword