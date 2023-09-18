import React from 'react'
import { Link } from 'react-router-dom'
import help from "../assets/images/Help.png"
import footerLogo from "../assets/images/footer-logo.png"
import facebook from "../assets/images/media2.png"
import twitter from "../assets/images/media.png"
import donate from "../assets/images/bro.svg"

const Footer: React.FC = () => {
  return (
    <div className='w-full hd-[50vh] bg-[#222] text-white py-12 max-md:py-4 '>

      <div className='flex flex-row w-full px-28 pb-6 max-md:px-4 max-md:flex-col max-md:gap-4'>
        <div className='flex flex-row w-full h-full max-md:items-center max-md:gap-8'>

          <img src={help} className="w-[228.9px] max-md:w-[170px] max-md:h-[100px] h-[152.6px] mt-5" />

          <div className='flex flex-col h-full justify-between max-md:justify-evenly max-md:w-full max-md:text-center max-md:items-center max-md:gap-2'>
            <h1 className='font-bold text-xl font-inter '>Volunteer</h1>

            <p className='w-[232.4px] font-inter text-sm max-md:w-full '>"The best way to find yourself is to lose yourself in the service of others."- Mahatma Gandhi</p>

            <button className="bg-white text-[#0098DB] font-normal py-1 w-28 rounded ">
              Volunteer →
            </button>
          </div>
        </div>

        <div className='flex flex-row w-full h-full max-md:items-center gap-8 '>
      
            <img src={donate} className="w-[228.9px] h-[152.6px] mt-5 max-md:w-[170px] max-md:h-[100px]" />
           
          <div className='flex flex-col h-full justify-between max-md:justify-evenly max-md:w-full max-md:text-center max-md:items-center max-md:gap-2'>

            <h1 className='font-bold text-xl font-inter'>Donate</h1>

            <p className='w-[252.4px] font-inter text-sm max-md:w-full'>"No act of kindness, no matter how small, is ever wasted." - Aesop</p>


            <button className="bg-white text-[#0098DB] font-normal py-1 w-28 rounded ">
              Donate →
            </button>

          </div>
        </div>

      </div>

      <div className='flex justify-center items-center w-full h-16 footer-gradient'>
        <p className='text-center text-base max-md:text-xs '>Need to contact or support? us kindly Reach us on +234 000 0000 000 </p>
      </div>



      <div className='px-28 max-md:px-4 bg-inherit w-full 2xl:px-20 max-md:flex max-md:justify-between'>
        <div className='w-full flex justify-between py-6 max-md:flex-col max-md:py-0'>
          <div className='flex items-center gap-2'>

            <img src={footerLogo} className='w-[50px] max-md:w-[15px] h-auto' />
            <span className='font-inter text-sm font-semibold max-md:text-[9px] max-md:font-normal '>Sylvester Osuji Foundation (SOF)</span>
          </div>

          <div className='flex flex-col gap-3 max-md:gap-0'>
            <p className='font-inter text-sm font-medium max-md:font-normal max-md:hidden'>Connect</p>
            <div className='flex gap-4 max-md:gap-2'>
              <img src={facebook} className='' alt="facebook"/>
              <img src={twitter} className='' alt="facebook"/>

            </div>


          </div>
        </div>

        <hr />
        <div className='w-full flex justify-between py-8 text opacity-70 max-md:flex-col max-md:justify-center max-md:py-0'>
          <p className='text-sm font-normal font-inter max-md:text-[6px] max-md:leading-3'>Sylvester Osuji Foundation (SOL) © 2023 All rights reserved</p>

          <Link to="https://justiceopara.github.io/my-portfolio/">
            <p className='text-sm font-normal font-inter max-md:text-[6px] max-sm:leading-3'>Developed by JustScript </p>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Footer