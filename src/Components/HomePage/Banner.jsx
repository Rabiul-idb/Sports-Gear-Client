// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';



// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Banner() {
  return (
    <div className='my-8'>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        autoplay={true}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          
        <img src={banner1} className='object-cover' alt="" />


            {/* <div className='bg-banner-1 bg-no-repeat bg-cover  h-[600px]'>
                <div className='container pt-24'>
                    <p className="text-lg uppercase font-semibold space-x-3 text-info">Discover Your Path</p>
                    <h1 className='text-4xl font-semibold text-rose-700 mt-2 mb-3'>Find the Career That Matches Your Passion!</h1>
                    <p className='px-40 font-semibold text-black'>Explore various industries and career options.
                        Get insights into trending job roles and opportunities.
                        Take the first step toward building a fulfilling future.
                    </p>
                    <button className='btn btn-info mt-3'>Get Started</button>
                </div>
            </div> */}
        </SwiperSlide>
        <SwiperSlide>

              <img src={banner2} className='' alt="" />

            {/* <div className='bg-banner-2 bg-no-repeat bg-cover bg-center h-[600px]'>
            <div className='container pt-24'>
                    <p className="text-lg uppercase font-semibold space-x-3 text-info">Personalized Guidance</p>
                    <h1 className='text-4xl font-semibold text-rose-700 mt-2 mb-3'>Your Goals, Your Journey, Our Support!</h1>
                    <p className='px-40 font-semibold text-black'>Access expert career counseling tailored to your aspirations.
                        Identify your strengths with assessments and resources.
                        Plan your career path step-by-step with our tools.
                    </p>
                    <button className='btn btn-info mt-3'>Get Started</button>
                </div>
            </div> */}
        </SwiperSlide>
        <SwiperSlide>

              <img src={banner3} alt="" />

            {/* <div className='bg-banner-3 bg-no-repeat bg-cover bg-center h-[600px]'>
            <div className='container pt-24'>
                    <p className='text-lg uppercase font-semibold space-x-3 text-info'>Achieve Your Dreams</p>
                    <h1 className='text-4xl font-semibold text-rose-700 mt-2 mb-3'>Turn Ambitions Into Achievements!</h1>
                    <p className='px-40 font-semibold text-black'>Learn essential skills to excel in your chosen field.
                        Connect with top mentors and industry leaders.
                        Stay ahead with the latest career trends and insights.
                    </p>
                    <button className='btn btn-info mt-3'>Get Started</button>
                </div>
            </div> */}
        </SwiperSlide>
       
        
      </Swiper>
    </div>
  );
}
