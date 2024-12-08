import { createContext, useEffect, useState } from "react";
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const ContextProvider = createContext();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)


const AuthContext = ({children}) => {

    const [allItems, setAllItems] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch('https://server-side-pi-ashy.vercel.app/allItems')
        .then(res => res.json())
        .then(data => setAllItems(data))
    }, [])
   // console.log(allItems);


   // create user by email and password
   const creatNewUser = (email, password)=> {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
   }

   // Observer
   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
        if(currentUser){
            setUser(currentUser);
        }
        setLoading(false);
        
    })
    return unSubscribe;
   },[])

   // login
   const userLogin = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   }

   // logOUt
   const logOut = () =>{
    setLoading(true);
    //console.log("logout authentication")
    return signOut(auth);
    }

    const contextValue = {
        allItems,
        setAllItems,
        creatNewUser,
        user,
        setUser,
        userLogin,
        logOut,
        auth,
        loading,
        setLoading,

    }

    return (
       
            <ContextProvider.Provider value={contextValue}>{children}</ContextProvider.Provider>
       
    );
};

export default AuthContext;