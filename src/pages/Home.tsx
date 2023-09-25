import heartIcon from "../assets/images/hand-holding-heart.png"
import contactIcon from "../assets/images/Contact.png"
import volunteering from "../assets/images/Volunteering.png"
import ourMission from "../assets/images/our-mission.png"
import ourValue from "../assets/images/our-value.png"
import sylvester from "../assets/images/sylvester.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Carsousel from "../components/Carsousel"
import { motion } from "framer-motion"


const Home = () => {


    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >

            <div className="relative h-[90vh] max-md:h-[50vh] w-full bg-[#000000]">

                <div className="absolute inset-0  bg-hero-pattern bg-no-repeat bg-cover opacity-50 z-10"></div>


                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 max-md:gap-5">

                    <div className="w-[50%] 2xl:w-[40%] max-md:w-[80%] flex-col justify-center">

                        <p className="text-center text-[50px] leading-[56px] font-extrabold text-white font-inter max-md:text-2xl">
                            Empowering Lives, Enriching Communities
                        </p>
                    </div>
                    <p className="text-center text-sm 2xl:text-lg font-normal text-white max-md:w-80 max-md:text-xs max font-inter">We provide aid and support to underprivileged and impoverished communities in Africa and beyond.</p>
                </div>


            </div>

            <div className="w-full h-[80px] flex text-white gap-2 max-md:flex-col max-md:h-[40vh] bg-white">

                <div className="bg-[#3B4293] h-full w-[634px] flex items-center justify-center gap-5 max-md:w-full">
                    <img src={volunteering} className="w-[48px] h-auto " />
                    <span className="text-lg font-medium text-center">Volunteer at SOF</span>
                </div>

                <div className="bg-[#0098DB] h-full w-[634px] flex items-center justify-center gap-5 max-md:w-full">
                    <img src={heartIcon} className="w-[48px] h-auto " />
                    <span className="text-lg font-medium text-center">Donate to Cause</span>

                </div>

                <div className="bg-[#3B4293] h-full w-[634px] flex items-center justify-center gap-5 max-md:w-full">
                    <img src={contactIcon} className="w-[48px] h-auto " />
                    <span className="text-lg font-medium text-center">Contact Us</span>

                </div>

            </div>


            <div className="2xl:px-20 w-full he-[100vh] px-28 py-20 max-md:px-4 max-md:py-10  flex flex-col justify-center items-center gap-10">
                <div className="w-full h-full max-md:flex max-md:flex-col max-md:gap-16">

                    <div className="h-full w-full flex flex-row justify-center max-md:flex-col  max-md:gap-5 ">
                        <p className="max-2xl:hidden font-bold max-md:block text-xl leading-3">Our Vision</p>
                        <img src={ourValue} className="w-[510px] he-[366.1px] h-auto max-md:w-[800px] 2xl:w-[709px]  " alt="" />

                        <div className="w-[510px] h-[366.1px] 2xl:w-[709px] bg-wrhite justify-evenly flex flex-col items-center max-md:w-full max-md:h-full  ">

                            <h1 className="font-bold text-[40px] font-openSan max-md:hidden ">Our Vision</h1>

                            <p className="w-[389.4px] h-[140px] font-openSan text-base font-normal max-md:w-full 2xl:text-lg">

                                To provide food, shelter, education & basic healthcare for women,
                                aged men and children who are dying from hunger and abject poverty caused by global lockdown & other economic meltdown.
                                We support  the vulnerable, individuals and families in the poorest communities in the world especially in Africa.
                            </p>
                        </div>
                    </div>

                    <div className="h-full w-full flex flex-row maxx-md:flex-col justify-center max-md:flex-col-reverse max-md:gap-5">
                        
                        <div className="w-[510px] 2xl:w-[709px] h-[366.1px] bg-whfite justify-evenly flex flex-col items-center max-md:w-full max-md:h-full">

                            <h1 className="font-bold text-[40px] font-openSan max-md:hidden">Our Mission</h1>

                            <p className="w-[389.4px] h-[140px] text-base font-openSan font-normal  max-md:w-full 2xl:text-lg">
                                To see a world free from hunger, sickness and pain caused by unavailability of care and
                                love for humanity above all we want to help put an end to youth restiveness
                                and abuse of the girlchild in Africa & the globe at large which  in most cases is caused by poverty & unemployment.
                            </p>
                        </div>

                        <img src={ourMission} className="w-[510px] hr-[366.1px] h-auto 2xl:w-[709px]" alt="Our Vision" />
                        <p className="leading-3 font-bold max-2xl:hidden max-md:block text-xl">Our Mission</p>
                    </div>

                </div>

                <button className="bg-transparent font-semibold text-[#0098d8] py-2 px-4 wd-20 border-2 border-[#0098d8] rounded ">
                    Learn More

                </button>
            </div>


            <div className="w-full h-[120vh] max-md:h-full bg-[#F2EFEF] max-md:bg-[#3B4293] flex flex-col items-center justify-evenly max-md:gap-5 p-0">

                <h1 className="font-bold text-3xl max-md:text-xl font-openSan max-md:text-white max-md:pt-4">Founder's Note</h1>

                <div className="flex flex-row max-md:flex-col max-md:items-center">

                    <img src={sylvester} className="w-[410.9px] h-[427.7px] 2xl:w-[587px] 2xl:h-[500px] bg-slate-400 rounded max-md:hidden" />

                    <div className="w-[597.5px] h-[427px] 2xl:h-[500px] 2xl:w-[703px] max-md:h-full max-md:gap-5 bg-[#3B4293] flex flex-col justify-center items-center max-md:w-full ">

                        <div className="h-full w-full flex flex-col justify-center items-center ">
                            <p className="text-base w-[389.2px] text-[#fff] flex items-start max-md:px-4 2xl:text-xl">
                                “Lorem ipsum dolor sit amet consectetur. Elit sit consequat sollicitudin eget faucibus facilisis et eu aenean.
                                Consequat tellus bibendum imperdiet feugiat nunc. Massa adipiscing odio”
                            </p>
                        </div>


                        <div className="flex flex-col justify-center items-center h-[76.3px] w-full bg-[#000000] text-white max-md:h-[50px]">
                            <p className="text-center font-semibold font-openSan text-base 2xl:text-xl">Slyvester Osunji</p>

                            <p className="text-sm font-normal 2xl:text-base">Founder SOF</p>

                        </div>
                    </div>
                </div>


            </div>


            <Carsousel />

            <div className="w-full h-[300px]  max-md:h-full max-md:gap-4 bg-whrite 2xl:px-20 px-28 max-md:px-4 max-md:py-4 flex flex-col justify-evenly  ">
                <p className="font-bold text-2xl font-openSan max-md:text-lg 2xl:text-4xl">Upcoming SOF Events</p>

                <div className="flex gap-4 text-black max-md:flex-col max-md:w-full 2xl:gap-10">
                    <div className="w-[546px] h-[140px] hover:shadow-xl shadow flex max-md:w-full max-md:h-[100px]">
                        <div className="w-[140px] h-[140px] max-md:h-[100px] font-inter bg-[#3B4293] flex flex-col justify-center items-center text-white">

                            <p className="font-bold text-lg">JULY</p>
                            <p className="font-bold text-[44.8px] ">03</p>
                        </div>

                        <div className="w-full h-full flex flex-col justify-center px-5">
                            <p className="text-sm">12:00 AM - 1:00 AM</p>
                            <p className="font-bold text-lg max-md:text-base">Crypto training</p>
                            <p className="text-sm max-md:text-xs ">Lorem ipsum dolor sit amet consectetur. Quis id vitae nibh tristique. Ultrices turpis a dictum at...</p>
                        </div>
                    </div>


                    <div className="w-[546px] h-[140px] hover:shadow-xl shadow flex max-md:w-full max-md:h-[100px]">
                        <div className="w-[140px] h-[140px] font-inter bg-[#3B4293] flex flex-col justify-center items-center max-md:h-[100px] text-white">

                            <p className="font-bold text-lg">JULY</p>
                            <p className="font-bold text-[44.8px]">03</p>
                        </div>

                        <div className="w-full h-full flex flex-col justify-center px-5 max-md:h-[100px]">
                            <p className="text-sm">12:00 AM - 1:00 AM</p>
                            <p className="font-bold text-lg max-md:text-base">Youth empowerment</p>
                            <p className="text-sm max-md:text-xs">Lorem ipsum dolor sit amet consectetur. Quis id vitae nibh tristique. Ultrices turpis a dictum at...</p>
                        </div>
                    </div>

                </div>


            </div>



        </motion.div>
    )
}

export default Home