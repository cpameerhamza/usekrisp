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
import checkedCircle from "../../assets/checked-circle.png";
import cardNumber from "../../assets/card-number3.png";
import cardIcon from "../../assets/card-ico.png";
import closeButton from "../../assets/close-button.png";
import docIcon from "../../assets/doc-ico.png";
import deleteIcon from "../../assets/delete-ico.png";
import { useState } from "react";
import { locationIcon, roundPlus, streetIcon } from "../../shared/utils/svgIcons";
import SuccessPopup from "../../shared/components/successPopup/SuccessPopup";
import { userInputIcon, cardsIcon, passIcon, calendarIcon } from "../../shared/utils/svgIcons";

const ProDetails = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [listService, setListService] = useState(false);
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);
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
                                <button type="button" className="btn-primary service-btn" onClick={() => setListService(true)}>List a Service</button>
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
            {/* <div className="popup">
                <div className="content small">
                    <div className="holder relative">
                        <form className="card-steps">
                            <div className="step1">
                                <h2>Subscription membership</h2>
                                <p>Claim your profile on the website for free and then have access to a free 30 day trial where they have unlimited access to pros.</p>
                                <div className="radios">
                                    <input checked id="monthly" type="radio" name="group1" className="hidden" />
                                    <label htmlFor="monthly">
                                        <div className="left-text">
                                            <strong>Monthly plan</strong>
                                            <p>Billed monthly</p>
                                        </div>
                                        <h3>$150</h3>
                                        <img src={checkedCircle} alt="#" className="checked hidden" />
                                    </label>
                                    <input id="annual" type="radio" name="group1" className="hidden" />
                                    <label htmlFor="annual">
                                        <div className="left-text">
                                            <strong>Monthly plan</strong>
                                            <p>Billed monthly</p>
                                        </div>
                                        <h3>$150</h3>
                                        <img src={checkedCircle} alt="#" className="checked hidden" />
                                    </label>
                                </div>
                                <div className="btn-area flex v-center">
                                    <h2 className="plan-price">$150 <span>/month (billed monthly)</span></h2>
                                    <button type="button">Choose Plan</button>
                                </div>
                            </div>
                            <div className="step2 hidden">
                                <h2>Select card</h2>
                                <p>Select your credit card to proceed.</p>
                                <div className="radios">
                                    <input checked id="card1" type="radio" name="group2" className="hidden" />
                                    <label htmlFor="card1">
                                        <div className="card-ico">
                                            <img src={cardIcon} alt="#" />
                                        </div>
                                        <div className="left-text">
                                            <strong>Credit / Debit Card</strong>
                                            <img src={cardNumber} alt="#" className="card-number" />
                                        </div>
                                        <img src={checkedCircle} alt="#" className="checked hidden" />
                                    </label>
                                    <input checked id="card2" type="radio" name="group2" className="hidden" />
                                    <label htmlFor="card2">
                                        <div className="card-ico">
                                            <img src={cardIcon} alt="#" />
                                        </div>
                                        <div className="left-text">
                                            <strong>Credit / Debit Card</strong>
                                            <img src={cardNumber} alt="#" className="card-number" />
                                        </div>
                                        <img src={checkedCircle} alt="#" className="checked hidden" />
                                    </label>
                                </div>
                                <div className="add-holder">
                                    <button type="button">{roundPlus()} Add Card</button>
                                    
                                </div>

                                <div className="btn-area flex v-center">
                                    <button type="button" className="fluid">Continue</button>
                                </div>
                            </div>
                            <div className="step3 hidden">
                                <h2>Add new card</h2>
                                <p>Enter card details below.</p>
                                <div className="add-card">
                                    <div className="ico-holder">
                                        <input type="text" placeholder="Card holder name" className="card-holder-name" />
                                        <div className="input-ico left">{userInputIcon()}</div>
                                    </div>
                                    <div className="ico-holder">
                                        <input type="text" placeholder="Card number" className="card-number" />
                                        <div className="input-ico left">{cardsIcon()}</div>
                                    </div>
                                    <div className="ico-holder">
                                        <input type="text" placeholder="Expiry date" className="expiry-date" />
                                        <div className="input-ico left">{calendarIcon()}</div>
                                    </div>
                                    <div className="ico-holder">
                                        <input type="text" placeholder="CVV" className="cvv" />
                                        <div className="input-ico left">{passIcon()}</div>
                                    </div>
                                </div>
                                <div className="btn-area flex v-center">
                                    <button type="button" className="fluid">Continue</button>
                                </div>
                            </div>
                        </form>
                        <button type="button" className="btn-close" onClick={() => setShowPopup(false)}><img src={closeIcon} alt="#" /></button>
                    </div>
                </div>
            </div> */}
            {
                listService &&
                <div className="popup">
                    <div className="content">
                        <div className="holder relative">
                            <form className="service-form relative">
                                {
                                    step1 && !step2 && !step3 && !step4 &&
                                    <div className="form-step1">
                                        <h2>List your service</h2>
                                        <p>Describe details about your service</p>
                                        <div className="holder">
                                            <div className="service-row flex">
                                                <div className="service-col ico-holder">
                                                    <input type="text" placeholder="Zip code" />
                                                    <div className="input-ico left">{locationIcon()}</div>
                                                </div>
                                                <div className="service-col ico-holder">
                                                    <input type="text" placeholder="Street address" />
                                                    <div className="input-ico left">{streetIcon()}</div>
                                                </div>
                                            </div>
                                            <div className="service-row flex">
                                                <div className="service-col">
                                                    <input type="text" placeholder="Select category" />
                                                </div>
                                                <div className="service-col">
                                                    <input type="text" placeholder="Service title" />
                                                </div>
                                            </div>
                                            <div className="service-row">
                                                <strong>Your hourly budget</strong>
                                                <div className="radios-holder flex">
                                                    <input type="radio" name="budget" id="opt1" className="hidden" />
                                                    <label htmlFor="opt1">$10.25 / hr</label>
                                                    <input type="radio" name="budget" id="opt2" className="hidden" />
                                                    <label htmlFor="opt2">$12.75 / hr</label>
                                                    <input type="radio" name="budget" id="opt3" className="hidden" />
                                                    <label htmlFor="opt3">$15.50 / hr</label>
                                                    <input type="radio" name="budget" id="opt4" className="hidden" />
                                                    <label htmlFor="opt4">$18.45 / hr</label>
                                                    <input checked type="radio" name="budget" id="opt5" className="hidden" />
                                                    <label htmlFor="opt5">$20.85 / hr</label>
                                                    <input type="radio" name="budget" id="opt6" className="hidden" />
                                                    <label htmlFor="opt6">$20.45 / hr</label>
                                                    <input type="text" placeholder="Other" className="other-field" />
                                                </div>
                                            </div>
                                            <div className="service-row flex">
                                                <div className="service-col">
                                                    <select>
                                                        <option>Select availability</option>
                                                        <option>Select availability</option>
                                                        <option>Select availability</option>
                                                        <option>Select availability</option>
                                                    </select>
                                                </div>
                                                <div className="service-col">
                                                    <select>
                                                        <option>Select experience</option>
                                                        <option>Select experience</option>
                                                        <option>Select experience</option>
                                                        <option>Select experience</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="service-row">
                                                <strong>Tell us the details of your service</strong>
                                                <div className="radios-holder">
                                                    <textarea placeholder="Describe your service"></textarea>
                                                </div>
                                            </div>
                                            <div className="button-holder flex">
                                                <button type="button" className="next ml-auto" onClick={() => {setStep1(false); setStep2(true)}}>Next</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    step2 && !step1 &&
                                    <div className="form-step2">
                                        <h2>Your project photos <em>(Optional)</em></h2>
                                        <p>Add some projects to let customer hire you.</p>
                                        <div className="holder">
                                            <div className="boxes">
                                                <div className="box">
                                                    <input type="file" id="file-upload" className="hidden" />
                                                    <label htmlFor="file-upload" className="flex v-center h-center">
                                                        <span><em>Upload Photo</em> or just drag & drop</span>
                                                    </label>
                                                </div>
                                                <div className="box">
                                                    <textarea placeholder="Short project description"></textarea>
                                                </div>
                                            </div>
                                            <div className="file-size">
                                                <div className="size-holder">
                                                    <div className="progress" style={{width: "30%"}}>
                                                        <span>30%</span>
                                                    </div>
                                                </div>
                                                <div className="size-text">File size <b>12MB</b></div>
                                            </div>
                                            <div className="btn flex">
                                                <button type="button" className="btn-primary ml-auto">Add Project</button>
                                            </div>
                                            <ul className="list-none flex selected-files">
                                                <li>
                                                    <img src={image1} alt="#" />
                                                    <button type="button">
                                                        <img src={closeButton} alt="#" />
                                                    </button>
                                                </li>
                                                <li>
                                                    <img src={image1} alt="#" />
                                                    <button type="button">
                                                        <img src={closeButton} alt="#" />
                                                    </button>
                                                </li>
                                                <li>
                                                    <img src={image1} alt="#" />
                                                    <button type="button">
                                                        <img src={closeButton} alt="#" />
                                                    </button>
                                                </li>
                                                <li>
                                                    <img src={image1} alt="#" />
                                                    <button type="button">
                                                        <img src={closeButton} alt="#" />
                                                    </button>
                                                </li>
                                            </ul>
                                            <div className="button-holder flex v-center">
                                                <button type="button" className="back" onClick={() => {setStep1(true); setStep2(false); setStep3(false)}}>Back</button>
                                                <button type="button" className="skip" onClick={() => {setStep1(false); setStep2(false); setStep3(true)}}>Skip</button>
                                                <button type="button" className="next" onClick={() => {setStep1(false); setStep2(false); setStep3(true)}}>Next</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    step3 && !step1 && !step2 &&
                                    <div className="form-step3">
                                        <h2>Legal requirements</h2>
                                        <p>Upload your legal documents to verify your identity.</p>
                                        <div className="holder">
                                            <div class="boxes-holder">
                                                <h5>National identification card</h5>
                                                <div className="boxes">
                                                    <div className="box">
                                                        <strong className="box-title">Front</strong>
                                                        <input type="file" id="front" className="hidden" />
                                                        <label htmlFor="front" className="flex v-center h-center">
                                                            <span><em>Upload Photo</em> or just drag & drop</span>
                                                        </label>
                                                    </div>
                                                    <div className="box">
                                                        <strong className="box-title">Back</strong>
                                                        <input type="file" id="back" className="hidden" />
                                                        <label htmlFor="back" className="flex v-center h-center">
                                                            <span><em>Upload Photo</em> or just drag & drop</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="file-size">
                                                <div className="size-holder">
                                                    <div className="progress" style={{width: "30%"}}>
                                                        <span>30%</span>
                                                    </div>
                                                </div>
                                                <div className="size-text">File size <b>12MB</b></div>
                                            </div>
                                            <div class="boxes-holder">
                                                <div className="boxes">
                                                    <div className="box">
                                                        <strong className="box-title">Proof of address</strong>
                                                        <input type="file" id="address-proof" className="hidden" />
                                                        <label htmlFor="address-proof" className="flex v-center h-center">
                                                            <span><em>Upload Photo</em> or just drag & drop</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="boxes">
                                                    <div className="box">
                                                        <strong className="box-title">Police clearance certificate</strong>
                                                        <input type="file" id="police-clearance" className="hidden" />
                                                        <label htmlFor="police-clearance" className="flex v-center h-center">
                                                            <span><em>Upload Photo</em> or just drag & drop</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="list-none flex selected-docs">
                                                <li className="flex v-center">
                                                    <img src={docIcon} alt="#" />
                                                    <span>NIC Front.pdf</span>
                                                    <img src={deleteIcon} alt="#" className="ml-auto" />
                                                </li>
                                                <li className="flex v-center">
                                                    <img src={docIcon} alt="#" />
                                                    <span>NIC Back.pdf</span>
                                                    <img src={deleteIcon} alt="#" className="ml-auto" />
                                                </li>
                                                <li className="flex v-center">
                                                    <img src={docIcon} alt="#" />
                                                    <span>Home Proof.pdf</span>
                                                    <img src={deleteIcon} alt="#" className="ml-auto" />
                                                </li>
                                                <li className="flex v-center">
                                                    <img src={docIcon} alt="#" />
                                                    <span>Police clearance certificate.pdf</span>
                                                    <img src={deleteIcon} alt="#" className="ml-auto" />
                                                </li>
                                            </ul>
                                            <div className="button-holder flex v-center">
                                                <button type="button" className="back" onClick={() => {setStep1(false); setStep2(true); setStep3(false); setStep4(false)}}>Back</button>
                                                <button type="button" className="skip" onClick={() => {setStep1(false); setStep2(false); setStep3(false); setStep4(true)}}>Skip</button>
                                                <button type="button" className="next" onClick={() => {setStep1(false); setStep2(false); setStep3(false); setStep4(true)}}>Next</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    step4 && !step1 && !step2 && !step3 &&
                                    <div className="form-step4">
                                        <h2>Review your service details</h2>
                                        <p>Please review carefully your service details before submitting, you can edit your service details anytime from your account.</p>
                                        <div className="holder">
                                            <div class="holder-row">
                                                <strong className="title">Projects</strong>
                                                <ul className="list-none flex selected-files">
                                                    <li>
                                                        <img src={image1} alt="#" />
                                                    </li>
                                                    <li>
                                                        <img src={image1} alt="#" />
                                                    </li>
                                                    <li>
                                                        <img src={image1} alt="#" />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="holder-row">
                                                <strong className="title">Documents</strong>
                                                <ul className="list-none flex selected-docs readonly">
                                                    <li className="flex v-center">
                                                        <img src={docIcon} alt="#" />
                                                        <span>NIC Front.pdf</span>
                                                    </li>
                                                    <li className="flex v-center">
                                                        <img src={docIcon} alt="#" />
                                                        <span>NIC Back.pdf</span>
                                                    </li>
                                                    <li className="flex v-center">
                                                        <img src={docIcon} alt="#" />
                                                        <span>Home Proof.pdf</span>
                                                    </li>
                                                    <li className="flex v-center">
                                                        <img src={docIcon} alt="#" />
                                                        <span>Police clearance certificate.pdf</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="holder-row disabled">
                                                <strong className="title">Other details</strong>
                                                <div className="service-row flex">
                                                    <div className="service-col">
                                                        <span className="field-label">Mobile number</span>
                                                        <input type="text" placeholder="Zip code" />
                                                    </div>
                                                    <div className="service-col">
                                                        <span className="field-label">Email address</span>
                                                        <input type="text" placeholder="Street address" />
                                                    </div>
                                                </div>
                                                <div className="service-row flex">
                                                    <div className="service-col">
                                                        <span className="field-label">Zip code</span>
                                                        <input type="text" placeholder="77001" />
                                                    </div>
                                                    <div className="service-col">
                                                        <span className="field-label">Your address</span>
                                                        <input type="text" placeholder="3401 Walnut St, Philadelphia 19104, Pennsylvania, United States" />
                                                    </div>
                                                </div>
                                                <div className="service-row flex">
                                                    <div className="service-col">
                                                        <span className="field-label">Category</span>
                                                        <input type="text" placeholder="House Cleaning" />
                                                    </div>
                                                    <div className="service-col">
                                                        <span className="field-label">Title</span>
                                                        <input type="text" placeholder="Gardner, Housekeeper" />
                                                    </div>
                                                </div>
                                                <div className="service-row flex">
                                                    <div className="service-col">
                                                        <span className="field-label">Tags</span>
                                                        <input type="text" placeholder="House Cleaning" />
                                                    </div>
                                                    <div className="service-col">
                                                        <span className="field-label">Hourly budget</span>
                                                        <input type="text" placeholder="$20.85 / hr" />
                                                    </div>
                                                </div>
                                                <div className="service-row flex">
                                                    <div className="service-col">
                                                        <span className="field-label">Availability</span>
                                                        <input type="text" placeholder="Full Time" />
                                                    </div>
                                                    <div className="service-col">
                                                        <span className="field-label">Experience</span>
                                                        <input type="text" placeholder="3 Years" />
                                                    </div>
                                                </div>
                                                <div className="service-row flex desc">
                                                    <strong className="title">Service description</strong>
                                                    <p>CurrentFlow Solutions is a trusted provider of electricity problem-solving solutions, dedicated to helping homeowners and businesses overcome electrical challenges with expertise and efficiency. With a team of highly skilled electricians and technicians, we offer a wide range of services, including electrical troubleshooting, repairs, installations, and upgrades.</p>
                                                    <p>With our technical expertise and customer-centric approach, we strive to ensure safe and efficient electricity usage while providing exceptional service and peace of mind to our valued customers.</p>
                                                </div>
                                            </div>
                                            
                                            <div className="button-holder flex v-center">
                                                <button type="button" className="back">Edit</button>
                                                <input type="submit" className="next" value="Submit Request" />
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div class="progress-card">
                                    <div class="percent">
                                        <svg>
                                        <circle cx="105" cy="105" r="100"></circle>
                                        <circle cx="105" cy="105" r="100" style={{"--percent": 30}}></circle>
                                        </svg>
                                        <div class="number">
                                        <h3>33<span>%</span></h3>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <button type="button" className="btn-close" onClick={() => setListService(false)}><img src={closeIcon} alt="#" /></button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProDetails