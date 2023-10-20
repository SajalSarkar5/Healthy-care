

const MedicalCenter = () => {
    return (
        <div className="flex justify-center gap-6 flex-col md:flex-col lg:flex-row my-12">
            <div className="w-full md:w-full lg:w-3/5">
                <img className="rounded-2xl w-[100%] h-[70vh]" src="https://i.ibb.co/SKBhTyq/Img-Intro-Healthcare-2x.jpg" alt="" />
            </div>
            <div className="text-[#cae9ff] w-full md:w-full lg:w-2/5 space-y-5 px-0 md:px-0 lg:px-10 text-center md:text-center lg:text-start">
                <h2 className="text-4xl font-semibold">Medical Center</h2>
                <p className="text-base">A medical center is a healthcare facility staffed by professionals and equipped with advanced technology, offering a wide range of services, including consultations, surgeries, diagnostic testing, and emergency care. It serves as a centralized hub for comprehensive healthcare, ensuring patients have access to various medical specialties and treatments.</p>
            </div>
        </div>
    );
};

export default MedicalCenter;