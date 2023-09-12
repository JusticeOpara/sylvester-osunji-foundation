import React from 'react'
import { Link } from 'react-router-dom'
import help from "../assets/images/Help.png"
import footerLogo from "../assets/images/footer-logo.png"
import facebook from "../assets/images/media2.png"
import twitter from "../assets/images/media.png"
import donate from "../assets/images/bro.svg"

const Footer: React.FC = () => {
  return (
    <div className='w-full h-[50vh] max-md:h-[90vh] bg-[#222] text-white py-12 max-nmd:hidden '>

      <div className='flex flex-row w-full h-full px-28 pb-6 max-md:px-4 max-md:flex-col max-md:gap-4'>
        <div className='flex flex-row w-full h-full max-md:items-center'>

          <img src={help} className="w-[228.9px] h-[152.6px] mt-5" />

          <div className='flex flex-col h-full justify-between max-md:justify-evenly'>
            <h1 className='font-bold text-xl font-inter '>Volunteer</h1>

            <p className='w-[232.4px] font-inter text-sm max-md:w-full'>"The best way to find yourself is to lose yourself in the service of others."- Mahatma Gandhi</p>

            <button className="bg-white text-[#0098DB] font-normal py-1 w-28 rounded ">
              Volunteer →
            </button>
          </div>
        </div>

        <div className='flex flex-row  w-full h-full max-md:items-center'>
      
            <img src={donate} className="w-[228.9px] h-[152.6px] mt-5" />
           
          <div className='flex flex-col h-full justify-between max-md:justify-evenly'>

            <h1 className='font-bold text-xl font-inter'>Donate</h1>

            <p className='w-[252.4px] font-inter text-sm max-md:w-full'>"No act of kindness, no matter how small, is ever wasted." - Aesop</p>


            <button className="bg-white text-[#0098DB] font-normal py-1 w-28 rounded ">
              Donate →
            </button>

          </div>
        </div>

      </div>

      <div className='flex justify-center items-center w-full h-16 footer-gradient'>
        <p className='text-center text-base  '>Need to contact or support? us kindly Reach us on +234 000 0000 000 </p>
      </div>



      <div className='px-28 max-md:px-4 bg-inherit h-full w-full 2xl:px-20'>
        <div className='w-full flex justify-between py-6'>
          <div className='flex items-center gap-2'>

            <img src={footerLogo} className='w-[50px]' />
            <span className='font-inter text-sm font-semibold'>Sylvester Osuji Foundation (SOF)</span>
          </div>

          <div className='flex flex-col gap-3'>
            <p className='font-inter text-sm font-medium'>Connect</p>
            <div className='flex gap-4'>
              <img src={facebook} />
              <img src={twitter} />

            </div>


          </div>
        </div>

        <hr />
        <div className='w-full flex justify-between py-8 text opacity-70'>
          <p className='text-sm font-normal font-inter'>Sylvester Osuji Foundation (SOL) © 2023 All rights reserved</p>

          <Link to="https://justiceopara.github.io/my-portfolio/">
            <p className='text-sm font-normal font-inter'>Developed by JustScript</p>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Footer