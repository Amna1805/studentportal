import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import MyprofileComp from "../views/Myprofile.vue";
import IdentityCard from "../views/IdentityCard.vue";
import LateSitting from "../views/LateSitting.vue";
import TransportMember from "../views/TransportMember.vue";
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
    path: "/identitycard",
    name: "IdentityCard",
    component: IdentityCard,
  },
  {
    path: "/latesitting",
    name: "LateSitting",
    component: LateSitting,
  },
  {
    path: "/transportmembership",
    name: "TransportMember",
    component: TransportMember,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
