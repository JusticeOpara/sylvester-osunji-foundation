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
            <div className="w-[767.2px] h-[345.8px] 2xl:w-[920px] 2xl:h-[500px] max-md:w-full  max-md:h-[150px] bg-[#018ecc] border-[#018ECC] border-[3px] flex gap-6 items-center hover:shadow-2xl shadow rounded-lg p-8 max-md:p-4">
              
                {image}

                <div className="gap-3 flex flex-col max-md:gap-1">
                    <p className="w-[390px] h-[120px] 2xl:h-[150px] max-md:w-full max-md:h-[50px] text-base 2xl:text-lg max-md:text-[7px] max-md:leading-3 font-medium text-start">
                        {text}
                    </p>

                    <div className="flex flex-col items-end justify-end">
                        <p className="text-xl font-semibold max-md:text-xs 2xl:text-2xl">Sylvester Osunji</p>
                        <p className="text-base font-normal max-md:text-xs 2xl:text-lg">Founder SOF</p>
                    </div>
                </div>
            </div>
        )
    }





    return (
        <>
            <div className="w-full h-[90vh] 2xl:h-[90vh] xl:h-[80vh] flex flex-col justify-evenly items-center bg-white max-md:h-[40vh] max-md:px-4">

                <h1 className="font-bold text-[40px] text-center max-md:text-xl 2xl:pt-5">Stories</h1>

                <div className="flex flex-row items-center w-full h-[65%] gap-2 2xl:gap-0">
                    <Swiper
                        modules={[Autoplay, Pagination, A11y]}
                        spaceBetween={isMobile ? 16 : 20}
                        slidesPerView={isMobile ? 1 : 1.6}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        className="swiper_container">

                        <SwiperSlide>

                            <CarouselCard
                                text="“I got to see a different side of humanity since I started volunteering at Sylvester Osuji Foundation.
                              I am glad and grateful for this eye opening opportunity and the chance to give my own little impact to humanity cause”"
                                image={<img src={sylvester} className="w-[265px] 2xl:h-full max-md:w-[100px] 2xl:w-[400px] max-md:h-[100%] h-[276.5px] rounded" alt="Sylvester Image" />}
                            />

                        </SwiperSlide>

                        <SwiperSlide>
                            <CarouselCard
                                text="“I got to see a different side of humanity since I started volunteering at Sylvester Osuji Foundation.
                            I am glad and grateful for this eye opening opportunity and the chance to give my own little impact to humanity cause”"
                                image={<img src={sylvester} className="w-[265px] 2xl:h-full max-md:w-[100px] 2xl:w-[400px] max-md:h-[100%] h-[276.5px] rounded" alt="Sylvester Image" />}
                            />

                        </SwiperSlide>

                        <SwiperSlide>
                            <CarouselCard
                                text="“I got to see a different side of humanity since I started volunteering at Sylvester Osuji Foundation.
                                    I am glad and grateful for this eye opening opportunity and the chance to give my own little impact to humanity cause”"
                                image={<img src={sylvester} className="w-[265px] 2xl:h-full h-[276.5px] 2xl:w-[400px] max-md:w-[100px] max-md:h-[100%] rounded" alt="Sylvester Image" />}
                            />

                        </SwiperSlide>

                        <SwiperSlide>
                            <CarouselCard
                                text="“I got to see a different side of humanity since I started volunteering at Sylvester Osuji Foundation.
                              I am glad and grateful for this eye opening opportunity and the chance to give my own little impact to humanity cause”"
                                image={<img src={sylvester} className="w-[265px] 2xl:h-full h-[276.5px] 2xl:w-[400px]  max-md:w-[100px] max-md:h-[100%] rounded" alt="Sylvester Image" />}
                            />

                        </SwiperSlide>


                    </Swiper>

                </div>





            </div>


        </>
    )
}

export default Carsousel