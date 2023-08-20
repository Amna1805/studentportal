import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import MyprofileComp from "../views/Myprofile.vue";
import AccomodationProforma from "../views/AccomodationProforma.vue";
import ExtensionProforma from "../views/ExtensionProforma.vue";
import AccountLogin from "../views/AccountLogin.vue";
import EvaluationProforma from "../views/EvaluationProforma.vue"
import ClearanceProforma from "../views/ClearanceProforma.vue"
const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard-default",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/myprofile",
    name: "Myprofile",
    component: MyprofileComp,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/acc",
    name: "AccomodationProforma",
    component: AccomodationProforma
  },
  {
    path: "/ext",
    name: "ExtensionProforma",
    component: ExtensionProforma
  },
  {
    path: "/clear",
    name: "ClearanceProforma",
    component: ClearanceProforma
  },
  {
    path: "/evaluation",
    name: "EvaluationProforma",
    component: EvaluationProforma
  },
  {
    path: "/accLogin",
    name: "AccountLogin",
    component: AccountLogin
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
