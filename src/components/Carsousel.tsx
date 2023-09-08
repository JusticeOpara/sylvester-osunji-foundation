import sylvester from "../assets/images/sylvester.png"
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y, Pagination } from "swiper/modules";



interface CarouselProps {
    image: JSX.Element;
    text: string;
}


const Carsousel = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        }
    }, []);

    const CarouselCard: React.FC<CarouselProps> = ({ image, text }) => {

        return (
            <div className="w-[767.2px] h-[345.8px] max-md:w-full  max-md:h-[150px] bg-[#018ecc] opac9ity-80 border-[#018ECC] border-[3px] flex gap-6 items-center shadow-2xl rounded-lg p-8 max-md:p-4">
              
                {image}

                <div className="gap-3 flex flex-col max-md:gap-1">
                    <p className="w-[390px] h-[120px] max-md:w-full max-md:h-[50px] text-base max-md:text-[7px] max-md:leading-3 font-medium text-start">
                        {text}
                    </p>

                    <div className="flex flex-col items-end justify-end">
                        <p className="text-xl font-semibold max-md:text-xs">Sylvester Osunji</p>
                        <p className="text-base font-normal max-md:text-xs">Founder SOF</p>
                    </div>
                </div>
            </div>
        )
    }





    return (
        <>
            <div className="w-full h-[100vh] flex flex-col justify-evenly items-center bg-white max-md:h-[50vh] max-md:px-4">

                <h1 className="font-bold text-4xl text-center max-md:text-xl">Stories</h1>

                <div className="flex flex-row items-center w-full h-[65%] gap-2">
                    <Swiper
                        modules={[Autoplay, Pagination, A11y]}
                        spaceBetween={isMobile ? 16 : 20}
                        slidesPerView={isMobile ? 1 : 1.6}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        className=" swiper_container">

                        <SwiperSlide>

                            <CarouselCard
                                text="“I got to see a different side of humanity since I started volunteering at Sylvester Osuji Foundation.
                              I am glad and grateful for this eye opening opportunity and the chance to give my own little impact to humanity cause”"
                                image={<img src={sylvester} className="w-[265px] max-md:w-[100px] max-md:h-[100%] h-[276.5px] rounded" alt="Sylvester Image" />}
                            />

                        </SwiperSlide>

                        <SwiperSlide>
                            <CarouselCard
                                text="“I got to see a different side of humanity since I started volunteering at Sylvester Osuji Foundation.
                            I am glad and grateful for this eye opening opportunity and the chance to give my own little impact to humanity cause”"
                                image={<img src={sylvester} className="w-[265px] max-md:w-[100px] max-md:h-[100%] h-[276.5px] rounded" alt="Sylvester Image" />}
                            />

                        </SwiperSlide>

                        <SwiperSlide>
                            <CarouselCard
                                text="“I got to see a different side of humanity since I started volunteering at Sylvester Osuji Foundation.
                                    I am glad and grateful for this eye opening opportunity and the chance to give my own little impact to humanity cause”"
                                image={<img src={sylvester} className="w-[265px] h-[276.5px] max-md:w-[100px] max-md:h-[100%] rounded" alt="Sylvester Image" />}
                            />

                        </SwiperSlide>

                        <SwiperSlide>
                            <CarouselCard
                                text="“I got to see a different side of humanity since I started volunteering at Sylvester Osuji Foundation.
                              I am glad and grateful for this eye opening opportunity and the chance to give my own little impact to humanity cause”"
                                image={<img src={sylvester} className="w-[265px] h-[276.5px] max-md:w-[100px] max-md:h-[100%] rounded" alt="Sylvester Image" />}
                            />

                        </SwiperSlide>


                    </Swiper>

                </div>





            </div>


        </>
    )
}

export default Carsousel