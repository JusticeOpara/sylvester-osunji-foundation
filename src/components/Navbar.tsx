import React from 'react'
import NavLogo from "../assets/images/nav-logo.png"


const Navbar: React.FC = () => {
    return (
        <div className='w-full bg-slate-400 h-[80px] flex items-center font-inter'>

            <div className='flex w-full justify-between px-[170px] '>
                <div className='flex items-center '>
                    <img src={NavLogo} className='w-[40px] h-[40px] rounded-2xl' />
                    <p className='text-[18px] leading-normal font-medium text-[#111] '>Sylvester Osunji Foundation(SDF)</p>

                </div>


                <div className='flex gap-5'>
                    <ul className='flex list-none items-center gap-3'>
                        <li className='text-[18px]'>Home</li>
                        <li>About Us</li>
                        <li>Projects</li>
                    </ul>
                    <button className='rounded-lg h-[54px] w-[145.53px] bg-blue-500 flex justify-center items-center'>Donate</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar