import "./jobDetails.css";
import Promo from "../../components/promo/Promo";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import dateIcon from "../../assets/date-ico.png";
import priceIcon from "../../assets/ico8.png";
import timeIcon from "../../assets/ico9.png";
import userPic from "../../assets/img13.png";
import addressIcon from "../../assets/address-ico.png";
import mailIcon from "../../assets/mail-icon.png";
import mobileIcon from "../../assets/mobile-ico.png";
import image1 from "../../assets/img5.png";
import image2 from "../../assets/img10.png";
import image3 from "../../assets/img11.png";
import image4 from "../../assets/img12.png";
import closeIcon from "../../assets/close-ico.png";
import { useState } from "react";
import { Link } from "react-router-dom";


const JobDetails = () => {
    const [showPopup, setShowPopup] = useState(false);
    return(
        <>
            <Header />
            <main id="main">
                <div className="pro-details">
                    <div className="container flex">
                        <div className="about-text">
                            <header className="header">
                                <div className="rating-holder flex v-center">
                                    <div className="flex v-center">
                                        <strong>House Cleaning</strong>
                                    </div>
                                </div>
                                <h1>Need a professional carpenter for furniture assembly service</h1>
                                <ul className="list-none flex v-center pro-features">
                                    <li className="flex v-center">
                                        <img src={priceIcon} alt="#" />
                                        <span>Customer budget $20.45 / hr</span>
                                    </li>
                                    <li className="flex v-center">
                                        <img src={dateIcon} alt="#" />
                                        <span>Jun 20, 2023</span>
                                    </li>
                                    <li className="flex v-center">
                                        <img src={timeIcon} alt="#" />
                                        <span>03:00 PM</span>
                                    </li>
                                </ul>
                                <ul className="list-none flex v-center pro-tags">
                                    <li>cleaning</li>
                                    <li>gardening</li>
                                    <li>planning</li>
                                </ul>
                            </header>
                            <div className="pro-bio">
                                <h3>Description</h3>
                                <p>Looking for a skilled carpenter to handle your furniture assembly needs? Look no further! We specialize in providing professional furniture assembly services, ensuring that your pieces are expertly crafted and securely put together. Whether you have a single item or a whole set of furniture to assemble, our experienced carpenters will ensure a seamless and hassle-free process. Sit back, relax, and let our team handle the task with precision and attention to detail. Get in touch with us today to schedule an appointment with a professional carpenter.</p>
                                <p>I need a reliable and thorough house cleaning task to be completed. My home is a three-bedroom house with one bathroom and a living room. The tasks include dusting all surfaces, vacuuming and mopping floors, cleaning the bathroom (including the toilet, sink, and shower), and wiping down kitchen countertops and appliances. I would like the tasker to pay attention to detail and ensure that all areas are left clean and tidy. I will provide the cleaning supplies and equipment needed.</p>
                            </div>
                        </div>
                        <div className="detail-card">
                            <strong className="title">Customer details</strong>
                            <img src={userPic} alt="#" />
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
                            <div className="btns">
                                <div className="holder flex v-center">
                                    <button type="button">Accept Offer</button>
                                    <button type="button" className="reject">Reject Offer</button>
                                </div>
                                <Link to="/" className="report-btn">Report User</Link>
                            </div>
                            
                        </div>
                    </div>
                    <div className="container">
                        <div className="recents">
                            <h2>Task photos</h2>
                            <div className="cards flex">
                                <div className="card">
                                    <img src={image2} alt="#" />
                                </div>
                                <div className="card">
                                    <img src={image3} alt="#" />
                                    <img src={image4} alt="#" />
                                </div>
                            </div>
                        </div>
                        <Promo />
                    </div>
                </div>
            </main>
            <Footer />
            {
                showPopup ? 
                <div className="popup">
                    <div className="content">
                        <div className="holder relative">
                            <h2>Service details</h2>
                            <ul className="list-none flex photos">
                                <li><img src={image1} alt="#" /></li>
                                <li><img src={image1} alt="#" /></li>
                                <li><img src={image1} alt="#" /></li>
                            </ul>
                            <div className="text">
                                <h3>Other details</h3>
                                <ul className="list-none flex">
                                    <li>
                                        <strong>Category</strong>
                                        <p>House Cleaning</p>
                                    </li>
                                    <li>
                                        <strong>Title</strong>
                                        <p>Gardner, Housekeeper</p>
                                    </li>
                                    <li>
                                        <strong>Tags</strong>
                                        <ul className="list-none flex v-center">
                                            <li>Cleaning</li>
                                            <li>Gardening</li>
                                            <li>Planning</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <strong>Hourly budget</strong>
                                        <p>$20.85 / hr</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-area">
                                <h4>Service description</h4>
                                <p>CurrentFlow Solutions is a trusted provider of electricity problem-solving solutions, dedicated to helping homeowners and businesses overcome electrical challenges with expertise and efficiency. With a team of highly skilled electricians and technicians, we offer a wide range of services, including electrical troubleshooting, repairs, installations, and upgrades.</p>
                                <p>With our technical expertise and customer-centric approach, we strive to ensure safe and efficient electricity usage while providing exceptional service and peace of mind to our valued customers.</p>
                            </div>
                            <button type="button" className="btn-close" onClick={() => setShowPopup(false)}><img src={closeIcon} alt="#" /></button>
                        </div>
                    </div>
                </div>
                : ""
            }
            
        </>
    )
}

export default JobDetails