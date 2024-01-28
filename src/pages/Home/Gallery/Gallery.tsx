import { BadgeCheck } from "lucide-react";
import party from "../../../assets/gallery/Party.png";
import Explosion from "../../../assets/gallery/Explosion.png";
import picture1 from "../../../assets/gallery/Picture1.png";
import picture2 from "../../../assets/gallery/Picture2.png";
import picture3 from "../../../assets/gallery/Picture3.png";
import picture4 from "../../../assets/gallery/Picture4.png";
import picture5 from "../../../assets/gallery/Picture5.png";
import picture6 from "../../../assets/gallery/Picture6.png";
import picture7 from "../../../assets/gallery/Picture7.png";
import picture8 from "../../../assets/gallery/Picture8.png";
import picture9 from "../../../assets/gallery/Picture9.png";
import picture10 from "../../../assets/gallery/Picture10.png";

const Gallery = () => {
    return (
        <section className="my-24 px-3 md:px-4 lg:px-7 flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-5">

            <div className="w-full lg:w-2/3 space-y-5">
                <h1 className="text-4xl md:text-5xl font-semibold">Gallery</h1>
                <p className="text-[#566B84]">Immerse yourself in a visual journey through our curated gallery. From mesmerizing sunsets to dynamic performances, explore a collection of captivating moments captured in time.</p>

                <ul className="space-y-3">
                    <li className="flex items-center gap-1 text-sm font-medium"><BadgeCheck className="h-4 w-4 stroke-green-600" />One day pas access all lecture</li>
                    <li className="flex items-center gap-1 text-sm font-medium"><BadgeCheck className="h-4 w-4 stroke-green-600" />Lunch and Snack</li>
                    <li className="flex items-center gap-1 text-sm font-medium"><BadgeCheck className="h-4 w-4 stroke-green-600" />Meet Event Speaker</li>
                    <li className="flex items-center gap-1 text-sm font-medium"><BadgeCheck className="h-4 w-4 stroke-green-600" />Front Seat</li>
                    <li className="flex items-center gap-1 text-sm font-medium"><BadgeCheck className="h-4 w-4 stroke-green-600" />One day pas access all lecture</li>
                </ul>
            </div>

            <div className="w-full relative h-full">
                <div className="absolute  -top-10 lg:top-0 lg:-left-24">
                    <img src={party} alt="party" className="w-20 lg:w-36" />
                </div>

                <div className="grid grid-cols-12 items-center justify-items-end">
                    <div className="col-span-3 flex flex-col items-end">
                        <img src={picture1} alt="picture1" />
                        <img src={picture2} alt="picture2" />
                    </div>

                    <div className="col-span-3 flex flex-col items-end">
                        <img src={picture3} alt="picture3" />
                        <img src={picture4} alt="picture4" />
                        <img src={picture5} alt="picture5" />
                    </div>

                    <div className="col-span-3 flex flex-col items-end">
                        <img src={picture6} alt="picture6" />
                        <img src={picture7} alt="picture7" />
                        <img src={picture8} alt="picture8" />
                    </div>
                    <div className="col-span-3 flex flex-col items-end">
                        <img src={picture9} alt="picture9" />
                        <img src={picture10} alt="picture10" />
                    </div>
                </div>

                <div className="absolute -bottom-5 right-0 lg:-bottom-16 lg:right-0">
                    <img src={Explosion} alt="Explosion" className="w-20 lg:w-36" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;