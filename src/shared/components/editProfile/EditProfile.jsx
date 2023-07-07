import "./editProfile.css";

const EditProfile = () => {
    return(
        <>
            <div className="heading flex v-center">
                <h3>Edit profile</h3>
            </div>
            <form className="edit-form">
                <div className="edit-row flex v-center">
                    <div className="edit-col">
                        <input type="text" placeholder="Sarah" />
                    </div>
                    <div className="edit-col">
                        <input type="text" placeholder="Taylor" />
                    </div>
                </div>
                <div className="edit-row flex v-center">
                    <div className="edit-col">
                        <input type="text" placeholder="sarahtaylor4532@gmail.com" />
                    </div>
                    <div className="edit-col">
                        <input type="text" placeholder="+1 (202)-555-0176" />
                    </div>
                </div>
                <div className="edit-row flex v-center">
                    <div className="edit-col">
                        <input type="text" placeholder="Charlottesville" />
                    </div>
                    <div className="edit-col">
                        <input type="text" placeholder="Vermont" />
                    </div>
                </div>
                <div className="edit-row">
                    <input type="text" placeholder="923 Preston Ave, 22903" />
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