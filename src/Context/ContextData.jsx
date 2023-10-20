import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import app from "../firebase/firebase.config";


export const UserContext = createContext(null);

const auth = getAuth(app);






const ContextData = ({ children }) => {
    const provider = new GoogleAuthProvider();

    const [user, SetUser] = useState([])

    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google signin

    const googleSignin = () => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    useEffect(() => {
        fetch('FakeData.json')
            .then(res => res.json())
            .then(data => SetUser(data))
    }, [])


    const passingValue = {
        user,
        loading,
        createUser,
        users,
        logOut,
        singIn,

        // google
        googleSignin

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