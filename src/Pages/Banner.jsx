import { useContext } from "react";
import { UserContext } from "../Context/ContextData";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from "react-slideshow-image";




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
                                <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row h-[80vh]">
                                    <div className="flex-1 py-20 lg:px-40 space-y-3">
                                        <small className="text-[#cae9ff] py-1 border-b-2">Name :</small>
                                        <h5 className="text-[#cae9ff] text-lg">{item.name}</h5>
                                        <small className="text-[#cae9ff] border-b-2">Title :</small>
                                        <h3 className="text-3xl font-medium text-[#cae9ff]">
                                            {item.title}
                                        </h3>
                                        <div>

                                        </div>
                                        <div className="py-3">
                                            <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-[#cae9ff] capitalize border-0">Read More</button>
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