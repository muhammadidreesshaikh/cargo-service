import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import UserTypeList from "views/UserTypeList.jsx";
import AllPickup from "views/AllPickup.jsx";
import PickupDetails from "views/PickupDetails.jsx";
import AllCenter from "views/AllCenter.jsx";
import AllTransport from "views/AllTransport.jsx";
import AllCargo from "views/AllCargo.jsx";
import AllAgents from "views/AllAgents.jsx";
import AddSupervisor from "views/AddSupervisor.jsx";
import AllSupervisor from "views/AllSupervisor.jsx";
import RegisterTruck from "views/RegisterTruck.jsx";
import RegisterTruckStaff from "views/RegisterTruckStaff.jsx";
import AllTruckStaff from "views/AllTruckStaff.jsx";
import BookingTruck from "views/BookingTruck.jsx";
import CreateTrip from "views/CreateTrip.jsx";
import CreateTruckBooking from "views/CreateTruckBooking.jsx";
import ManageTrips from "views/ManageTrips.jsx";
import AddStaff from "views/AddStaff.jsx";
import AllStaffs from "views/AllStaffs.jsx";
import CreateService from "views/CreateService.jsx";
import AllService from "views/AllService.jsx";

import AddUser from "views/AddUser.jsx";
import Login from "views/Login.jsx";
import Forget from "views/Forget.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";

const dashboardRoutes = [
  {
    display: true,
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    display: true,
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    display: true,
    path: "/user-type-list",
    name: "User Type List",
    icon: "pe-7s-note2",
    component: UserTypeList,
    layout: "/admin"
  },
  {
    display: true,
    path: "/add-user",
    name: "Add User Type",
    icon: "pe-7s-add-user",
    component: AddUser,
    layout: "/admin"
  },
  {
    display: true,
    path: "/all-pickup",
    name: "All Pickup",
    icon: "pe-7s-hourglass",
    component: AllPickup,
    layout: "/admin"
  },
  {
    display: false,
    path: "/pickup-details",
    name: "Pickup Details",
    icon: "pe-7s-add-user",
    component: PickupDetails,
    layout: "/admin"
  },
  {
    display: true,
    path: "/all-center",
    name: "All Center",
    icon: "pe-7s-medal",
    component: AllCenter,
    layout: "/admin"
  },
  {
    display: true,
    path: "/all-transport",
    name: "All Transport",
    icon: "pe-7s-share",
    component: AllTransport,
    layout: "/admin"
  },
  {
    display: true,
    path: "/all-cargo",
    name: "All Cargo",
    icon: "pe-7s-world",
    component: AllCargo,
    layout: "/admin"
  },
  {
    display: true,
    path: "/all-agents",
    name: "All Agents",
    icon: "pe-7s-menu",
    component: AllAgents,
    layout: "/admin"
  },
  {
    display: true,
    path: "/add-supervisor",
    name: "Add Supervisor",
    icon: "pe-7s-voicemail",
    component: AddSupervisor,
    layout: "/admin"
  },
  {
    display: true,
    path: "/all-supervisor",
    name: "All Supervisor",
    icon: "pe-7s-settings",
    component: AllSupervisor,
    layout: "/admin"
  },
  {
    display: true,
    path: "/register-truck",
    name: "Register Truck",
    icon: "pe-7s-paperclip",
    component: RegisterTruck,
    layout: "/admin"
  },
  {
    display: true,
    path: "/register-truck-staff ",
    name: "Register Truck Staff ",
    icon: "pe-7s-ribbon",
    component: RegisterTruckStaff ,
    layout: "/admin"
  },
  {
    display: true,
    path: "/all-truck-staff",
    name: "All Truck Staff",
    icon: "pe-7s-paper-plane",
    component: AllTruckStaff,
    layout: "/admin"
  },
  {
    display: true,
    path: "/booking-truck",
    name: "Booking Truck",
    icon: "pe-7s-loop",
    component: BookingTruck,
    layout: "/admin"
  },
  {
    display: true,
    path: "/create-trip",
    name: "Create Trip",
    icon: "pe-7s-portfolio",
    component: CreateTrip,
    layout: "/admin"
  },
  {
    display: true,
    path: "/create-truck-booking",
    name: "Create Truck Booking",
    icon: "pe-7s-pin",
    component: CreateTruckBooking,
    layout: "/admin"
  },
  {
    display: true,
    path: "/manage-trips",
    name: "Manage Trips",
    icon: "pe-7s-note",
    component: ManageTrips,
    layout: "/admin"
  },
  {
    display: true,
    path: "/add-staff",
    name: "Add Staff",
    icon: "pe-7s-moon",
    component: AddStaff,
    layout: "/admin"
  },
  {
    display: true,
    path: "/all-staffs",
    name: "All Staffs",
    icon: "pe-7s-map",
    component: AllStaffs,
    layout: "/admin"
  },
  {
    display: true,
    path: "/all-service",
    name: "All Service",
    icon: "pe-7s-map",
    component: AllService,
    layout: "/admin"
  },
  {
    display: true,
    path: "/create-service",
    name: "Create Service",
    icon: "pe-7s-map",
    component: CreateService,
    layout: "/admin"
  },
  {
    display: true,
    path: "/login",
    name: "Login",
    icon: "pe-7s-key",
    component: Login,
    layout: "/admin"
  },
  {
    display: true,
    path: "/forget",
    name: "Forget",
    icon: "pe-7s-refresh",
    component: Forget,
    layout: "/admin"
  },
  {
    display: true,
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  }
  
];

export default dashboardRoutes;
