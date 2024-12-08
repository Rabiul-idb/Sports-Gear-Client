
import { Link } from 'react-router-dom';
import googlePlay from '../assets/images/image.png';
import { FaRegEnvelope } from 'react-icons/fa6';

const Cta = () => {
    return (
        <div className=' flex gap-6 flex-col md:flex-row justify-between  md:py-1 px-10 py-5 mt-5 shadow-lg rounded-xl bg-info w-10/12 mx-auto relative'>
            <div className='flex gap-2'>
                    
                <FaRegEnvelope className='text-5xl font-bold mt-4 text-white'/>
                    
               <div>
                    <h2 className="font-semibold text-xl md:text-2xl  text-white mt-3 ">Subscribe to Our Newsletter</h2>
                    <p className='font-semibold text-base text-white'>Get all the latest information on Events, Sales and Offers.</p>
                    <Link to={'/contact'} className='btn bg-white mt-2'>Contact us</Link>
               </div>
            </div>
            <div className='flex items-center gap-2'>
               <div>
                    <h2 className="font-semibold text-xl md:text-2xl text-white mt-3 leading-tight">Download Our New App</h2>
                    <p className='font-semibold text-base text-white mb-2'>Dont Miss our mobile-only offers and shop with Android Play.</p>
                    <Link className=''><img src={googlePlay} alt="" /></Link>
               </div>
            </div>
            
        </div>
    );
};

export default Cta;