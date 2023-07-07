import "./promo.css";
import { Link } from "react-router-dom";

const Promo = () => {
    return(
        <>
            <div className="schedule-text">
                <div className="container">
                    <div className="text">
                        <div className="txt flex v-center">
                            <h2>Schedule your home service now for a hassle-free experience</h2>
                            <Link to="/" className="btn-primary ml-auto">Let’s Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promo