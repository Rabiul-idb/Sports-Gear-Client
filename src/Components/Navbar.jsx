import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/sportsgearLogo.png';
import { FaBars } from "react-icons/fa6";
import { useContext, useState } from "react";
import { ContextProvider } from "./ContextProvider/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut, setUser } = useContext(ContextProvider);

  const [show, setShow] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: " Successfully LogOut",
          icon: "success",
          confirmButtonText: "OK",
        });
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-slate-100 shadow-md sticky top-0 z-10">
      <div className="navbar flex justify-between items-center w-11/12 mx-auto ">
        <div className="">
          <img src={logo} className="max-w-14" alt="" />
          <Link to={"/"} className="ml-1 text-lg lg:text-xl font-semibold ">
            SportsGear
          </Link>
        </div>
        <div>
          <ul className="hidden lg:flex gap-3 ">
            <li>
              <NavLink to={"/"} className="text-base font-medium">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/allEquipments"}
                className="text-base font-medium"
              >
                All Equipments
              </NavLink>
            </li>
            {user?.email && (
              <li>
                <NavLink to={"/addItem"} className="text-base font-medium">
                  Add Equipment
                </NavLink>
              </li>
            )}
            {user?.email && (
              <li>
                <NavLink
                  to={`/myEquipments/${user?.email}`}
                  className="text-base font-medium"
                >
                  My Equipments
                </NavLink>
              </li>
            )}
            {/* {
                    
                        user?.email && (<li><NavLink to={"/dashboard"} className="text-base font-semibold">Dashboard</NavLink></li>) 
                    } */}
            <li>
              <NavLink to={"/contact"} className="text-base font-medium">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to={"/aboutUs"} className="text-base font-medium">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="hidden lg:block font-medium text-black text-base mr-1">
            {user && user?.email ? user?.displayName : ""}
          </div>

          {user && user?.email ? (
            <div className="relative group">
              {/* User Icon */}
              <div
                tabIndex={0}
                role="button"
                className="userIcon btn btn-ghost btn-circle avatar"
              >
                <div className="w-11 rounded-full">
                  <img
                    alt="user"
                    className="w-11 h-11 rounded-full"
                    src={user?.photoURL}
                  />
                </div>
              </div>

              {/* Dropdown Menu */}
              <ul
                tabIndex={0}
                className="userInfo absolute -right-5 top-9 menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow hidden group-hover:block"
              >
                <li className="block lg:hidden">
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <a>{user?.email}</a>
                </li>
                <li>
                  <Link
                    to={"/user/updateInfo"}
                    className="justify-between text-info"
                  >
                    Update Profile
                  </Link>
                </li>
                <li
                  onClick={handleLogOut}
                  className="font-semibold text-red-500"
                >
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"} className="btn ">
              Login/Register
            </Link>
          )}
          {
            //    user && user?.email ? <Link to={'/login'} className="btn ">Login</Link> : <Link to={'/login'} className="btn ">Login/Register</Link>
          }
          {/* <Link to={'/login'} className="btn ">Login/Register</Link> */}

          {/* drawer start  */}

          <div className="lg:hidden drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">{/* Page content here */}</div>
            <div className="drawer-side z-20">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4">
                <h2 className="font-bold text-xl flex items-center justify-center gap-2">
                  <img src={logo} className="max-w-14" alt="" />
                  SportsGear
                </h2>
                <div className="divider divider-info"></div>

                <li>
              <NavLink to={"/"} className="text-base font-medium">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/allEquipments"}
                className="text-base font-medium"
              >
                All Equipments
              </NavLink>
            </li>
            {user?.email && (
              <li>
                <NavLink to={"/addItem"} className="text-base font-medium">
                  Add Equipment
                </NavLink>
              </li>
            )}
            {user?.email && (
              <li>
                <NavLink
                  to={`/myEquipments/${user?.email}`}
                  className="text-base font-medium"
                >
                  My Equipments
                </NavLink>
              </li>
            )}
            {/* {
                    
                        user?.email && (<li><NavLink to={"/dashboard"} className="text-base font-semibold">Dashboard</NavLink></li>) 
                    } */}
            <li>
              <NavLink to={"/contact"} className="text-base font-medium">
                Contact
              </NavLink>
            </li>
              </ul>
            </div>
          </div>

          <label
            htmlFor="my-drawer-4"
            className="lg:hidden drawer-button btn border rounded-full ml-2 text-base"
          >
            <FaBars className=""></FaBars>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
