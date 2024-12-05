import { createContext, useEffect, useState } from "react";
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const ContextProvider = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)


const AuthContext = ({children}) => {

    const [allItems, setAllItems] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() =>{
        fetch('http://localhost:5000/allItems')
        .then(res => res.json())
        .then(data => setAllItems(data))
    }, [])
   // console.log(allItems);


   // create user by email and password
   const creatNewUser = (email, password)=> {

    return createUserWithEmailAndPassword(auth, email, password)
   }

   // Observer
   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
        if(currentUser){
            setUser(currentUser);
        }
        
    })
    return unSubscribe;
   },[])

   // login
   const userLogin = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
   }


    const contextValue = {
        allItems,
        setAllItems,
        creatNewUser,
        user,
        setUser,
        userLogin,

    }

    return (
       
            <ContextProvider.Provider value={contextValue}>{children}</ContextProvider.Provider>
       
    );
};

export default AuthContext;