import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";


const Root = () => {
    return (
        <div>
            <div className=" ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;