import React, { useContext } from 'react';
import Banner from './Banner';
import { UserContext } from '../Context/ContextData';
import Card from './card';
import Header from '../components/Header';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Home = () => {

    const { user } = useContext(UserContext)
    // console.log(user)

    return (
        <div>

            <div className='my-12 background-img px-5'>
                <Header></Header>
                <Banner></Banner>
                <div className='my-12'>
                    <Card></Card>
                </div>
                <ContactUs></ContactUs>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default Home;