import { Outlet } from "react-router-dom";
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