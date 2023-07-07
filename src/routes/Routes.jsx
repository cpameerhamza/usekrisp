import {Routes, Route} from "react-router-dom";
import Home from "../pages/home/Home";
import Pros from "../pages/pros/Pros";
import ProDetails from "../pages/proDetails/ProDetails";
import Account from "../pages/account/Account";
import JobDetails from "../pages/jobDetails/jobDetails";

const CreateRoutes = () => {
    return(
        <>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<JobDetails />} />
                <Route path="/account" element={<Account />} />
                <Route path="/pros" element={<Pros />} />
                <Route path="/pro-details" element={<ProDetails />} />
            </Routes>
        </>
    )
}

export default CreateRoutes