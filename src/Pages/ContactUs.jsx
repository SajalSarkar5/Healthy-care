import { useContext, useState } from "react";
import { UserContext } from "../Context/ContextData";


const ContactUs = () => {

    const { user } = useContext(UserContext);
    const [contact, setContact] = useState(8)


    return (
        <div>
            <div className="text-center my-7">
                <h1 className="text-4xl text-[#cae9ff] font-semibold">Contact Us</h1>
            </div>
            <div className="mb-28">
                <hr />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    user.slice(0, contact).map((contact, i) => {
                        return <div key={i}>

                            <div class="relative flex flex-col rounded-xl bg-[#0d3b66] bg-clip-border shadow-md text-[#cae9ff] border-l-4">
                                <div class="p-6">
                                    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        {contact.name}
                                    </h5>
                                    <div className="py-1">
                                        <hr />
                                    </div>
                                    <div className="space-y-2">
                                        <p class="block font-sans text-lg font-light leading-relaxed text-inherit antialiased">
                                            <span className="text-xl font-medium">phone</span> : {contact.phone}
                                        </p>
                                        <p class="block font-sans text-lg font-light leading-relaxed text-inherit antialiased">
                                            <span className="text-xl font-medium">Email</span> : {contact.email}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    })
                }
            </div>

            <div className="text-center mt-10">
                <div className={contact === user.length && 'hidden'}>
                    <button
                        onClick={() => setContact(user.length)}
                        className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-[#cae9ff] capitalize border-0">Show All</button>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;