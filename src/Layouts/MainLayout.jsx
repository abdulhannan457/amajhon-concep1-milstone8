
import { Link, NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";


const MainLayout = () => {

    const navigation = useNavigation()
    // console.log(navigation.state)
    return (
        <div>
            <section className="flex justify-between px-7 py-10 shadow-md">
                <div className="text-xl font-bold">Amajhon</div>
     <nav>
        <ul className="flex gap-5">
            {/* <li><Link to={'/'}>Home</Link></li> */}

            <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-amber-700 underline p-3 rounded-md font-extrabold text-xl" : ""
  }
>
 Home
</NavLink>

            <NavLink
  to="/products"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-400 underline p-3 rounded-md font-extrabold" : ""
  }
>
Products
</NavLink>

            <NavLink
  to="/dashboard"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-green-600 underline p-3 rounded-md font-extrabold" : ""
  }
>
Dashboard
</NavLink>

            {/* <li><Link to={'/products'}>Products</Link></li>
            <li><Link to={'/dashboard'}>Dashboard</Link></li> */}
        </ul>


     </nav>
    
    </section>
    {
        navigation.state === 'loading '? <p>Loading ..</p> :  <Outlet className='min-h-screen'></Outlet>
    }
   
<Footer></Footer>


        </div>
    );
};

export default MainLayout;