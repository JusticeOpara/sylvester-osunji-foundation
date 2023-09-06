import React from 'react'
import NavLogo from "../assets/images/nav-logo.png"
import donate from "../assets/images/donate.png"
import { Link } from 'react-router-dom';

import { useEffect, useRef } from 'react';


const Navbar: React.FC = () => {

    const headerRef = useRef<HTMLDivElement>(null);
    console.log(headerRef, "headerref")

    useEffect(() => {
        const handleScroll = () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                if (headerRef.current) {
                    headerRef.current.classList.add('header-shrink');
                }
            } else {
                if (headerRef.current) {
                    headerRef.current.classList.remove('header-shrink');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className='w-full bg-white h-[80px] flex items-center font-inter fixed top-0 left-0 z-[111111] shadow' ref={headerRef}>

            <div className='flex w-full justify-between px-[170px] '>
                <div className='flex items-center gap-2 '>
                    <img src={NavLogo} className='w-[40px] h-[40px] rounded-2xl' />
                    <p className='text-[18px] leading-normal font-bold text-[#111] font-inter '>Sylvester Osunji Foundation(SDF)</p>
                </div>


                <div className='flex gap-5'>
                    <ul className='flex list-none items-center gap-3'>

                        <li className='text-[16px] font-normal '>
                            <Link to="/" className='hover:text-[#0098DB] focus:text-[#0098DB]'>
                                Home
                            </Link>
                        </li>


                        <li className='text-[16px] font-normal'>
                            <Link to="/about" className='hover:text-[#0098DB] focus:text-[#0098DB]'>
                                About us
                            </Link>

                        </li>


                        <li className='text-[16px] font-normal '>
                            <Link to="/project" className='hover:text-[#0098DB] focus:text-[#0098DB]'>
                                Projects
                            </Link>
                        </li>
                    </ul>

                    <button className='rounded-lg py-[10px] px-[20px] bg-inherit flex justify-center items-center border-[#0098DB] border '>Donate
                        <img src={donate} />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar