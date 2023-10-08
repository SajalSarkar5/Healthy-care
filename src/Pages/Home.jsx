import React, { useContext } from 'react';
import Banner from './Banner';
import { UserContext } from '../Context/ContextData';
import Card from './card';

const Home = () => {

    const { user } = useContext(UserContext)
    // console.log(user)

    return (
        <div>

            <div className='my-12'>
                <Banner></Banner>
                <div className='my-12 px-5'>
                    <Card></Card>
                </div>
            </div>

        </div>
    );
};

export default Home;