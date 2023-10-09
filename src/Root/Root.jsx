import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div>
            <div className=" ">
                <Outlet></Outlet>
                <Toaster/>
            </div>
        </div>
    );
};

export default Root;