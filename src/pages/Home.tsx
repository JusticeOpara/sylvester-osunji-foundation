import heartIcon from "../assets/images/hand-holding-heart.png"
import contactIcon from "../assets/images/Contact.png"
import volunteering from "../assets/images/Volunteering.png"
// import ourMission  from "../assets/images/our-mission.png"
import ourValue from "../assets/images/our-value.png"



const Home = () => {
    return (
        <div>
            <div className="flex flex-col justify-center h-[100vh] w-full items-center bg-hero-pattern bg-no-repeat bg-cover relative overflow-hidden gap-[20px]">

                <div className="w-[50%] bg-gray-500 flex-col justify-center">

                    <p className="text-center text-[50px] leading-[56px] font-bold text-white ">
                        Empowering Lives, Enriching Communities
                    </p>
                </div>

                <p className="text-center text-sm font-bold text-white">We provide aid and support to underprivileged and impoverished communities in Africa and beyond.</p>

            </div>

            <div className="w-full h-[80px] bg-gray-200 flex text-white gap-2">

                <div className="bg-[#3B4293] h-full w-[634px] flex items-center justify-center gap-5">
                    <img src={volunteering} className="w-[48px] h-auto "  />
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

            <div className="w-full h-[100vh] bg-white px-[100px] py-20">
                <div className="h-[100%] w-full bg-red-100 flex ">


                    <img src={ourValue} className="w-[552.3px] h-[366.1px]" alt="Our Vision"/>

                    <div className="w-full bg-blue-100 justify-center flex flex-col items-center">
                        <h1 className="font-bold text-[40px]">Our Vision</h1>
                        <p className="w-[389.4px] h-[120px] bg-slate-400">
                        To provide food, shelter, education & basic healthcare for women, 
                        aged men and children who are dying from hunger and abject poverty caused by global lockdown & other economic meltdown. 
                        We support  the vulnerable, individuals and families in the poorest communities in the world especially in Africa.
                        </p>
                    </div>
                </div>

                <div  className="h-[100%] bg-slate-500"></div>

            </div>
        </div>
    )
}

export default Home