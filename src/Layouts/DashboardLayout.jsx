import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="flex justify-around">
           
           <div className="bg-red-400 w-[20%]">
         <ul>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>

           
        




            <li><Link to={'/dashboard/profile'}>Profile</Link></li>
            <li><Link to={'/dashboard/editProfile'}>Edit Profile</Link></li>
         </ul>
           </div>

     <div className="w-[80%]">
     <Outlet></Outlet>
     </div>
        </div>
    );
};

export default DashboardLayout;