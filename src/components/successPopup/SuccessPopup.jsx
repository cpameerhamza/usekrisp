import "./successPopup.css";
import closeIcon from "../../assets/close-ico.png";
import sucessIcon from "../..//assets/sucess.png";

const SuccessPopup = () => {
    return(
        <>
            <div className="popup">
                <div className="content small">
                    <div className="holder relative">
                        <div className="sucess-text">
                            <img src={sucessIcon} alt="#" />
                            <h2>Password changed successfully</h2>
                            <p>Your password has been successfully updated. You can now sign in to your account using your new password.</p>
                            <button type="button">Login Now</button>
                        </div>
                        <button type="button" className="btn-close"><img src={closeIcon} alt="#" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuccessPopup