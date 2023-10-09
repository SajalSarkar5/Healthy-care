import React, { useContext } from 'react';
import Banner from './Banner';
import { UserContext } from '../Context/ContextData';
import Card from './card';
import Header from '../components/Header';
import ContactUs from './ContactUs';
import Footer from './Footer';
import MedicalCenter from './MedicalCenter';

const Home = () => {

    const { user } = useContext(UserContext)
    // console.log(user)

    return (
        <div>

            <div className='background-img'>
                <Header></Header>
                <Banner></Banner>
                <div className='my-12'>
                    <Card></Card>
                </div>
                <MedicalCenter></MedicalCenter>
                <ContactUs></ContactUs>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default Home;