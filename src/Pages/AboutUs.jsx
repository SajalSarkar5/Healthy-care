import React from 'react';
import Footer from './Footer';

const AboutUs = () => {
    return (
        <div>
            <div className='bg-about-us'>
                <div className='flex justify-center items-center gap-6 flex-col md:flex-col lg:flex-row container mx-auto p-10 '>
                    <div className='flex-1 text-[#cae9ff] text-center space-y-5 px-2 md:px-4 lg:px-8'>
                        <h2 className="text-4xl font-semibold">About Us</h2>
                        <p className="text-base">At Healthy Care, we are passionate about promoting your well-being. Our team of experienced healthcare experts is dedicated to providing personalized solutions to enhance your health. We offer a wide range of services, including preventive care, consultations, and lifestyle guidance. With a focus on holistic health, we aim to empower you to lead a healthier, happier life. Your wellness is our priority.</p>
                    </div>
                    <div className='flex-1'>
                        <img className='w-full rounded-2xl' src="https://i.ibb.co/37Y0TWj/0248-637411200016894019.jpg" alt="" />
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AboutUs;