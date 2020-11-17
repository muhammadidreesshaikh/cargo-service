import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import AddUser from "views/AddUser.jsx";
import Login from "views/Login.jsx";
import Forget from "views/Forget.jsx";

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
    path: "/table",
    name: "User Type List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    display: true,
    path: "/add user",
    name: "Add User Type",
    icon: "pe-7s-add-user",
    component: AddUser,
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
