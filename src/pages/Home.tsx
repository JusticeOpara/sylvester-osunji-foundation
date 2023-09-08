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



const Home = () => {
    
    
    return (

        <div>
            <div className="flex flex-col justify-center h-[100vh] max-md:h-[60vh] w-full items-center bg-hero-pattern bg-no-repeat bg-cover relative overflow-hidden gap-[20px] opacity-90">

                <div className="w-[50%] max-md:w-[80%] flex-col justify-center">

                    <p className="text-center text-[50px] leading-[56px] font-bold text-white font-inter max-md:text-2xl">
                        Empowering Lives, Enriching Communities
                    </p>
                </div>

                <p className="text-center text-[16px] font-semibold text-white max-md:w-80 max-md:text-xs max font-inter">We provide aid and support to underprivileged and impoverished communities in Africa and beyond.</p>

            </div>

            <div className="w-full h-[80px] flex text-white gap-2 max-md:flex-col max-md:h-[36vh] bg-white">

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


            <div className="w-full he-[100vh] px-28 py-20 max-md:px-4 max-md:py-10  flex flex-col justify-center items-center gap-10">
                <div className="w-full h-full max-md:flex max-md:flex-col max-md:gap-16">

                    <div className="h-full w-full flex flex-row justify-center max-md:flex-col  max-md:gap-5">
                        <img src={ourValue} className="w-[510px] he-[366.1px] h-auto max-md:w-[800px] " alt="" />

                        <div className="w-[510px] h-[366.1px] bg-wrhite justify-evenly flex flex-col items-center max-md:w-full max-md:h-full  ">

                            <h1 className="font-bold text-[40px] font-openSan max-md:hidden">Our Vision</h1>

                            <p className="w-[389.4px] h-[140px] font-openSan text-base font-normal max-md:w-full">

                                To provide food, shelter, education & basic healthcare for women,
                                aged men and children who are dying from hunger and abject poverty caused by global lockdown & other economic meltdown.
                                We support  the vulnerable, individuals and families in the poorest communities in the world especially in Africa.
                            </p>
                        </div>
                    </div>

                    <div className="h-full w-full flex flex-row maxx-md:flex-col justify-center max-md:flex-col-reverse max-md:gap-5">

                        <div className="w-[510px] h-[366.1px] bg-whfite justify-evenly flex flex-col items-center max-md:w-full max-md:h-full">

                            <h1 className="font-bold text-[40px] font-openSan max-md:hidden">Our Mission</h1>

                            <p className="w-[389.4px] h-[140px] text-base font-openSan font-normal  max-md:w-full">
                                To see a world free from hunger, sickness and pain caused by unavailability of care and
                                love for humanity above all we want to help put an end to youth restiveness
                                and abuse of the girlchild in Africa & the globe at large which  in most cases is caused by poverty & unemployment.
                            </p>
                        </div>

                        <img src={ourMission} className="w-[510px] hr-[366.1px] h-auto " alt="Our Vision" />
                    </div>

                </div>

                <button className="bg-transparent font-semibold text-[#0098d8] py-2 px-4 wd-20 border-2 border-[#0098d8] rounded ">
                    Learn More
                    
                </button>
            </div>


            <div className="w-full h-[120vh] max-md:h-[24vh] bg-[#F2EFEF] max-md:bg-[#3B4293] flex flex-col items-center justify-evenly max-md:justify-between">

                <h1 className="font-bold text-3xl max-md:text-xl font-openSan max-md:text-white max-md:pt-4">Founder's Note</h1>

                <div className="flex flex-row max-md:flex-col ">

                    <img src={sylvester} className="w-[410.9px] h-[427.7px] bg-slate-400 rounded max-md:hidden" />

                    <div className="w-[597.5px] h-[427px] max-md:h-full  bg-[#3B4293] flex flex-col justify-center items-center max-md:w-full ">
                        <div className="h-full w-full flex flex-col justify-center items-center ">
                            <p className="text-base w-[389.2px] text-[#fff] flex items-start max-md:px-4">
                                “Lorem ipsum dolor sit amet consectetur. Elit sit consequat sollicitudin eget faucibus facilisis et eu aenean.
                                Consequat tellus bibendum imperdiet feugiat nunc. Massa adipiscing odio”
                            </p>
                        </div>


                        <div className="flex flex-col justify-center items-center h-[76.3px] max-md:h-full w-full bg-[#000000] text-white">
                            <p className="text-center font-semibold font-openSan text-base">Slyvester Osunji</p>
      
                            <p className="text-sm font-normal">Founder SOF</p>

                        </div>
                    </div>
                </div>


            </div>

         
            <Carsousel/>

            <div className="w-full h-[434px] max-md:h-full bg-whrite px-28 max-md:px-4 max-md:py-4 flex flex-col justify-evenly bg-blue-200 ">
                <p className="font-bold text-2xl font-openSan max-md:text-lg">Upcoming SOF Events</p>

                <div className="flex gap-4 text-black max-md:flex-col max-md:w-full">
                    <div className="w-[546px] h-[140px] shadow-xl flex max-md:w-full bg-slate-500 max-md:h-[100px]">
                        <div className="w-[140px] h-[140px] max-md:h-[100px] font-inter bg-[#3B4293] flex flex-col justify-center items-center text-white">

                            <p className="font-bold text-lg">JULY</p>
                            <p className="font-bold text-[44.8px] ">03</p>
                        </div>

                        <div className="w-full h-full flex flex-col justify-center px-5">
                            <p className="text-sm">12:00 AM - 1:00 AM</p>
                            <p className="font-bold text-lg">Crypto training</p>
                            <p className="text-sm max-md:text-xs ">Lorem ipsum dolor sit amet consectetur. Quis id vitae nibh tristique. Ultrices turpis a dictum at...</p>
                        </div>
                    </div>


                    <div className="w-[546px] h-[140px] shadow-xl flex max-md:w-full bg-red-400 max-md:h-[100px]">
                        <div className="w-[140px] h-[140px] font-inter bg-[#3B4293] flex flex-col justify-center items-center max-md:h-[100px] text-white">

                            <p className="font-bold text-lg">JULY</p>
                            <p className="font-bold text-[44.8px] ">03</p>
                        </div>

                        <div className="w-full h-full flex flex-col justify-center px-5 max-md:h-[100px]">
                            <p className="text-sm">12:00 AM - 1:00 AM</p>
                            <p className="font-bold text-lg">Youth empowerment</p>
                            <p className="text-sm max-md:text-xs">Lorem ipsum dolor sit amet consectetur. Quis id vitae nibh tristique. Ultrices turpis a dictum at...</p>
                        </div>
                    </div>

                </div>


            </div>



        </div>
    )
}

export default Home