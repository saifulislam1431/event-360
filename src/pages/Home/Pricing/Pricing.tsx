import { Check } from "lucide-react";

const Pricing = () => {
    return (
        <section className="mt-24 mb-24 lg:mb-72">
            <div className="h-full lg:h-[450px] bg-gradient-to-r from-accent to-base-100 w-full p-3 md:p-4 lg:p-7 relative">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold">Ready to get started?</h1>
                    <p className="text-[#566B84]">Elevate your event with our diverse pricing options. From 'Basic' to 'Premium,' each package offers unique features and facilities tailored to your needs. Experience seamless event planning, exclusive venues, and luxurious setups at affordable prices.</p>
                </div>

                <div className="lg:absolute flex items-center justify-center gap-7 flex-col lg:flex-row my-10 ">
                    <div className="w-[350px] h-[550px] p-10 bg-base-100 rounded-md shadow hover:bg-primary hover:text-white transition-all duration-500 relative card-div cursor-pointer">
                        <p className="text-lg font-semibold">Basic Package</p>
                        <p className="font-extrabold text-3xl mt-3">$299<sub><small className="font-medium">/event</small></sub></p>

                        <ul className="font-medium mt-10 space-y-4">
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Event Planning Assistance</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Venue Selection Support</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Basic Decorations</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Up to 50 Guests</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Standard Seating Arrangement</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Event Coordination</li>
                        </ul>

                        <div className="w-4/5 absolute bottom-10 mx-auto flex items-center justify-center">
                            <button className="card-btn">Get The Package</button>
                        </div>

                    </div>

                    <div className="w-[350px] h-[550px] p-10 bg-base-100 rounded-md shadow hover:bg-primary hover:text-white transition-all duration-500 relative card-div cursor-pointer">
                        <p className="text-lg font-semibold">Standard Package</p>
                        <p className="font-extrabold text-3xl mt-3">$599<sub><small className="font-medium">/event</small></sub></p>

                        <ul className="font-medium mt-10 space-y-4">
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Event Planning and Coordination</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Premium Venue Selection</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Themed Decorations</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Up to 100 Guests</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Custom Seating Arrangement</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Catering Coordination</li>
                        </ul>

                        <div className="w-4/5 absolute bottom-10 mx-auto flex items-center justify-center">
                            <button className="card-btn">Get The Package</button>
                        </div>

                    </div>

                    <div className="w-[350px] h-[550px] p-10 bg-base-100 rounded-md shadow hover:bg-primary hover:text-white transition-all duration-500 relative card-div cursor-pointer">
                        <p className="text-lg font-semibold">Premium Package</p>
                        <p className="font-extrabold text-3xl mt-3">$999<sub><small className="font-medium">/event</small></sub></p>

                        <ul className="font-medium mt-10 space-y-4">
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Full-Service Event Planning</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Exclusive Venue Selection</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Luxurious Decor and Setup</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Up to 200 Guests</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />VIP Seating Area</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Full Catering Services</li>
                            <li className="flex items-center gap-1"><Check className="text-primary check-icon" />Audio-Visual Production</li>
                        </ul>

                        <div className="w-4/5 absolute bottom-10 mx-auto flex items-center justify-center">
                            <button className="card-btn">Get The Package</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;