import "./footer.css";
import { Link } from "react-router-dom";
import footerLogo from "../../../assets/footer-logo.png";
import { instagramIcon, facebookIcon, twitterIcon, linkedinIcon } from "../../utils/svgIcons";
import { ExternalLink } from 'react-external-link';

const Footer = () => {
    return(
        <>
            <footer id="footer">
                <div className="container">
                    <div className="top flex">
                        <div className="text">
                            <Link to="/"><img src={footerLogo} alt="#" /></Link>
                            <p>Our platform connects homeowners with trusted professionals, providing a seamless and efficient solution for all your home service needs.</p>
                            <ul className="list-none socials flex v-center">
                                <li><ExternalLink href="#">{instagramIcon()}</ExternalLink></li>
                                <li><ExternalLink href="#">{facebookIcon()}</ExternalLink></li>
                                <li><ExternalLink href="#">{twitterIcon()}</ExternalLink></li>
                                <li><ExternalLink href="#">{linkedinIcon()}</ExternalLink></li>
                            </ul>
                        </div>
                        <div className="cols flex ml-auto">
                            <div className="col">
                                <strong>For Homeowners</strong>
                                <ul className="list-none">
                                    <li><Link to="/pros">Find Pros</Link></li>
                                    <li><Link to="/pro-details">Explore Services</Link></li>
                                    <li><Link to="/pros">Pros Near Me</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <strong>For Pros</strong>
                                <ul className="list-none">
                                    <li><Link to="/">Register Your Business</Link></li>
                                    <li><Link to="/account">My Account</Link></li>
                                    <li><Link to="/account">Key Membership</Link></li>
                                    <li><Link to="/">FAQs</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <strong>Company</strong>
                                <ul className="list-none">
                                    <li><Link to="/">About Usekrisp</Link></li>
                                    <li><Link to="/pro-details">Our Services</Link></li>
                                    <li><Link to="/">Press</Link></li>
                                    <li><Link to="/">Careers</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bottom flex">
                        <p>© Copyright UseKrisp 2023. All rights reserved.</p>
                        <ul className="list-none flex v-center ml-auto">
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer