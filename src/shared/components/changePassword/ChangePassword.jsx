
const ChangePassword = () => {
    return(
        <>
            <div className="heading flex v-center">
                <h3>Change password</h3>
            </div>
            <form className="edit-form">
                <div className="edit-row flex v-center">
                    <div className="edit-col">
                        <input type="password" placeholder="Current Password" />
                    </div>
                    <div className="edit-col">
                        <input type="password" placeholder="New Password" />
                    </div>
                </div>
                <div className="edit-row flex v-center">
                    <input type="password" placeholder="Confirm Password" />
                </div>
                <div className="edit-row flex buttons">
                    <button type="button">Cancel</button>
                    <input type="submit" value="Save Changes" />
                </div>
            </form>
        </>
    )
}

export default ChangePassword