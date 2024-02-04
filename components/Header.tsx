import Image from "next/image"
import Navbar from "./Navbar"
import { AspectRatio } from "./ui/aspect-ratio"

export default function Header() {
    return (
    <div>
        <Navbar />
        {/* <div className="h-[200px]">
        <AspectRatio ratio={9/16}>
        <div className="bg-[url('/cairnstonesbsb2.jpg')] h-[200px]">hi</div>
        </AspectRatio>
        </div> */}
        <div className="h-[300px] w-full bg-black">
            <div className="w-full bg-secondary flex justify-center items-center flex-col">
                <h2 className="text-white text-[42px] mt-8 tracking-wider font-bold">Where I<span className="text-[#f50057] tracking-wide animate-pulse animate-duration-[6000ms]">mag</span>inat<span className="text-[#f50057] tracking-wide animate-pulse animate-duration-[6000ms] animation-delay-[4000ms]">i</span>on Be<span className="text-[#f50057] animate-pulse animate-duration-[5000ms] animation-day-[6000ms]">c</span>omes<span className="fancyFont ml-1 fancyColor animate-fade-left ">Reality</span></h2>
                <h3 className="text-white text-[24px] animate-flip-up animate-fade-in animate-duration-[3000ms] animate-delay-[5000ms]">Dive into a world where anything is possible</h3>
            </div>
        </div>
    </div>

    )
}