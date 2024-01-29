import { TTestimonial } from "./testimonial.type";

const Testimonial = ({ review }: { review: TTestimonial }) => {
    return (
        <div key={review._id} className='bg-[#8190A6] rounded bg-opacity-30 relative text-base-100'>
            <div className='w-full h-[280px] p-5 relative'>
                <div>
                    <p className=''>{review.comment}</p>
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
        </div>
    );
};

export default Testimonial;