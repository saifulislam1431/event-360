import SectionHead from "../../../components/SectionHead";
import Lottie from "lottie-react";
import faqData from "../../../../public/FAQ.json";



const FrequentlyAskedQuestion = () => {
    return (
        <section className="my-20 custom-bg">
            <SectionHead title="Frequently Asked Questions" description="Have questions about planning your event? Explore our frequently asked questions to find answers and insights that will guide you through the event management process.
" />

            <div className="my-16 flex flex-col lg:flex-row items-center justify-center px-3 md:px-4 lg:px-7">
                <div className="w-full lg:w-1/2" data-aos="fade-up-right" data-aos-duration="2000">
                    <Lottie animationData={faqData} loop={true} />
                </div>
                <div className="w-full" data-aos="fade-up-left" data-aos-duration="2000">
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center px-3  gap-6 my-10'>
                        <div className='space-y-5'>
                            <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                                <input type="checkbox" />
                                <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                                    How far in advance should I start planning my event?
                                </div>
                                <div className="collapse-content">
                                    <p className='mt-2 font-medium'>We recommend starting the planning process at least 6 to 12 months before your event date. This allows ample time for venue booking, vendor selection, and coordination of all details.
                                    </p>
                                </div>
                            </div>

                            <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                                <input type="checkbox" />
                                <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                                    What factors should I consider when choosing an event venue?
                                </div>
                                <div className="collapse-content">
                                    <p className='mt-2 font-medium'>Consider the location, capacity, amenities, and overall ambiance of the venue. Ensure it aligns with your event theme and provides the necessary facilities for your guests.
                                    </p>
                                </div>
                            </div>

                            <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                                <input type="checkbox" />
                                <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                                    How can I create a budget for my event?

                                </div>
                                <div className="collapse-content">
                                    <p className='mt-2 font-medium'>Start by outlining your event priorities and allocating funds accordingly. Consider venue costs, catering, entertainment, and any additional services. Be sure to set aside a contingency fund for unexpected expenses.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-5'>
                            <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                                <input type="checkbox" />
                                <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                                    What permits do I need for hosting an outdoor event?

                                </div>
                                <div className="collapse-content">
                                    <p className='mt-2 font-medium'>Check with local authorities for any required permits, such as noise permits, liquor licenses, and health permits. Ensure compliance with regulations to avoid any issues on the day of your event.
                                    </p>
                                </div>
                            </div>

                            <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                                <input type="checkbox" />
                                <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                                    How can I promote my event effectively?

                                </div>
                                <div className="collapse-content">
                                    <p className='mt-2 font-medium'>Utilize social media, create a dedicated event website, and collaborate with influencers or partners. Consider traditional methods such as flyers and press releases. Engage your audience with teasers and updates to build anticipation.
                                    </p>
                                </div>
                            </div>

                            <div tabIndex={0} className="collapse collapse-arrow shadow-lg bg-secondary bg-opacity-20 rounded-lg">
                                <input type="checkbox" />
                                <div className="collapse-title text-lg font-semibold border-b-2 border-b-primary">
                                    What are some tips for ensuring smooth event day operations?

                                </div>
                                <div className="collapse-content">
                                    <p className='mt-2 font-medium'>Create a detailed timeline, communicate effectively with vendors, and designate a point of contact for each aspect of your event. Have contingency plans in place, and conduct a thorough walkthrough before the event to identify any potential issues.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrequentlyAskedQuestion;