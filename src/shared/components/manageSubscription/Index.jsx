import "./index.css";
import image from "../../../assets/img14.png";

const ManageSubscription = () => {
    return(
        <>
            <div className="heading flex v-center">
                <h3>Manage subscription</h3>
            </div>
            <form className="plans-form">
                <div className="plan-cols flex">
                    <div className="plan-col">
                        <input checked type="radio" id="free-trial" className="hidden" name="group1" />
                        <label htmlFor="free-trial">Free trial</label>
                        <p>have access to a free 30 day trial</p>
                    </div>
                    <div className="plan-col">
                        <input type="radio" id="monthly-plan" className="hidden" name="group1" />
                        <label htmlFor="monthly-plan">Monthly plan</label>
                        <p>Billed monthly</p>
                    </div>
                    <div className="plan-col">
                        <input type="radio" id="annual-plan" className="hidden" name="group1" />
                        <label htmlFor="annual-plan">Annual plan</label>
                        <p>$100 each month</p>
                    </div>
                </div>
                <input type="submit" value="Change Plan" />
            </form>
            
            <div className="table-holder">
                <h2>Transactions history</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Received From</th>
                            <th>Amount</th>
                            <th>Billing Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src={image} alt="#" />
                                <div className="text">
                                    <strong>Dylan Hodges</strong>
                                    <p>#2025550176</p>
                                </div>
                            </td>
                            <td>$112</td>
                            <td>Feb 04, 2023</td>
                            <td>Received</td>
                            <td><button type="button" className="table-btn refunded">Refunded</button></td>
                        </tr>
                        <tr>
                            <td>
                                <img src={image} alt="#" />
                                <div className="text">
                                    <strong>Dylan Hodges</strong>
                                    <p>#2025550176</p>
                                </div>
                            </td>
                            <td>$112</td>
                            <td>Feb 04, 2023</td>
                            <td>Received</td>
                            <td><button type="button" className="table-btn">Refund Amount</button></td>
                        </tr>
                        <tr>
                            <td>
                                <img src={image} alt="#" />
                                <div className="text">
                                    <strong>Dylan Hodges</strong>
                                    <p>#2025550176</p>
                                </div>
                            </td>
                            <td>$112</td>
                            <td>Feb 04, 2023</td>
                            <td>Received</td>
                            <td><button type="button" className="table-btn">Refund Amount</button></td>
                        </tr>
                        <tr>
                            <td>
                                <img src={image} alt="#" />
                                <div className="text">
                                    <strong>Dylan Hodges</strong>
                                    <p>#2025550176</p>
                                </div>
                            </td>
                            <td>$112</td>
                            <td>Feb 04, 2023</td>
                            <td>Received</td>
                            <td><button type="button" className="table-btn">Refund Amount</button></td>
                        </tr>
                        <tr>
                            <td>
                                <img src={image} alt="#" />
                                <div className="text">
                                    <strong>Dylan Hodges</strong>
                                    <p>#2025550176</p>
                                </div>
                            </td>
                            <td>$112</td>
                            <td>Feb 04, 2023</td>
                            <td>Received</td>
                            <td><button type="button" className="table-btn">Refund Amount</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className="see-all">
                    <button type="button">See All</button>
                </div>
            </div>
        </>
    )
}

export default ManageSubscription