import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../Context/ContextData";
import StarRatings from "react-star-ratings";


const ApplyDetails = () => {

    const { user } = useContext(UserContext);

    const { id } = useParams();
    const idInt = parseInt(id);
    const apply = user.find(item => item.id === idInt);


    return (
        <div className="background-photo">
            <div className="flex justify-center items-center h-[100vh]">

                <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-[#0d3b66] bg-clip-border text-gray-700 shadow-md">
                    <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={apply.image}
                            alt="image"
                            class="h-full w-full object-cover"
                        />
                    </div>
                    <div class="p-6">
                        <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-cyan-400 antialiased capitalize">
                            Name : {apply.name}
                        </h6>
                        <h4 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-[#cae9ff] antialiased">
                            Title : {apply.title}
                        </h4>
                        <p class="mb-4 block font-sans text-base font-normal leading-relaxed text-[#cae9ff] antialiased">
                            <span className="text-xl">Description :</span> {apply.description}
                        </p>
                        <div className="flex justify-start items-center gap-5">
                            <div>
                                <StarRatings
                                    rating={apply.rating}
                                    starDimension="20px"
                                    starSpacing="5px"
                                />
                            </div>
                            <div>
                                <h5 className="text-[#cae9ff] text-base">{apply.rating}</h5>
                            </div>
                        </div>
                        <div className="py-2">
                            <p className="text-[#cae9ff] text-lg">Price : ${apply.price}</p>
                        </div>

                        <div>
                            <Link to="/">
                                <button
                                    className="btn bg-gradient-to-r from-sky-500 to-indigo-500 border-0 text-[#cae9ff] capitalize
                            ">Home</button>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default ApplyDetails;