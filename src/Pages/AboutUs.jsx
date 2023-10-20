import React from 'react';
import Footer from './Footer';
import Header from '../components/Header';

const AboutUs = () => {
    return (
        <div>
            <div className='bg-about-us'>
                <Header></Header>
                <div className='flex justify-center items-center gap-6 flex-col md:flex-col lg:flex-row container mx-auto p-10 '>
                    <div className='flex-1 text-[#cae9ff] text-center space-y-5 px-2 md:px-4 lg:px-8'>
                        <h2 className="text-4xl font-semibold">About Us</h2>
                        <p className="text-base">At Healthy Care, we are passionate about promoting your well-being. Our team of experienced healthcare experts is dedicated to providing personalized solutions to enhance your health. We offer a wide range of services, including preventive care, consultations, and lifestyle guidance. With a focus on holistic health, we aim to empower you to lead a healthier, happier life. Your wellness is our priority.</p>
                    </div>
                    <div className='flex-1'>
                        <img className='w-full rounded-2xl' src="https://i.ibb.co/37Y0TWj/0248-637411200016894019.jpg" alt="" />
                    </div>
                </div>
                <div>

                    <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747733.0079936497!2d88.7136714646428!3d23.464233075334008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1696836037803!5m2!1sen!2sbd" width="" height="450"></iframe>

                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AboutUs;