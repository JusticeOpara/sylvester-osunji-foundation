import projectImage from "../assets/images/our-value.png"
import relief01 from "../assets/images/community01.png"
import relief02 from "../assets/images/community02.png"
import { motion } from "framer-motion"


const Project = () => {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full mt-[80px]">

      <div className="w-full h-[80vh] flex flex-row justify-between items-center px-28 2xl:px-20">

        <h1 className="font-bold font-openSan bg-white text-6xl w-[459.1px] leading-[65px]">
          Sylvester Osuji Foundation Projects
        </h1>

        <img src={projectImage} className="w-[50%] h-auto rounded" alt="the foundations work" />
      </div>

      <div className="w-[96%] bg-[#3B4293] h-[42px] flex justify-between items-center pl-28 pr-6 rounded-tr-none rounded-br-[50px] rounded-bl-none rounded-tl-none ">
        <p className="text-lg font-openSan font-semibold text-white">Ongoing Projects</p>


        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M5.08607 9.942C5.0865 9.84277 5.10743 9.74461 5.14767 9.6532C5.1879 9.56179 5.24662 9.47896 5.32044 9.4095C5.46682 9.26981 5.66483 9.19141 5.87122 9.19141C6.07762 9.19141 6.27563 9.26981 6.42201 9.4095L10.8439 13.6545C11.2833 14.0759 11.879 14.3125 12.5001 14.3125C13.1212 14.3125 13.7169 14.0759 14.1564 13.6545L18.5783 9.4095C18.7277 9.28663 18.92 9.22243 19.1166 9.22972C19.3132 9.23701 19.4997 9.31526 19.6389 9.44883C19.778 9.5824 19.8595 9.76145 19.8671 9.95021C19.8747 10.139 19.8078 10.3235 19.6798 10.467L15.2658 14.7495C14.9029 15.0987 14.4718 15.3758 13.9973 15.5648C13.5227 15.7539 13.0139 15.8512 12.5001 15.8512C11.9863 15.8512 11.4776 15.7539 11.003 15.5648C10.5284 15.3758 10.0974 15.0987 9.73451 14.7495L5.32044 10.5045C5.24278 10.4315 5.18182 10.3438 5.14146 10.247C5.1011 10.1501 5.08224 10.0463 5.08607 9.942Z" fill="#111111" />
          <path d="M5.08607 9.942C5.0865 9.84277 5.10743 9.74461 5.14767 9.6532C5.1879 9.56179 5.24662 9.47896 5.32044 9.4095C5.46682 9.26981 5.66483 9.19141 5.87122 9.19141C6.07762 9.19141 6.27563 9.26981 6.42201 9.4095L10.8439 13.6545C11.2833 14.0759 11.879 14.3125 12.5001 14.3125C13.1212 14.3125 13.7169 14.0759 14.1564 13.6545L18.5783 9.4095C18.7277 9.28663 18.92 9.22243 19.1166 9.22972C19.3132 9.23701 19.4997 9.31526 19.6389 9.44883C19.778 9.5824 19.8595 9.76145 19.8671 9.95021C19.8747 10.139 19.8078 10.3235 19.6798 10.467L15.2658 14.7495C14.9029 15.0987 14.4718 15.3758 13.9973 15.5648C13.5227 15.7539 13.0139 15.8512 12.5001 15.8512C11.9863 15.8512 11.4776 15.7539 11.003 15.5648C10.5284 15.3758 10.0974 15.0987 9.73451 14.7495L5.32044 10.5045C5.24278 10.4315 5.18182 10.3438 5.14146 10.247C5.1011 10.1501 5.08224 10.0463 5.08607 9.942Z" fill="#111111" />
        </svg>
      </div>


      <div className="w-full h-[120vh] px-28 flex flex-col justify-evenly">
        <div>
          <div className="flex justify-between">
            <span className="font-semibold leading-8 text-base font-openSan text-[#111]">Love date with the less priviledged</span>
            <span className="font-normal leading-8 text-sm font-openSan text-[#777]">February 14, 2020</span>
          </div>
          <div className=" w-full flex justify-between items-center">
            <img src={relief02} className="w-[391.9727px] h-[258.3px] rounded" alt="Love date with the less priviledged" />

            <div className="w-full bg-[#F5F5F5] h-[258.3px] flex items-center justify-center">
              <p className="text-base text-normal font-inter w-[500px]">To provide food, shelter, education & basic healthcare for women,
                aged men and children who are dying from hunger and abject poverty caused by global lockdown & other economic meltdown.
                We support  the vulnerable, individuals and families in the poorest communities in the world especially in Africa.</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <span className="font-semibold leading-8 text-base font-openSan text-[#111]">Love date with the less priviledged</span>
            <span className="font-normal leading-8 text-sm font-openSan text-[#777]">February 14, 2020</span>
          </div>
          <div className=" w-full flex justify-between items-center">
            <img src={relief01} className="w-[391.9727px] h-[258.3px] rounded" alt="Love date with the less priviledged" />

            <div className="w-full bg-[#F5F5F5] h-[258.3px] flex items-center justify-center">
              <p className="text-base text-normal font-inter w-[500px]">To provide food, shelter, education & basic healthcare for women,
                aged men and children who are dying from hunger and abject poverty caused by global lockdown & other economic meltdown.
                We support  the vulnerable, individuals and families in the poorest communities in the world especially in Africa.</p>
            </div>
          </div>
        </div>

      </div>



      <div className="w-[50%] bg-[#D9D9D9] h-[42px] flex justify-between items-center mb-12 pr-6 rounded-tr-none rounded-br-[50px] rounded-bl-none rounded-tl-none ">
        <p className="text-lg font-openSan font-semibold pl-28 ">Upcoming Projects</p>

        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M5.08607 9.942C5.0865 9.84277 5.10743 9.74461 5.14767 9.6532C5.1879 9.56179 5.24662 9.47896 5.32044 9.4095C5.46682 9.26981 5.66483 9.19141 5.87122 9.19141C6.07762 9.19141 6.27563 9.26981 6.42201 9.4095L10.8439 13.6545C11.2833 14.0759 11.879 14.3125 12.5001 14.3125C13.1212 14.3125 13.7169 14.0759 14.1564 13.6545L18.5783 9.4095C18.7277 9.28663 18.92 9.22243 19.1166 9.22972C19.3132 9.23701 19.4997 9.31526 19.6389 9.44883C19.778 9.5824 19.8595 9.76145 19.8671 9.95021C19.8747 10.139 19.8078 10.3235 19.6798 10.467L15.2658 14.7495C14.9029 15.0987 14.4718 15.3758 13.9973 15.5648C13.5227 15.7539 13.0139 15.8512 12.5001 15.8512C11.9863 15.8512 11.4776 15.7539 11.003 15.5648C10.5284 15.3758 10.0974 15.0987 9.73451 14.7495L5.32044 10.5045C5.24278 10.4315 5.18182 10.3438 5.14146 10.247C5.1011 10.1501 5.08224 10.0463 5.08607 9.942Z" fill="#111111" />
          <path d="M5.08607 9.942C5.0865 9.84277 5.10743 9.74461 5.14767 9.6532C5.1879 9.56179 5.24662 9.47896 5.32044 9.4095C5.46682 9.26981 5.66483 9.19141 5.87122 9.19141C6.07762 9.19141 6.27563 9.26981 6.42201 9.4095L10.8439 13.6545C11.2833 14.0759 11.879 14.3125 12.5001 14.3125C13.1212 14.3125 13.7169 14.0759 14.1564 13.6545L18.5783 9.4095C18.7277 9.28663 18.92 9.22243 19.1166 9.22972C19.3132 9.23701 19.4997 9.31526 19.6389 9.44883C19.778 9.5824 19.8595 9.76145 19.8671 9.95021C19.8747 10.139 19.8078 10.3235 19.6798 10.467L15.2658 14.7495C14.9029 15.0987 14.4718 15.3758 13.9973 15.5648C13.5227 15.7539 13.0139 15.8512 12.5001 15.8512C11.9863 15.8512 11.4776 15.7539 11.003 15.5648C10.5284 15.3758 10.0974 15.0987 9.73451 14.7495L5.32044 10.5045C5.24278 10.4315 5.18182 10.3438 5.14146 10.247C5.1011 10.1501 5.08224 10.0463 5.08607 9.942Z" fill="#111111" />
        </svg>
      </div>

      <div className="w-[50%] bg-[#D9D9D9] h-[42px] flex justify-between items-center mb-12 pr-6 rounded-tr-none rounded-br-[50px] rounded-bl-none rounded-tl-none">
        <p className="text-lg font-openSan font-semibold pl-28">Past Projects</p>

        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M5.08607 9.942C5.0865 9.84277 5.10743 9.74461 5.14767 9.6532C5.1879 9.56179 5.24662 9.47896 5.32044 9.4095C5.46682 9.26981 5.66483 9.19141 5.87122 9.19141C6.07762 9.19141 6.27563 9.26981 6.42201 9.4095L10.8439 13.6545C11.2833 14.0759 11.879 14.3125 12.5001 14.3125C13.1212 14.3125 13.7169 14.0759 14.1564 13.6545L18.5783 9.4095C18.7277 9.28663 18.92 9.22243 19.1166 9.22972C19.3132 9.23701 19.4997 9.31526 19.6389 9.44883C19.778 9.5824 19.8595 9.76145 19.8671 9.95021C19.8747 10.139 19.8078 10.3235 19.6798 10.467L15.2658 14.7495C14.9029 15.0987 14.4718 15.3758 13.9973 15.5648C13.5227 15.7539 13.0139 15.8512 12.5001 15.8512C11.9863 15.8512 11.4776 15.7539 11.003 15.5648C10.5284 15.3758 10.0974 15.0987 9.73451 14.7495L5.32044 10.5045C5.24278 10.4315 5.18182 10.3438 5.14146 10.247C5.1011 10.1501 5.08224 10.0463 5.08607 9.942Z" fill="#111111" />
          <path d="M5.08607 9.942C5.0865 9.84277 5.10743 9.74461 5.14767 9.6532C5.1879 9.56179 5.24662 9.47896 5.32044 9.4095C5.46682 9.26981 5.66483 9.19141 5.87122 9.19141C6.07762 9.19141 6.27563 9.26981 6.42201 9.4095L10.8439 13.6545C11.2833 14.0759 11.879 14.3125 12.5001 14.3125C13.1212 14.3125 13.7169 14.0759 14.1564 13.6545L18.5783 9.4095C18.7277 9.28663 18.92 9.22243 19.1166 9.22972C19.3132 9.23701 19.4997 9.31526 19.6389 9.44883C19.778 9.5824 19.8595 9.76145 19.8671 9.95021C19.8747 10.139 19.8078 10.3235 19.6798 10.467L15.2658 14.7495C14.9029 15.0987 14.4718 15.3758 13.9973 15.5648C13.5227 15.7539 13.0139 15.8512 12.5001 15.8512C11.9863 15.8512 11.4776 15.7539 11.003 15.5648C10.5284 15.3758 10.0974 15.0987 9.73451 14.7495L5.32044 10.5045C5.24278 10.4315 5.18182 10.3438 5.14146 10.247C5.1011 10.1501 5.08224 10.0463 5.08607 9.942Z" fill="#111111" />
        </svg>

      </div>





    </motion.div>
  )
}

export default Project