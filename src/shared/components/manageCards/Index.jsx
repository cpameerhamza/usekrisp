import "./index.css";
import cardNumber from "../../../assets/card-number1.png";
import cardSlogan from "../../../assets/card-slogan.png";
import cardSlogan2 from "../../../assets/card-slogan2.png";
import stripeLogo from "../../../assets/stripe-logo.png";
import image from "../../../assets/img14.png";
import { plusIcon } from "../../utils/svgIcons";

const ManageCards = () => {
    return(
        <>
            <div className="heading flex v-center">
                <h3>Manage your cards</h3>
            </div>
            <div className="added-cards flex">
                <div className="single-card">
                    <h2>James Jaiden</h2>
                    <img src={cardNumber} alt="#" />
                    <div className="date-holder flex v-center">
                        <span>VALID THRU <b>03/24</b></span>
                        <img src={cardSlogan} alt="#" className="ml-auto" />
                    </div>
                </div>
                <div className="single-card blue">
                    <h2>James Jaiden</h2>
                    <img src={cardNumber} alt="#" />
                    <div className="date-holder flex v-center">
                        <span>VALID THRU <b>05/15</b></span>
                        <img src={cardSlogan2} alt="#" className="ml-auto" />
                    </div>
                </div>
                <div className="single-card new-card">
                    {plusIcon()} Add New Card
                </div>
            </div>
            <div className="remove-holder">
                <div className="left flex v-center">
                    <div className="ico"><img src={stripeLogo} alt="#" /></div>
                    <div className="txt">
                        <strong>Connect Stripe Account</strong>
                        <p>Account Connected</p>
                    </div>
                    <button type="button" className="remove-account ml-auto">Remove Account</button>
                </div>
            </div>
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

export default ManageCards