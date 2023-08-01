import { emailIcon, locationIcon, streetIcon, userInputIcon } from "../../utils/svgIcons";
import "./editProfile.css";

const EditProfile = () => {
    return(
        <>
            <div className="heading flex v-center">
                <h3>Edit profile</h3>
            </div>
            <form className="edit-form">
                <div className="edit-row flex v-center">
                    <div className="edit-col ico-holder">
                        <input type="text" placeholder="Sarah" />
                        <div className="input-ico left">{userInputIcon()}</div>
                    </div>
                    <div className="edit-col ico-holder">
                        <input type="text" placeholder="Taylor" />
                        <div className="input-ico left">{userInputIcon()}</div>
                    </div>
                </div>
                <div className="edit-row flex v-center">
                    <div className="edit-col ico-holder">
                        <input type="text" placeholder="sarahtaylor4532@gmail.com" />
                        <div className="input-ico left">{emailIcon()}</div>
                    </div>
                    <div className="edit-col">
                        <input type="text" placeholder="+1 (202)-555-0176" />
                    </div>
                </div>
                <div className="edit-row flex v-center">
                    <div className="edit-col ico-holder">
                        <input type="text" placeholder="Charlottesville" />
                        <div className="input-ico left">{locationIcon()}</div>
                    </div>
                    <div className="edit-col ico-holder">
                        <input type="text" placeholder="Vermont" />
                        <div className="input-ico left">{locationIcon()}</div>
                    </div>
                </div>
                <div className="edit-row ico-holder">
                    <input type="text" placeholder="923 Preston Ave, 22903" />
                    <div className="input-ico left">{streetIcon()}</div>
                </div>
                <div className="edit-row">
                    <textarea placeholder="Describe yourself"></textarea>
                </div>
                <div className="edit-row">
                    <textarea placeholder="Describe your skills and experience"></textarea>
                </div>
                <div className="edit-row">
                    <textarea placeholder="Describe your achievements"></textarea>
                </div>
                <div className="edit-row">
                    <textarea placeholder="Describe your work preferences"></textarea>
                </div>
                <div className="edit-row flex buttons">
                    <button type="button">Cancel</button>
                    <input type="submit" value="Save Changes" />
                </div>
            </form>
        </>
    )
}

export default EditProfile