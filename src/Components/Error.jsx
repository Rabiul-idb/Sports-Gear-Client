import { Link } from 'react-router-dom';
import error404 from '../assets/images/404.jpg';

const Error = () => {
    return (
        <div className='w-11/12 mx-auto '>
            <img src={error404} className='max-h-screen mx-auto' alt="" />
            <Link to={"/"} className="btn btn-info rounded-3xl text-lg font-bold mt-5 block w-fit pt-2 mx-auto">Back to Home</Link>
        </div>
    );
};

export default Error;