import Sidebar from "../../components/sidebar";
import { Outlet } from "react-router-dom";

function Settings() {
    return (
    <>
        <div className="columns is-vcentered">
            <div className="column is-one-fifth"><Sidebar props={[{path: "/admin/settings/profile", label: "Profile"}, {path: "/admin/settings/banking", label: "Billing Information"}]}/></div>
            <div id="detail" className="column p-4"><Outlet/></div>
        </div>
    </>
    );
};
  
export default Settings;
  