import { useContext } from "react";
import { ContextProvider } from "../ContextProvider/AuthContext";
import Loading from '../Loading';
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(ContextProvider);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){
        return children;
    }

    return (
        <Navigate to={'/login'} state={location.pathname}></Navigate>
    );
};

export default PrivateRoute;