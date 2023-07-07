import "./account.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Promo from "../../components/promo/Promo";
import Banner from "../../components/banner/Banner";
import userPic from "../../assets/user.png";
import cameraIcon from "../../assets/camera-ico.png";
import addressIcon from "../../assets/address-ico.png";
import mailIcon from "../../assets/mail-icon.png";
import mobileIcon from "../../assets/mobile-ico.png";
import image1 from "../../assets/img9.png";
import loader from "../../assets/loader.png";
import { Link } from "react-router-dom";
import { pencilIcon, deactivateIcon, deleteIcon, appsIcon, dollarIcon } from "../../utils/svgIcons";
import MyJobs from "../../components/myJobs/MyJobs";
import EditProfile from "../../components/editProfile/EditProfile";
import ChangePassword from "../../components/changePassword/ChangePassword";

const Account = () => {
    return(
        <>
            <Header />
            <main id="main">
                <Banner title="My Account" small={true} />
                <div className="account-area">
                    <div className="container flex v-top">
                        <div className="profile-card">
                            <div className="pic relative">
                                <img src={userPic} alt="#" />
                                <input type="file" id="file-input" className="hidden" />
                                <label htmlFor="file-input"><img src={cameraIcon} alt="#" /></label>
                            </div>
                            <h2>Sarah Taylor</h2>
                            <ul className="list-none pro-address">
                                <li>
                                    <img src={addressIcon} alt="#" />
                                    <span>3401 Walnut St, Philadelphia 19104, Pennsylvania, United States</span>
                                </li>
                                <li>
                                    <img src={mailIcon} alt="#" />
                                    <span><a href="mailto:sarahtaylor4532@gmail.com">sarahtaylor4532@gmail.com</a></span>
                                </li>
                                <li>
                                    <img src={mobileIcon} alt="#" />
                                    <span><a href="tel:202-555-0176">202-555-0176</a></span>
                                </li>
                            </ul>
                            <ul className="list-none btns">
                                <li>
                                    <Link to="/edit-profile">{pencilIcon()} <span>Edit Profile</span></Link>
                                </li>
                                <li>
                                    <button type="button">{deactivateIcon()} Deactivate My Account</button>
                                </li>
                                <li>
                                    <button type="button" className="delete">{deleteIcon()} Delete My Account</button>
                                </li>
                            </ul>
                        </div>
                        <div className="profile-content">
                            <ul className="list-none flex v-center tabset">
                                <li className="active"><button type="button">My Services</button></li>
                                <li><button type="button">My Jobs</button></li>
                                <li><button type="button">Change Password</button></li>
                                <li><button type="button">Manage Cards</button></li>
                                <li><button type="button">Manage Subscription</button></li>
                                <li><button type="button">Notifications</button></li>
                            </ul>
                            <div className="tab-content">
                                <div className="heading flex v-center">
                                    <h3>My services</h3>
                                    <select className="ml-auto">
                                        <option>All services</option>
                                        <option>All services</option>
                                        <option>All services</option>
                                        <option>All services</option>
                                    </select>
                                </div>
                                <ul className="list-none service-list">
                                    <li>
                                        <div className="img-holder"><img src={image1} alt="#" /></div>
                                        <div className="txt">
                                            <div className="text-tags flex v-center">
                                                <span className="tag flex v-center">{appsIcon()} Home Improvement</span>
                                                <span className="tag flex v-center">{dollarIcon()} $325</span>
                                            </div>
                                            <h3>Professional house cleaning service</h3>
                                            <ul className="list-none flex v-center service-btns">
                                                <li><Link to="/">See Details</Link></li>
                                                <li className="edit"><Link to="/">Edit</Link></li>
                                                <li className="delete"><Link to="/">Delete</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-holder"><img src={image1} alt="#" /></div>
                                        <div className="txt">
                                            <div className="text-tags flex v-center">
                                                <span className="tag flex v-center">{appsIcon()} Home Improvement</span>
                                                <span className="tag flex v-center">{dollarIcon()} $325</span>
                                            </div>
                                            <h3>Professional house cleaning service</h3>
                                            <ul className="list-none flex v-center service-btns">
                                                <li><Link to="/">See Details</Link></li>
                                                <li className="edit"><Link to="/">Edit</Link></li>
                                                <li className="delete"><Link to="/">Delete</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-holder"><img src={image1} alt="#" /></div>
                                        <div className="txt">
                                            <div className="text-tags flex v-center">
                                                <span className="tag flex v-center">{appsIcon()} Home Improvement</span>
                                                <span className="tag flex v-center">{dollarIcon()} $325</span>
                                            </div>
                                            <h3>Professional house cleaning service</h3>
                                            <ul className="list-none flex v-center service-btns">
                                                <li><Link to="/">See Details</Link></li>
                                                <li className="edit"><Link to="/">Edit</Link></li>
                                                <li className="delete"><Link to="/">Delete</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <div className="loading flex v-center h-center">
                                    <img src={loader} alt="Loading" />
                                </div>
                                <MyJobs />
                                <EditProfile />
                                <ChangePassword />
                            </div>
                        </div>
                    </div>
                </div>
                <Promo />
            </main>
            <Footer />
        </>
    )
}

export default Account