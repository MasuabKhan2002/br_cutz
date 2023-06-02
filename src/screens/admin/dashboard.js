import Sidebar from "../../components/sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
    <>
        <div className="columns is-vcentered">
            <div className="column is-one-fifth"><Sidebar/></div>
            <div id="detail" className="column p-4"><Outlet/></div>
        </div>
    </>
    );
};
  
export default Dashboard;
  