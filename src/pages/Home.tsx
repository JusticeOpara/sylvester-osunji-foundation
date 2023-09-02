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
            <div className="flex flex-col justify-center h-[100vh] w-full items-center bg-hero-pattern bg-no-repeat bg-cover relative overflow-hidden gap-[20px]">

                <div className="w-[50%] bg-gray-500 flex-col justify-center">

                    <p className="text-center text-[50px] leading-[56px] font-bold text-white font-openSan">
                        Empowering Lives, Enriching Communities
                    </p>
                </div>

                <p className="text-center text-sm font-bold text-white">We provide aid and support to underprivileged and impoverished communities in Africa and beyond.</p>

            </div>

            <div className="w-full h-[80px] bg-gray-200 flex text-white gap-2">

                <div className="bg-[#3B4293] h-full w-[634px] flex items-center justify-center gap-5">
                    <img src={volunteering} className="w-[48px] h-auto " />
                    <span className="text-lg font-medium text-center">Volunteer at SOF</span>
                </div>

                <div className="bg-[#0098DB] h-full w-[634px] flex items-center justify-center gap-5">
                    <img src={heartIcon} className="w-[48px] h-auto " />
                    <span className="text-lg font-medium text-center">Donate to Cause</span>

                </div>

                <div className="bg-[#3B4293] h-full w-[634px] flex items-center justify-center gap-5">
                    <img src={contactIcon} className="w-[48px] h-auto " />
                    <span className="text-lg font-medium text-center">Contact Us</span>

                </div>

            </div>


            <div className="w-full he-[100vh] bg-zinc-500 px-[90px] py-20 flex flex-col justify-center items-center gap-10">
                <div className="w-full h-full bg-red-500">
                    <div className="h-full w-full bg-red-100 flex flex-row">
                        <img src={ourValue} className="w-[552.3px] h-[366.1px] " alt="Our Vision" />

                        <div className="w-[552.3px] h-[366.1px]  bg-blue-100 justify-evenly flex flex-col items-center ">

                            <h1 className="font-bold text-[40px]">Our Vision</h1>

                            <p className="w-[389.4px] h-[140px] bg-slate-400 text-base font-normal">

                                To provide food, shelter, education & basic healthcare for women,
                                aged men and children who are dying from hunger and abject poverty caused by global lockdown & other economic meltdown.
                                We support  the vulnerable, individuals and families in the poorest communities in the world especially in Africa.
                            </p>
                        </div>
                    </div>

                    <div className="h-full w-full bg-red-300 flex flex-row ">

                        <div className="w-[552.3px] h-[366.1px]  bg-blue-100 justify-evenly flex flex-col items-center ">

                            <h1 className="font-bold text-[40px]">Our Mission</h1>

                            <p className="w-[389.4px] h-[140px] bg-slate-400 text-base font-normal">
                                To see a world free from hunger, sickness and pain caused by unavailability of care and
                                love for humanity above all we want to help put an end to youth restiveness
                                and abuse of the girlchild in Africa & the globe at large which  in most cases is caused by poverty & unemployment.
                            </p>
                        </div>

                        <img src={ourMission} className="w-[552.3px] h-[366.1px] " alt="Our Vision" />
                    </div>

                </div>

                <button className="bg-transparent   hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 wd-20 border-2 border-blue-500 hover:border-transparent rounded">
                    Learn More
                </button>
            </div>


            <div className="w-full h-[120vh] bg-blue-100 flex flex-col items-center justify-evenly">

                <h1 className="font-bold texfrt-[20px] text-3xl font-openSan">Founder's Note</h1>

                <div className="flex flex-row h-">

                    <img src={sylvester} className="w-[410.9px] h-[427.7px] bg-slate-400 rounded" />

                    <div className="w-[597.5px] h-[427px] bg-[#3B4293] flex flex-col justify-center items-center ">
                        <div className="h-full w-full flex flex-col justify-center items-center">
                            <p className="text-base w-[389.2px]">
                                “Lorem ipsum dolor sit amet consectetur. Elit sit consequat sollicitudin eget faucibus facilisis et eu aenean.
                                Consequat tellus bibendum imperdiet feugiat nunc. Massa adipiscing odio”
                            </p>
                        </div>


                        <div className="flex flex-col justify-center items-center h-[76.3px] gap- w-full bg-[#000000] text-white">
                            <p className="text-center font-medium">Slyvester Osunji</p>
                            <p className="text-sm font-normal">Founder SOF</p>

                        </div>
                    </div>
                </div>


            </div>

         
            <Carsousel/>

            <div className="w-full h-[434px] bg-slate-400 px-28 flex flex-col justify-evenly  ">
                <p className="font-bold text-xl font-openSan">Upcoming SOF Events</p>

                <div className="flex gap-4">
                    <div className="w-[546px] h-[140px] bg-blue-200 text-white shadow-xl flex ">
                        <div className="w-[140px] h-[140px] font-inter bg-[#3B4293] flex flex-col justify-center items-center">

                            <p className="font-bold text-lg">JULY</p>
                            <p className="font-bold text-[44.8px] ">03</p>
                        </div>

                        <div className="w-full h-full flex flex-col justify-center px-5  ">
                            <p className="text-sm">12:00 AM - 1:00 AM</p>
                            <p className="font-bold text-lg">Crypto training</p>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Quis id vitae nibh tristique. Ultrices turpis a dictum at...</p>
                        </div>
                    </div>


                    <div className="w-[546px] h-[140px] bg-blue-200 text-white shadow-xl flex ">
                        <div className="w-[140px] h-[140px] font-inter bg-[#3B4293] flex flex-col justify-center items-center">

                            <p className="font-bold text-lg">JULY</p>
                            <p className="font-bold text-[44.8px] ">03</p>
                        </div>

                        <div className="w-full h-full flex flex-col justify-center px-5  ">
                            <p className="text-sm">12:00 AM - 1:00 AM</p>
                            <p className="font-bold text-lg">Youth empowerment</p>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Quis id vitae nibh tristique. Ultrices turpis a dictum at...</p>
                        </div>
                    </div>

                </div>


            </div>



        </div>
    )
}

export default Home