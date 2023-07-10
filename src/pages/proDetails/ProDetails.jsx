import "./proDetails.css";
import Promo from "../../shared/components/promo/Promo";
import Header from "../../shared/components/header/Header";
import Footer from "../../shared/components/footer/Footer";
import medalIcon from "../../assets/medal.png";
import ratingsIcon from "../../assets/stars.png";
import priceIcon from "../../assets/ico8.png";
import timeIcon from "../../assets/ico9.png";
import userIcon from "../../assets/ico10.png";
import userPic from "../../assets/user.png";
import addressIcon from "../../assets/address-ico.png";
import mailIcon from "../../assets/mail-icon.png";
import mobileIcon from "../../assets/mobile-ico.png";
import image1 from "../../assets/img5.png";
import image2 from "../../assets/img6.png";
import image3 from "../../assets/img7.png";
import image4 from "../../assets/img8.png";
import ratings from "../../assets/ratings.png";
import closeIcon from "../../assets/close-ico.png";
import { useState } from "react";

const ProDetails = () => {
    const [showPopup, setShowPopup] = useState(false);
    return(
        <>
            <Header />
            <main id="main">
                <div className="pro-details">
                    <div className="container flex">
                        <div className="about-text">
                            <header className="header">
                                <h1>Sarah Taylor</h1>
                                <div className="rating-holder flex v-center">
                                    <div className="flex v-center">
                                        <img src={medalIcon} alt="#" />
                                        <strong>TaskExpert</strong>
                                    </div>
                                    <div className="flex v-center">
                                        <img src={ratingsIcon} alt="#" />
                                        <span>23 reviews</span>
                                    </div>
                                </div>
                                <ul className="list-none flex v-center pro-features">
                                    <li className="flex v-center">
                                        <img src={priceIcon} alt="#" />
                                        <span>Starting from $20.45 / hr</span>
                                    </li>
                                    <li className="flex v-center">
                                        <img src={timeIcon} alt="#" />
                                        <span>Full-Time</span>
                                    </li>
                                    <li className="flex v-center">
                                        <img src={userIcon} alt="#" />
                                        <span>3 Years of Experience</span>
                                    </li>
                                </ul>
                                <ul className="list-none flex v-center pro-tags">
                                    <li>Electrical Help</li>
                                    <li>TV Mounting</li>
                                    <li>Rewiring</li>
                                </ul>
                            </header>
                            <div className="pro-bio">
                                <h3>About pro</h3>
                                <p>Sara Taylor is a highly skilled and experienced professional with a passion for delivering exceptional service. With a keen eye for detail and a commitment to customer satisfaction, Sara consistently goes above and beyond to exceed client expectations. Whether it's a home repair, renovation project, or any other task, Sara's expertise and dedication make her the go-to professional for quality workmanship. With a friendly and approachable demeanor, Sara ensures clear communication and a seamless experience from start to finish.</p>
                                <h3>Skills and experience</h3>
                                <p>Our experienced electricians at CurrentFlow Solutions possess the expertise to handle various electrical projects, from repairs to installations, ensuring top-notch workmanship and reliable solutions.</p>
                                <h3>Achievements</h3>
                                <p>At CurrentFlow Solutions, we offer flexible scheduling to accommodate your busy lifestyle, providing convenient appointment times that suit your needs, including weekdays, evenings, and weekends.</p>
                                <h3>Work preferences</h3>
                                <p>CurrentFlow Solutions accepts various payment methods, including cash, check, credit card, and online payment platforms, ensuring a hassle-free and convenient transaction process for our customers. At CurrentFlow Solutions, we offer flexible scheduling to accommodate your busy lifestyle, providing convenient appointment times that suit your needs, including weekdays, evenings, and weekends.</p>
                            </div>
                        </div>
                        <div className="detail-card">
                            <strong className="title">Pro's details</strong>
                            <img src={userPic} alt="#" />
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
                            <div className="timings">
                                <h4>Working hours</h4>
                                <ul className="list-none">
                                    <li className="flex v-center">
                                        <span>Sunday</span>
                                        <span>5:00 am - 8:00 pm</span>
                                    </li>
                                    <li className="flex v-center">
                                        <span>Monday</span>
                                        <span>5:00 am - 8:00 pm</span>
                                    </li>
                                    <li className="flex v-center">
                                        <span>Tuesday</span>
                                        <span>5:00 am - 8:00 pm</span>
                                    </li>
                                    <li className="flex v-center">
                                        <span>Wednesday</span>
                                        <span>5:00 am - 8:00 pm</span>
                                    </li>
                                    <li className="flex v-center">
                                        <span>Thursday</span>
                                        <span>5:00 am - 8:00 pm</span>
                                    </li>
                                    <li className="flex v-center">
                                        <span>Friday</span>
                                        <span>5:00 am - 8:00 pm</span>
                                    </li>
                                    <li className="flex v-center">
                                        <span>Saturday</span>
                                        <span>5:00 am - 8:00 pm</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="services">
                            <h2>Services</h2>
                            <ul className="list-none service-list">
                                <li>
                                    <div className="img-holder"><img src={image1} alt="#" /></div>
                                    <div className="txt">
                                        <span className="tag">House Cleaning</span>
                                        <h3>Will do house cleaning</h3>
                                        <div className="price-holder">Starting from $20.45 / hr</div>
                                        <ul className="list-none flex v-center tags">
                                            <li>Electrical Help</li>
                                            <li>Gardening</li>
                                            <li>Rewiring</li>
                                        </ul>
                                    </div>
                                    <button type="button" className="btn-details" onClick={() => {setShowPopup(true)}}>See Details</button>
                                </li>
                                <li>
                                    <div className="img-holder"><img src={image1} alt="#" /></div>
                                    <div className="txt">
                                        <span className="tag">House Cleaning</span>
                                        <h3>Will do house cleaning</h3>
                                        <div className="price-holder">Starting from $20.45 / hr</div>
                                        <ul className="list-none flex v-center tags">
                                            <li>Electrical Help</li>
                                            <li>Gardening</li>
                                            <li>Rewiring</li>
                                        </ul>
                                    </div>
                                    <button type="button" className="btn-details" onClick={() => {setShowPopup(true)}}>See Details</button>
                                </li>
                                <li>
                                    <div className="img-holder"><img src={image1} alt="#" /></div>
                                    <div className="txt">
                                        <span className="tag">House Cleaning</span>
                                        <h3>Will do house cleaning</h3>
                                        <div className="price-holder">Starting from $20.45 / hr</div>
                                        <ul className="list-none flex v-center tags">
                                            <li>Electrical Help</li>
                                            <li>Gardening</li>
                                            <li>Rewiring</li>
                                        </ul>
                                    </div>
                                    <button type="button" className="btn-details" onClick={() => {setShowPopup(true)}}>See Details</button>
                                </li>
                            </ul>
                        </div>
                        <div className="recents">
                            <h2>Recent Projects</h2>
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
                        <div className="reviews">
                            <h2>Reviews</h2>
                            <div className="reviews-stats flex">
                                <div className="left">
                                    <h3>4.0</h3>
                                    <div className="ratings">
                                        <img src={ratings} alt="#" />
                                        <span>24 total Reviews</span>
                                    </div>
                                </div>
                                <div className="right ml-auto">
                                    <ul className="list-none">
                                        <li className="flex v-center">
                                            <span>5</span>
                                            <div className="base"><div className="progress" style={{width: "100%"}}></div></div>
                                        </li>
                                        <li className="flex v-center">
                                            <span>4</span>
                                            <div className="base"><div className="progress" style={{width: "70%"}}></div></div>
                                        </li>
                                        <li className="flex v-center">
                                            <span>3</span>
                                            <div className="base"><div className="progress" style={{width: "40%"}}></div></div>
                                        </li>
                                        <li className="flex v-center">
                                            <span>2</span>
                                            <div className="base"><div className="progress" style={{width: "30%"}}></div></div>
                                        </li>
                                        <li className="flex v-center">
                                            <span>1</span>
                                            <div className="base"><div className="progress" style={{width: "10%"}}></div></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="reviews-search flex v-center">
                                <div className="fields">
                                    <input type="text" placeholder="Search review" />
                                    <select>
                                        <option>Most relevant</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                                <button type="button" className="btn-default ml-auto">Write a review</button>
                            </div>
                            <ul className="reviews-list list-none">
                                <li>
                                    <header className="flex v-center">
                                        <img src={userPic} alt="#" />
                                        <div className="text">
                                            <strong className="flex v-center">Jaxson Aminoff <span>Jan 12, 2088</span></strong>
                                            <img src={ratings} alt="#" />
                                        </div>
                                    </header>
                                    <p>I had a great experience with CurrentFlow Solutions when I needed help with an electrical issue. Their team of electricians arrived promptly, diagnosed the problem quickly, and efficiently resolved it. Their professionalism and expertise were evident throughout the entire process. Highly recommended!</p>
                                </li>
                                <li>
                                    <header className="flex v-center">
                                        <img src={userPic} alt="#" />
                                        <div className="text">
                                            <strong className="flex v-center">Jaxson Aminoff <span>Jan 12, 2088</span></strong>
                                            <img src={ratings} alt="#" />
                                        </div>
                                    </header>
                                    <p>I had a great experience with CurrentFlow Solutions when I needed help with an electrical issue. Their team of electricians arrived promptly, diagnosed the problem quickly, and efficiently resolved it. Their professionalism and expertise were evident throughout the entire process. Highly recommended!</p>
                                </li>
                                <li>
                                    <header className="flex v-center">
                                        <img src={userPic} alt="#" />
                                        <div className="text">
                                            <strong className="flex v-center">Jaxson Aminoff <span>Jan 12, 2088</span></strong>
                                            <img src={ratings} alt="#" />
                                        </div>
                                    </header>
                                    <p>I had a great experience with CurrentFlow Solutions when I needed help with an electrical issue. Their team of electricians arrived promptly, diagnosed the problem quickly, and efficiently resolved it. Their professionalism and expertise were evident throughout the entire process. Highly recommended!</p>
                                </li>
                                <li>
                                    <header className="flex v-center">
                                        <img src={userPic} alt="#" />
                                        <div className="text">
                                            <strong className="flex v-center">Jaxson Aminoff <span>Jan 12, 2088</span></strong>
                                            <img src={ratings} alt="#" />
                                        </div>
                                    </header>
                                    <p>I had a great experience with CurrentFlow Solutions when I needed help with an electrical issue. Their team of electricians arrived promptly, diagnosed the problem quickly, and efficiently resolved it. Their professionalism and expertise were evident throughout the entire process. Highly recommended!</p>
                                </li>
                                <li>
                                    <header className="flex v-center">
                                        <img src={userPic} alt="#" />
                                        <div className="text">
                                            <strong className="flex v-center">Jaxson Aminoff <span>Jan 12, 2088</span></strong>
                                            <img src={ratings} alt="#" />
                                        </div>
                                    </header>
                                    <p>I had a great experience with CurrentFlow Solutions when I needed help with an electrical issue. Their team of electricians arrived promptly, diagnosed the problem quickly, and efficiently resolved it. Their professionalism and expertise were evident throughout the entire process. Highly recommended!</p>
                                </li>
                                <li>
                                    <header className="flex v-center">
                                        <img src={userPic} alt="#" />
                                        <div className="text">
                                            <strong className="flex v-center">Jaxson Aminoff <span>Jan 12, 2088</span></strong>
                                            <img src={ratings} alt="#" />
                                        </div>
                                    </header>
                                    <p>I had a great experience with CurrentFlow Solutions when I needed help with an electrical issue. Their team of electricians arrived promptly, diagnosed the problem quickly, and efficiently resolved it. Their professionalism and expertise were evident throughout the entire process. Highly recommended!</p>
                                </li>
                            </ul>
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

export default ProDetails