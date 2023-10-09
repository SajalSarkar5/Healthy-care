import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../Context/ContextData";


const Header = () => {
    const { users, logOut } = useContext(UserContext);

    const handleSingOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#cae9ff]text-lg underline" : ""
        } to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#cae9ff] text-lg underline" : ""
        } to="/about">About Us</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#cae9ff] text-lg underline" : ""
        } to="/blog">Blog</NavLink></li>
    </>


    return (
        <div className="navbar bg-[#233f8b75]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52 text-[#cae9ff]">
                        {links}
                    </ul>
                </div>
                <a className=" normal-case text-[#cae9ff] text-2xl font-medium">Healthy <span className="text-cyan-400">care</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal px-1 text-[#cae9ff] flex gap-12">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex justify-end items-center gap-6">
                <div className="avatar">
                   
                </div>
                <div>
                    {
                        users ?
                            <button onClick={handleSingOut} className="btn bg-gradient-to-r from-sky-500 to-indigo-500 border-0 text-[#cae9ff] capitalize">Sing Out</button>
                            :
                            <Link to="/login">
                                <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 border-0 text-[#cae9ff] capitalize">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;