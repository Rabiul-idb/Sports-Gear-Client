import about2 from '../assets/images/abt2.webp';
import icon from '../assets/images/sportsgearLogo.png';

const AboutPage = () => {
    return (
        <div className="w-11/12 mx-auto grid lg:grid-cols-2 items-center gap-10 my-24">
            <div className='h-full'>
                <img src={about2} className="rounded-xl w-full h-full object-cover" alt="" />
            </div>
            <div>
                <span className="text-lg font-semibold uppercase text-info mb-10">About Us</span>
                <h2 className="text-xl md:text-3xl lg:text-3xl font-bold text-slate-900 mt-3 mb-6 leading-tight">Innovating the Future of <br></br>Sports Equipment</h2>
                <p className="text-base font-semibold text-slate-700 ">
                we are dedicated to revolutionizing the way athletes and enthusiasts experience sports. With cutting-edge technology, premium materials, and a passion for excellence, we design equipment that enhances performance, maximizes comfort, and empowers you to achieve your goals.
                </p>
               <div className='grid md:grid-cols-2 gap-7 mt-10'>
                    <div className='flex gap-6'>
                        <div>
                            <img src={icon} className="object-cover"/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg lg:text-xl text-black mb-4'>Customized Sports Gear</h3>
                            <p className='font-medium text-base text-gray-500'>
                            Get tailor-made equipment designed to fit your needs, performance, and style on the field.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <img src={icon} className="object-cover"/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg lg:text-xl text-black mb-4'>Expert Equipment Consultation</h3>
                            <p className='font-medium text-base text-gray-500'>
                            Our specialists provide personalized guidance help you for your sport and skill level.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <img src={icon} className="object-cover"/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg lg:text-xl text-black mb-4'>Fast & Reliable Delivery</h3>
                            <p className='font-medium text-base text-gray-500'>
                            Enjoy quick, hassle-free shipping with real-time tracking when you need it most.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <img src={icon} className="object-cover"/>
                        </div>
                        <div>
                            <h3 className='font-bold text-lg lg:text-xl text-black mb-4'>Gear Repairs</h3>
                            <p className='font-medium text-base text-gray-500'>
                            Extend sports equipment with our professional maintenance and repair services.
                            </p>
                        </div>
                    </div>
               </div>
                
            </div>
        </div>
    );
};

export default AboutPage;