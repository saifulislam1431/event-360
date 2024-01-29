import useGetTestimonial from "../../../hooks/useGetTestimonial";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './testimonial.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { TTestimonial } from "./testimonial.type";
import Testimonial from "./Testimonial";


const Testimonials = () => {
    const { allTestimonial } = useGetTestimonial();
    return (
        <section className="mt-40 lg:mt-52 mb-28 bg-gradient-to-l from-secondary to-primary w-full h-full lg:h-[500px]">
            <div className="p-3 md:p-4 lg:p-7">
                <div className="mb-10">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-white">What everyone says</h1>
                </div>

                <div className="hidden lg:flex">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        autoplay={false}
                        pagination={true}
                        navigation={true}
                        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            allTestimonial?.map((review: TTestimonial) => <SwiperSlide key={review?._id} className='bg-[#8190A6] rounded bg-opacity-30 relative text-base-100'>
                                <div className='w-full h-full p-5 relative'>
                                    <div>
                                        <p className=''>{review?.comment}</p>
                                    </div>
                                    <div className='flex mt-8 items-center gap-2 absolute bottom-7'>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src={review?.client_image} alt="client image" />
                                            </div>
                                        </div>

                                        <div>
                                            <p>{review?.client_name}</p>
                                            <p className="text-sm text-[#8190A6]">{review?.event_name}</p>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>

                <div className="lg:hidden flex flex-col gap-6">
                    {
                        allTestimonial?.map((review: TTestimonial) => <Testimonial key={review?._id} review={review} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;