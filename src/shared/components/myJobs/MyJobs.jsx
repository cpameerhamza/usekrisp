import image1 from "../../../assets/img9.png";
import loader from "../../../assets/loader.png";
import closeIcon from "../../../assets/close-ico.png";
import warningIcon from "../../../assets/warning.png";
import { dateIcon, timeIcon, detailsIcon, tickMarkIcon, crossIcon, doubleTicks } from "../../utils/svgIcons";
import { Link } from "react-router-dom";

const MyJobs = () => {
    return(
        <>
            <div className="heading flex v-center">
                <h3>My jobs</h3>
                <select className="ml-auto">
                    <option>All jobs</option>
                    <option>All jobs</option>
                    <option>All jobs</option>
                    <option>All jobs</option>
                </select>
            </div>
            <ul className="list-none service-list">
                <li>
                    <div className="img-holder">
                        <img src={image1} alt="#" />
                        <span className="service-tag">Pending</span>
                    </div>
                    <div className="txt">
                        <div className="text-tags flex v-center">
                            <span className="tag flex v-center">{dateIcon()} July 25, 2023</span>
                            <span className="tag flex v-center">{timeIcon()} 03:30 PM</span>
                        </div>
                        <h3>Seeking skilled contractors for home improvement project</h3>
                        <ul className="list-none flex v-center service-btns">
                            <li><Link to="/">{detailsIcon()} See Details</Link></li>
                            <li className="edit"><Link to="/">{tickMarkIcon()} Accept Job</Link></li>
                            <li className="delete"><Link to="/">{crossIcon()} Reject Job</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="img-holder">
                        <img src={image1} alt="#" />
                        <span className="service-tag done">Job Done</span>
                    </div>
                    <div className="txt">
                        <div className="text-tags flex v-center">
                            <span className="tag flex v-center">{dateIcon()} July 25, 2023</span>
                            <span className="tag flex v-center">{timeIcon()} 03:30 PM</span>
                        </div>
                        <h3>Need a handyman for multiple tasks</h3>
                        <ul className="list-none flex v-center service-btns">
                            <li><Link to="/">{detailsIcon()} See Details</Link></li>
                            <li className="edit"><Link to="/">{doubleTicks()} Mark as Completed</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="img-holder">
                        <img src={image1} alt="#" />
                        <span className="service-tag progress">In Process</span>
                    </div>
                    <div className="txt">
                        <div className="text-tags flex v-center">
                            <span className="tag flex v-center">{dateIcon()} July 25, 2023</span>
                            <span className="tag flex v-center">{timeIcon()} 03:30 PM</span>
                        </div>
                        <h3>Need help with regular house cleaning</h3>
                        <ul className="list-none flex v-center service-btns">
                            <li><Link to="/">{detailsIcon()} See Details</Link></li>
                            <li className="edit"><Link to="/">{doubleTicks()} Job Done</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className="img-holder">
                        <img src={image1} alt="#" />
                        <span className="service-tag completed">Completed</span>
                    </div>
                    <div className="txt">
                        <div className="text-tags flex v-center">
                            <span className="tag flex v-center">{dateIcon()} July 25, 2023</span>
                            <span className="tag flex v-center">{timeIcon()} 03:30 PM</span>
                        </div>
                        <h3>Need help with regular house cleaning</h3>
                        <ul className="list-none flex v-center service-btns">
                            <li><Link to="/">{detailsIcon()} See Details</Link></li>
                            <li className="delete"><Link to="/">{crossIcon()} Delete Task</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div className="loading flex v-center h-center">
                <img src={loader} alt="Loading" />
            </div>

            <div className="popup hidden">
                <div className="content small">
                    <div className="holder relative">
                        <div className="sucess-text">
                            <img src={warningIcon} alt="#" />
                            <h2>Are you sure?</h2>
                            <p>You’re about to mark this task as completd, if you’ve received your payment then click on “Yes, Mark as Completed” otherwise wait for your payment.</p>
                            <div className="buttons flex v-center">
                                <button type="button" className="default">Not Now</button>
                                <button type="button">Yes, Mark as Completed</button>
                            </div>
                        </div>
                        <button type="button" className="btn-close"><img src={closeIcon} alt="#" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyJobs