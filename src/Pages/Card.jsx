import { useContext, useState } from "react";
import { UserContext } from "../Context/ContextData";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";


const Card = () => {

    const { user } = useContext(UserContext)


    const [dataLength, setDataLength] = useState(8)

    return (
        <div>
            <div className="text-center mb-7">
                <h1 className="text-4xl text-[#cae9ff] font-semibold">Our Service</h1>
            </div>
            <div className="mb-28">
                <hr />
            </div>
            <div>

            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>

                {
                    user.slice(0, dataLength).map((card, i) => {
                        return <div key={i}>


                            <div className="card card-compact bg-[#0d3b66] shadow-xl text-[#cae9ff]">
                                <figure>
                                    <img className="h-[400px] w-full" src={card.image} alt="" />
                                </figure>
                                <div className="card-body h-[250px] md:h-[28 0px] lg:h-[250px]">
                                    <h2 className="card-title">Name : {card.name}</h2>
                                    <p className="text-lg">title : {card.title}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex justify-start items-center gap-5">
                                            <div>
                                                <StarRatings
                                                    rating={card.rating}
                                                    starDimension="20px"
                                                    starSpacing="5px"
                                                />
                                            </div>
                                            <div>
                                                <h5 className="text-[#cae9ff] text-base">{card.rating}</h5>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center gap-2">
                                            <p>Price :</p>
                                            <p className="text-[#cae9ff] text-lg">$ {card.price}</p>
                                        </div>

                                    </div>
                                    <div className="py-4">
                                        <Link to={`/apply/${card.id}`}>
                                            <button className="btn w-full bg-gradient-to-r from-sky-500 to-indigo-500 border-0 text-[#cae9ff] capitalize">Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    })
                }

            </div>
            <div className="text-center mt-10">
                <div className={dataLength === user.length && 'hidden'}>
                    <button
                        onClick={() => setDataLength(user.length)}
                        className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-[#cae9ff] capitalize border-0">Show All</button>
                </div>
            </div>
        </div>
    );
};

export default Card;