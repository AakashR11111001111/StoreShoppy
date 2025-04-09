import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import HeaderTop from "../HeaderTop/HeaderTop";
import Notifications from "../Notifications/Notifications";
import Activities from "../Activities/Activities";
import Contacts from "../Contacts/Contacts";

const Layout = () => {
    return (
        <div className="flex">
            <Header />
            <div>
                <HeaderTop />
                <Outlet />
            </div>
            <div className="border-l-gray-500 bg-gray-50">
                <Notifications />
                <Activities />
                <Contacts />
            </div>
            
        </div>
    )
}

export default Layout;  