import { FaCommentAlt } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";


const Service = () => {
    return (
        <div className="w-11/12 mx-auto grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mb-10">
            <div className="flex items-center gap-4 bg-white shadow-lg rounded-md px-3 py-3">
                <div className=" h-14 w-14 rounded-full bg-info flex items-center justify-center">
                    <IoIosFootball className="text-4xl text-white"/>
                </div>
                <div>
                    <h2 className="font-semibold lg:text-lg text-lg text-black">Equipment Finder</h2>
                    <p className="text-black">Find the equipment easily</p>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-white shadow-lg rounded-md px-3 py-3">
                <div className=" h-14 w-14 rounded-full bg-info flex items-center justify-center">
                    <FaCommentAlt className="text-3xl text-white"/>
                </div>
                <div>
                    <h2 className="font-semibold lg:text-lg text-lg text-black">Raises and Complain</h2>
                    <p className="text-black">Share your Experiences</p>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-white shadow-lg rounded-md px-3 py-3">
                <div className=" h-14 w-14 rounded-full bg-info flex items-center justify-center">
                    <MdSupportAgent className="text-4xl text-white"/>
                </div>
                <div>
                    <h2 className="font-semibold lg:text-lg text-lg text-black">Online Support</h2>
                    <p className="text-black">Get Online Support 24/7</p>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-white shadow-lg rounded-md px-3 py-3">
                <div className=" h-14 w-14 rounded-full bg-info flex items-center justify-center">
                    <IoSettingsSharp className="text-4xl text-white"/>
                </div>
                <div>
                    <h2 className="font-semibold lg:text-lg text-lg text-black">Servicing Center</h2>
                    <p className="text-black">Repair Your Equipment</p>
                </div>
            </div>
        </div>
    );
};

export default Service;