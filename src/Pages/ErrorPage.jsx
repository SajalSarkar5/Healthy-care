import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-[400px] bg-about-us flex justify-center items-center">
            <div className="text-center space-y-2">
                <h2 className="text-4xl text-[#cae9ff] font-bold">404</h2>
                <h5 className="text-xl md:text-2xl lg:text-2xl text-[#cae9ff] font-semibold">Oops! That page can't be found</h5>
                <p className="text-lg text-[#cae9ff] font-medium">The page you are looking for it maybe deleted</p>
                <div className="text-center mt-5">
                    <Link to='/'><button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 border-0 text-[#cae9ff] capitalize">Go To Home</button></Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;