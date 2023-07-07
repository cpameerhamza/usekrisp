import Home from "../../pages/home/Home";
import Pros from "../../pages/pros/Pros";
import ProDetails from "../../pages/proDetails/ProDetails";
import Account from "../../pages/account/Account";
import JobDetails from "../../pages/jobDetails/jobDetails";
import {routeConstant} from "./routeConstant";


const commonRoute = [
  {
    path: routeConstant.home.path,
    title: routeConstant.home.title,
    Component: Home,
  },
  {
    path: routeConstant.pros.path,
    title: routeConstant.pros.title,
    Component: Pros,
  },
  {
    path: routeConstant.proDetails.path,
    title: routeConstant.proDetails.title,
    Component: ProDetails,
  },
  {
    path: routeConstant.account.path,
    title: routeConstant.account.title,
    Component: Account,
  },
  {
    path: routeConstant.jobDetail.path,
    title: routeConstant.jobDetail.title,
    Component: JobDetails,
  },
];

const publicRoute = [...commonRoute];
const privateRoute = [
  ...commonRoute,
];

export { publicRoute, privateRoute };
