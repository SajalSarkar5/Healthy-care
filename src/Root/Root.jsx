import { Outlet } from "react-router-dom";
import Header from "../components/Header";


const Root = () => {
    return (
        <div>
            <div className=" background-img">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;