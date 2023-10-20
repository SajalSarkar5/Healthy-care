import Header from "../components/Header";
import Footer from "./Footer";


const Blog = () => {
    return (
        <div className="bg-about-us">
            <Header></Header>
            <div className="text-center text-[#cae9ff] mt-7">
                <h3 className="text-2xl font-semibold">Services</h3>
                <h5 className="text-lg font-medium">Here are these services</h5>
            </div>
            <div className="my-4 container mx-auto">
                <hr />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto my-12">
                <div>
                    <div class="relative flex flex-col rounded-xl bg-[#0d3b66] bg-clip-border text-[#cae9ff] shadow-md h-[220px]">
                        <div class="p-6">
                            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Preventive Wellness Programs
                            </h5>
                            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Our preventive wellness programs at Healthy Care are designed to keep you healthy and thriving. We offer personalized plans that focus on nutrition, fitness, and lifestyle to prevent health issues and promote longevity.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="relative flex flex-col rounded-xl bg-[#0d3b66] bg-clip-border text-[#cae9ff] shadow-md h-[220px]">
                        <div class="p-6">
                            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Expert Consultations
                            </h5>
                            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Healthy Care provides access to experienced healthcare professionals who offer expert consultations for various medical concerns. Whether you need advice on managing chronic conditions or seeking guidance on general health, we're here to help.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="relative flex flex-col rounded-xl bg-[#0d3b66] bg-clip-border text-[#cae9ff] shadow-md h-[220px]">
                        <div class="p-6">
                            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Specialized Treatment Options
                            </h5>
                            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            At Healthy Care, we offer specialized treatment options tailored to your specific health needs. Our team of specialists provides cutting-edge therapies and interventions to address a wide range of medical conditions.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="relative flex flex-col rounded-xl bg-[#0d3b66] bg-clip-border text-[#cae9ff] shadow-md h-[220px]">
                        <div class="p-6">
                            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Holistic Wellness Approach
                            </h5>
                            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Experience a holistic wellness approach at Healthy Care, where we focus on your physical, mental, and emotional well-being. Our services encompass mind-body balance, stress management, and emotional health support.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="relative flex flex-col rounded-xl bg-[#0d3b66] bg-clip-border text-[#cae9ff] shadow-md h-[220px]">
                        <div class="p-6">
                            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Health Screenings and Diagnostics
                            </h5>
                            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            We offer comprehensive health screenings and diagnostics to identify potential health risks early. Timely screenings can help you take proactive steps towards maintaining optimal health.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="relative flex flex-col rounded-xl bg-[#0d3b66] bg-clip-border shadow-md text-[#cae9ff] h-[220px]">
                        <div class="p-6">
                            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Nutritional Guidance
                            </h5>
                            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            Healthy Care provides nutritional guidance and dietary plans to optimize your health. Our nutrition experts work with you to create a balanced and personalized diet that suits your unique requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;