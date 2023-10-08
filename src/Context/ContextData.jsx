import { createContext, useEffect, useState } from "react";


export const UserContext = createContext(null);


const ContextData = ({ children }) => {


    const [user, SetUser] = useState([])

    useEffect(() => {
        fetch('FakeData.json')
            .then(res => res.json())
            .then(data => SetUser(data))
    }, [])


    const passingValue = {
        user
    }



    return (
        <div>
            <UserContext.Provider value={passingValue}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default ContextData;