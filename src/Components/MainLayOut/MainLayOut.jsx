import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Cta from "../Cta";

const MainLayOut = () => {
    return (
        <div className="max-w-[1920px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Cta></Cta>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;