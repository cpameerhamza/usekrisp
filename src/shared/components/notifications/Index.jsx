import "./index.css";

const Notifications = () => {
    return(
        <>
            <div className="heading flex v-center">
                <h3>Notifications</h3>
            </div>
            <ul className="notifications list-none">
                <li className="flex v-center">
                    <div className="text">
                        <strong>Email Notifications</strong>
                        <p>Get emails to find out what’s going on when you’re not online. You’ll receive notification about customers, tasks/leads and payments.</p>
                    </div>
                    <input type="checkbox" id="email-notices" className="hidden" />
                    <label htmlFor="email-notices" className="ml-auto"><div class="btn"></div></label>
                </li>
                <li className="flex v-center">
                    <div className="text">
                        <strong>App Notifications</strong>
                        <p>Get emails to find out what’s going on when you’re not online. You’ll receive notification about customers, tasks/leads and payments.</p>
                    </div>
                    <input type="checkbox" id="app-notices" className="hidden" />
                    <label htmlFor="app-notices" className="ml-auto"><div class="btn"></div></label>
                </li>
            </ul>
        </>
    )
}

export default Notifications