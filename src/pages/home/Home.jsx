import "./home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import image from "../../assets/img1.png";
import claimImage from "../../assets/img2.png";
import promoImage from "../../assets/img3.png";
import icon1 from "../../assets/ico1.png";
import icon2 from "../../assets/ico2.png";
import icon3 from "../../assets/ico3.png";
import icon4 from "../../assets/ico4.png";
import icon5 from "../../assets/ico5.png";
import icon6 from "../../assets/ico6.png";
import icon7 from "../../assets/ico7.png";
import Promo from "../../components/promo/Promo";
import Banner from "../../components/banner/Banner";

const Home = () => {
    return(
        <>
            <Header />
            <main id="main">
                <Banner title={["Unlock Your ", <span>Business</span>,  " Potential with Usekrisp"]} small={false} />
                <div className="form-holder">
                    <form>
                        <select>
                            <option>Write keyword</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                        </select>
                        <input type="text" placeholder="Zip code" />
                        <input type="submit" value="Search" />
                    </form>
                </div>
                <div className="benefits">
                    <div className="container">
                    <h2>Benefits of being a part of our network</h2>
                    <div className="cols flex">
                        <div className="col">
                            <img src={image} alt="#" />
                            <strong>Reach more quality customers</strong>
                        </div>
                        <div className="col">
                            <img src={image} alt="#" />
                            <strong>Power your business on the go</strong>
                        </div>
                        <div className="col">
                            <img src={image} alt="#" />
                            <strong>Maximize your earnings</strong>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="claim">
                    <div className="container flex">
                    <div className="img-holder">
                        <img src={claimImage} alt="#" />
                    </div>
                    <div className="text ml-auto">
                        <h2>Claim your profile & have access to a free 30 day trial</h2>
                        <p>Unlock the potential of your business with our comprehensive directory website. Join our platform for free and claim your business profile to gain visibility among potential customers. As a member, you'll enjoy a free 30-day trial period with unlimited access to leads, allowing you to showcase your services and connect with clients in your industry. Don't miss out on this opportunity to boost your business growth and expand your reach. Join our thriving community of professionals today!</p>
                        <p>Take control of your professional presence and unlock new opportunities by claiming your profile on our platform. Claiming your profile is quick and easy – simply complete the verification process and gain access to a range of benefits. Showcase your skills, build credibility, and connect with potential clients in your target market.</p>
                        <a href="#" className="btn-primary">Claim Your Profile</a>
                    </div>
                    </div>
                </div>
                <div className="features">
                    <div className="container">
                    <h2>Why choose Usekrisp</h2>
                    <ul className="list-none flex">
                        <li>
                            <img src={icon1} alt="#" />
                            <strong>Flexible membership options</strong>
                            <p>Choose from our flexible membership plans that cater to your business needs, ensuring you receive maximum value and benefits.</p>
                        </li>
                        <li>
                            <img src={icon2} alt="#" />
                            <strong>Credibility & trust</strong>
                            <p>Build trust and credibility among homeowners by being a part of our vetted network of reliable service pros.</p>
                        </li>
                        <li>
                            <img src={icon3} alt="#" />
                            <strong>Easy profile management</strong>
                            <p>Create a professional profile that showcases your skills, experience, and portfolio. Update it easily to reflect your latest projects and accomplishments.</p>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="promo">
                    <div className="container">
                        <header className="header">
                            <h2>How to be part of Usekrisp</h2>
                            <p>Integrating UseKrisp into your business directory website can be a game-changer for enhancing the communication experience between service professionals and potential customers. By leveraging the power of UseKrisp's advanced noise-cancellation technology, you can ensure that every interaction is clear, focused, and professional.</p>
                        </header>
                        <div className="twocols flex v-center">
                            <div className="column"><img src={promoImage} alt="#" /></div>
                            <div className="column">
                                <div className="holder">
                                    <h3>Just follow 4 easy steps</h3>
                                    <ul className="list-none">
                                        <li>
                                            <span>1</span>
                                            <div className="ico"><img src={icon4} alt="#" /></div>
                                            <div className="inner">
                                                <strong>Sign up & create profile</strong>
                                                <p>This is first step you should do to join</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span>2</span>
                                            <div className="ico"><img src={icon5} alt="#" /></div>
                                            <div className="inner">
                                                <strong>Verify eligibility</strong>
                                                <p>This is first step you should do to join</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span>3</span>
                                            <div className="ico"><img src={icon6} alt="#" /></div>
                                            <div className="inner">
                                                <strong>Pay registration fee</strong>
                                                <p>This is first step you should do to join</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span>4</span>
                                            <div className="ico"><img src={icon7} alt="#" /></div>
                                            <div className="inner">
                                                <strong>Set schedule and start working</strong>
                                                <p>This is first step you should do to join</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
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

export default Home