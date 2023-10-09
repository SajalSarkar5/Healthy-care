import { useContext } from "react";
import { UserContext } from "../Context/ContextData";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from "react-slideshow-image";
import { Link } from "react-router-dom";




const Banner = () => {

    const { user } = useContext(UserContext)


    return (
        <div>


            <Fade
                onChange={function noRefCheck() { }}
                onStartChange={function noRefCheck() { }}
            >

                {
                    user.map((item, i) => {
                        return <div key={i}>
                            <div className="each-slide]">
                                <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row lg:h-[80vh] mt-6 md:mt-0 lg:mt-0 pl-0 md:pl-10 lg:pl-0">
                                    <div className="flex-1 lg:py-20 lg:px-40 space-y-3">
                                        <small className="text-[#cae9ff] py-1 border-b-2">Name :</small>
                                        <h5 className="text-[#cae9ff] text-lg">{item.name}</h5>
                                        <small className="text-[#cae9ff] border-b-2">Title :</small>
                                        <h3 className=" text-lg md:text-xl lg:text-3xl font-medium text-[#cae9ff]">
                                            {item.title}
                                        </h3>
                                        <div>

                                        </div>
                                        <div className="py-3">
                                            <Link to={`/apply/${item.id}`}>
                                                <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-[#cae9ff] capitalize border-0">Read More</button>
                                            </Link>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="p-20">
                                        <img className="w-[400px]"
                                            alt="First image"
                                            src={item.image}
                                        />
                                    </div>

                                </div>

                            </div>
                        </div>
                    })
                }





            </Fade>





        </div>
    );
};

export default Banner;