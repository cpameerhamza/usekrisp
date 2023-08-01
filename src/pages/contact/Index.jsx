import "./index.css";
import { Link } from "react-router-dom";
import Header from "../../shared/components/header/Header";
import Footer from "../../shared/components/footer/Footer";
import Promo from "../../shared/components/promo/Promo";
import Banner from "../../shared/components/banner/Banner";
import Search from "../../shared/components/mainSearch/Search";
import image from "../../assets/img4.png";
import stars from "../../assets/stars.png";
import loader from "../../assets/loader.png";
import { emailIcon, locationIcon, streetIcon, userInputIcon } from "../../shared/utils/svgIcons";

const Contact = () => {
    return(
        <>
            <Header />
            <main id="main">
                <Banner title="Contact Support" small={true} />
                <div className="pros">
                    <div className="container">
                        <form className="contact-form">
                            <header>
                                <h2>Reach out to us</h2>
                                <p>Have a question or need assistance? Fill out the form below and our dedicated support team will get back to you as soon as possible. We're here to help!</p>
                            </header>
                            <div className="field-row">
                                <div className="field-col ico-holder">
                                    <input type="text" placeholder="First name" />
                                    <div className="input-ico left">{userInputIcon()}</div>
                                </div>
                                <div className="field-col ico-holder">
                                    <input type="text" placeholder="Last name" />
                                    <div className="input-ico left">{userInputIcon()}</div>
                                </div>
                            </div>
                            <div className="field-row">
                                <div className="field-col ico-holder">
                                    <input type="text" placeholder="Email address" />
                                    <div className="input-ico left">{emailIcon()}</div>
                                </div>
                                <div className="field-col">
                                    <input type="text" placeholder="+1 (111)11-111-111" />
                                </div>
                            </div>
                            <div className="field-row">
                                <div className="field-col ico-holder">
                                    <input type="text" placeholder="Zip code" />
                                    <div className="input-ico left">{locationIcon()}</div>
                                </div>
                                <div className="field-col ico-holder">
                                    <select>
                                        <option>City</option>
                                        <option>City</option>
                                        <option>City</option>
                                        <option>City</option>
                                    </select>
                                    <div className="input-ico left">{locationIcon()}</div>
                                </div>
                            </div>
                            <div className="field-row">
                                <div className="field-col ico-holder">
                                    <select>
                                        <option>State</option>
                                        <option>State</option>
                                        <option>State</option>
                                        <option>State</option>
                                    </select>
                                    <div className="input-ico left">{locationIcon()}</div>
                                </div>
                                <div className="field-col ico-holder">
                                    <input type="text" placeholder="Street address" />
                                    <div className="input-ico left">{streetIcon()}</div>
                                </div>
                            </div>
                            <div className="field-row">
                                <div className="field-col">
                                    <strong>Your query</strong>
                                    <textarea placeholder="Describe your query"></textarea>
                                </div>
                            </div>
                            <div className="field-row submit">
                                <div className="field-col flex">
                                    <input type="submit" className="btn-primary ml-auto" value="Send Message" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Promo />
            </main>
            <Footer />
        </>
    )
}

export default Contact