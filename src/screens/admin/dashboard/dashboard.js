import Sidebar from "../../../components/sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
    <>
        <div className="columns is-vcentered">
            <div className="column is-one-fifth"><Sidebar props={[{path: "/admin/dashboard/bookings", label: "Bookings"}, {path: "/admin/dashboard/home", label: "Dashboard"}]}/></div>
            <div id="detail" className="column p-4"><Outlet/></div>
        </div>
    </>
    );
};
  
export default Dashboard;
  