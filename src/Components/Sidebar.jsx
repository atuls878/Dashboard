import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactsIcon from "@mui/icons-material/Contacts";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";

export default function SearchBox() {
  return (
    <Paper square id="sidebar">
      <img
        src="https://desk.assiduus.in/content/images/2023/08/Assiduus_TM_Logo--1-.png"
        alt="logo"
        id="logo"
      />

      <div id="optionsMenu">
        <NavLink
          to={"/dashboard"}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#38e54d" : "",
              color: isActive ? "antiquewhite" : "",
            };
          }}
          className="options"
        >
          <DashboardIcon />
          Dashboard
        </NavLink>

        <NavLink
          to={"/account"}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#38e54d" : "",
              color: isActive ? "antiquewhite" : "",
            };
          }}
          className="options"
          id="account"
        >
          <AccountBalanceWalletIcon />
          Accounts
        </NavLink>

        <NavLink
          to={"/payroll"}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#38e54d" : "",
              color: isActive ? "antiquewhite" : "",
            };
          }}
          className="options"
          id="payroll"
        >
          <AttachMoneyIcon />
          Payroll
        </NavLink>

        <NavLink
          to={"/reports"}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#38e54d" : "",
              color: isActive ? "antiquewhite" : "",
            };
          }}
          className="options"
          id='reports'
        >
          <DescriptionIcon />
          Reports
        </NavLink>

        <NavLink
          to={"/advisor"}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#38e54d" : "",
              color: isActive ? "antiquewhite" : "",
            };
          }}
          className="options"
          id='advisor'
        >
          <PersonIcon />
          Advisor
        </NavLink>

        <NavLink
          to={"/contacts"}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "#38e54d" : "",
              color: isActive ? "antiquewhite" : "",
            };
          }}
          className="options"
          id='contacts'
        >
          <ContactsIcon />
          Contacts
        </NavLink>
      </div>
    </Paper>
  );
}
