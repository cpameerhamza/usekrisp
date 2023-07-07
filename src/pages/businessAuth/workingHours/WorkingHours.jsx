import "./workingHours.css";
import closeIcon from "../../../assets/close-ico.png";

const WorkingHours = () => {
    return(
        <>
            <div className="popup">
                <div className="content">
                    <div className="holder relative">
                        <header className="popup-header">
                            <h2>Your working hours</h2>
                            <p>Set your working hours so that customers can hire you accordingly.</p>
                        </header>
                        <form className="auth-form">
                            <div className="working-cols flex">
                                <div className="working-col">
                                    <h3>Monday</h3>
                                    <div className="inner-cols">
                                        <div className="inner-col">
                                            <strong>Starting time</strong>
                                            <select className="time-selection">
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                            </select>
                                        </div>
                                        <div className="inner-col">
                                            <strong>Closing time</strong>
                                            <select className="time-selection">
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="working-col">
                                    <h3>Tuesday</h3>
                                    <div className="inner-cols">
                                        <div className="inner-col">
                                            <strong>Starting time</strong>
                                            <select className="time-selection">
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                            </select>
                                        </div>
                                        <div className="inner-col">
                                            <strong>Closing time</strong>
                                            <select className="time-selection">
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="working-cols flex">
                                <div className="working-col">
                                    <h3>Wednesday</h3>
                                    <div className="inner-cols">
                                        <div className="inner-col">
                                            <strong>Starting time</strong>
                                            <select className="time-selection">
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                            </select>
                                        </div>
                                        <div className="inner-col">
                                            <strong>Closing time</strong>
                                            <select className="time-selection">
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="working-col">
                                    <h3>Thursday</h3>
                                    <div className="inner-cols">
                                        <div className="inner-col">
                                            <strong>Starting time</strong>
                                            <select className="time-selection">
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                            </select>
                                        </div>
                                        <div className="inner-col">
                                            <strong>Closing time</strong>
                                            <select className="time-selection">
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="working-cols flex">
                                <div className="working-col">
                                    <h3>Friday</h3>
                                    <div className="inner-cols">
                                        <div className="inner-col">
                                            <strong>Starting time</strong>
                                            <select className="time-selection">
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                            </select>
                                        </div>
                                        <div className="inner-col">
                                            <strong>Closing time</strong>
                                            <select className="time-selection">
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="working-col">
                                    <h3>Saturday</h3>
                                    <div className="inner-cols">
                                        <div className="inner-col">
                                            <strong>Starting time</strong>
                                            <select className="time-selection">
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                            </select>
                                        </div>
                                        <div className="inner-col">
                                            <strong>Closing time</strong>
                                            <select className="time-selection">
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="working-cols flex">
                                <div className="working-col">
                                    <h3>Sunday</h3>
                                    <div className="inner-cols">
                                        <div className="inner-col">
                                            <strong>Starting time</strong>
                                            <select className="time-selection">
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                                <option>05:00 AM</option>
                                            </select>
                                        </div>
                                        <div className="inner-col">
                                            <strong>Closing time</strong>
                                            <select className="time-selection">
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                                <option>08:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="submit-row flex">
                                <input type="submit" value="Submit" className="ml-auto" />
                            </div>
                        </form>
                        <button type="button" className="btn-close"><img src={closeIcon} alt="#" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkingHours