import "./pros.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Promo from "../../components/promo/Promo";
import Banner from "../../components/banner/Banner";
import Search from "../../components/mainSearch/Search";
import image from "../../assets/img4.png";
import stars from "../../assets/stars.png";
import loader from "../../assets/loader.png";

const Pros = () => {
    return(
        <>
            <Header />
            <main id="main">
                <Banner title="See trusted home service professionals" small={true} />
                <Search />
                <div className="pros">
                    <div className="container">
                        <header className="header">
                            <h2>We have 24 results for that matches your details</h2>
                        </header>
                        <ul className="list-none flex cols">
                            <li>
                                <div className="holder">
                                    <img src={image} alt="#" />
                                    <div className="txt">
                                        <strong className="title">EcoSpark Energy</strong>
                                        <span className="price">Starting from $20.45 / hr</span>
                                        <div className="ratings">
                                            <img src={stars} alt="#" />
                                            <em>23 reviews</em>
                                        </div>
                                        <ul className="list-none flex v-center tags">
                                            <li>Electrical Help</li>
                                            <li>TV Mounting</li>
                                            <li>Rewiring</li>
                                        </ul>
                                        <Link to="/pro-details" className="btn-view">View Profile</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="holder">
                                    <img src={image} alt="#" />
                                    <div className="txt">
                                        <strong className="title">EcoSpark Energy</strong>
                                        <span className="price">Starting from $20.45 / hr</span>
                                        <div className="ratings">
                                            <img src={stars} alt="#" />
                                            <em>23 reviews</em>
                                        </div>
                                        <ul className="list-none flex v-center tags">
                                            <li>Electrical Help</li>
                                            <li>TV Mounting</li>
                                            <li>Rewiring</li>
                                        </ul>
                                        <Link to="/pro-details" className="btn-view">View Profile</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="holder">
                                    <img src={image} alt="#" />
                                    <div className="txt">
                                        <strong className="title">EcoSpark Energy</strong>
                                        <span className="price">Starting from $20.45 / hr</span>
                                        <div className="ratings">
                                            <img src={stars} alt="#" />
                                            <em>23 reviews</em>
                                        </div>
                                        <ul className="list-none flex v-center tags">
                                            <li>Electrical Help</li>
                                            <li>TV Mounting</li>
                                            <li>Rewiring</li>
                                        </ul>
                                        <Link to="/pro-details" className="btn-view">View Profile</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="holder">
                                    <img src={image} alt="#" />
                                    <div className="txt">
                                        <strong className="title">EcoSpark Energy</strong>
                                        <span className="price">Starting from $20.45 / hr</span>
                                        <div className="ratings">
                                            <img src={stars} alt="#" />
                                            <em>23 reviews</em>
                                        </div>
                                        <ul className="list-none flex v-center tags">
                                            <li>Electrical Help</li>
                                            <li>TV Mounting</li>
                                            <li>Rewiring</li>
                                        </ul>
                                        <Link to="/pro-details" className="btn-view">View Profile</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="holder">
                                    <img src={image} alt="#" />
                                    <div className="txt">
                                        <strong className="title">EcoSpark Energy</strong>
                                        <span className="price">Starting from $20.45 / hr</span>
                                        <div className="ratings">
                                            <img src={stars} alt="#" />
                                            <em>23 reviews</em>
                                        </div>
                                        <ul className="list-none flex v-center tags">
                                            <li>Electrical Help</li>
                                            <li>TV Mounting</li>
                                            <li>Rewiring</li>
                                        </ul>
                                        <Link to="/pro-details" className="btn-view">View Profile</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="holder">
                                    <img src={image} alt="#" />
                                    <div className="txt">
                                        <strong className="title">EcoSpark Energy</strong>
                                        <span className="price">Starting from $20.45 / hr</span>
                                        <div className="ratings">
                                            <img src={stars} alt="#" />
                                            <em>23 reviews</em>
                                        </div>
                                        <ul className="list-none flex v-center tags">
                                            <li>Electrical Help</li>
                                            <li>TV Mounting</li>
                                            <li>Rewiring</li>
                                        </ul>
                                        <Link to="/pro-details" className="btn-view">View Profile</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="holder">
                                    <img src={image} alt="#" />
                                    <div className="txt">
                                        <strong className="title">EcoSpark Energy</strong>
                                        <span className="price">Starting from $20.45 / hr</span>
                                        <div className="ratings">
                                            <img src={stars} alt="#" />
                                            <em>23 reviews</em>
                                        </div>
                                        <ul className="list-none flex v-center tags">
                                            <li>Electrical Help</li>
                                            <li>TV Mounting</li>
                                            <li>Rewiring</li>
                                        </ul>
                                        <Link to="/pro-details" className="btn-view">View Profile</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="holder">
                                    <img src={image} alt="#" />
                                    <div className="txt">
                                        <strong className="title">EcoSpark Energy</strong>
                                        <span className="price">Starting from $20.45 / hr</span>
                                        <div className="ratings">
                                            <img src={stars} alt="#" />
                                            <em>23 reviews</em>
                                        </div>
                                        <ul className="list-none flex v-center tags">
                                            <li>Electrical Help</li>
                                            <li>TV Mounting</li>
                                            <li>Rewiring</li>
                                        </ul>
                                        <Link to="/pro-details" className="btn-view">View Profile</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="holder">
                                    <img src={image} alt="#" />
                                    <div className="txt">
                                        <strong className="title">EcoSpark Energy</strong>
                                        <span className="price">Starting from $20.45 / hr</span>
                                        <div className="ratings">
                                            <img src={stars} alt="#" />
                                            <em>23 reviews</em>
                                        </div>
                                        <ul className="list-none flex v-center tags">
                                            <li>Electrical Help</li>
                                            <li>TV Mounting</li>
                                            <li>Rewiring</li>
                                        </ul>
                                        <Link to="/pro-details" className="btn-view">View Profile</Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="loader">
                            <img src={loader} alt="Loading" />
                        </div>
                    </div>
                </div>
                <Promo />
            </main>
            <Footer />
        </>
    )
}

export default Pros