import React from 'react'
import NavLogo from "../assets/images/nav-logo.png"
import donate from "../assets/images/donate.png"
import { Link } from 'react-router-dom';
import Modal from './Model';
import { useEffect, useRef, useState } from 'react';


const Navbar: React.FC = () => {

    const headerRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false)
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

    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className='w-full bg-white h-[80px] flex items-center font-inter fixed top-0 left-0 z-[111111] shadow' ref={headerRef}>


            <div className='flex w-full justify-between px-28  max-md:px-10'>
                <div className='flex items-center gap-2 '>
                    <img src={NavLogo} className='w-[40px] h-auto rounded-2xl' />
                    <Link to="/">
                        <p className='text-[18px] leading-normal font-bold text-[#111] font-inter max-md:text-[10px] '>Sylvester Osunji Foundation(SDF)</p>
                    </Link>

                </div>


                <div className='flex gap-5'>
                    <ul className='flex list-none items-center gap-3 max-md:hidden'>

                        <li className='text-[14px] font-normal '>
                            <Link to="/" className='hover:text-[#0098DB] focus:text-[#0098DB]'>
                                Home
                            </Link>
                        </li>


                        <li className='text-[14px] font-normal'>
                            <Link to="/about" className='hover:text-[#0098DB] focus:text-[#0098DB]'>
                                AboutUs
                            </Link>

                        </li>


                        <li className='text-[14px] font-normal '>
                            <Link to="/project" className='hover:text-[#0098DB] focus:text-[#0098DB]'>
                                Projects
                            </Link>
                        </li>
                    </ul>

                    <button onClick={handleToggleModal}
                        className='rounded-lg py-[8px] px-[20px] bg-inherit text-[#0098db] flex justify-center items-center hover:text-white hover:bg-[#0098db] border-[#0098DB] border '>Donate
                        <img src={donate} className="" alt="donate" />

                    </button>

                    <Modal isOpen={isModalOpen} onClose={handleToggleModal}>
                        <form className="space-y-6 px-20" action="#">
                            <div>

                            </div>

                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name <span className='text-sm font-normal'>(optional)</span></label>
                                <input type="text" id="first_name" className="border border-[#b1b1b1] text-gray-900 text-xs outline-none rounded-lg block w-full p-3" placeholder="Enter first name & last name" required />
                            </div>


                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address *</label>
                                <input type="email" name="email" id="email" className="border border-[#b1b1b1] outline-none text-gray-900 text-xs rounded-lg block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter email address" required />
                            </div>

                            <div>
                                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount *</label>
                                <div className='flex gap-3'>
                                    <select className='flex w-[85.2px] rounded-lg border-[#b1b1b1] outline-none border px-[10px] text-base'>

                                        <option className='text-sm' value="1">NGN</option>
                                        <option className='text-sm' value="2">Two</option>
                                        <option className='text-sm' value="3">Three</option>

                                    </select>
                                    <input type="number" name="" id="number"
                                        className="border border-[#b1b1b1] outline-none text-gray-900 text-xs rounded-lg block w-full p-3 "
                                        placeholder="Amount" required />
                                </div>

                            </div>


                            <div className='flex gap-3'>
                                <button onClick={handleToggleModal} className="bg-transparent underline text-[#111] font-medium  px-4 border rounded">
                                    Cancel
                                </button>

                                <button type="submit" className="w-full text-white bg-[#111] focus:ring-4 focus:outline-none focus:ring-[#b1b1b1] font-medium rounded-lg text-sm px-5 py-2.5 text-center">SAVE & CONTINUE</button>
                            </div>


                        </form>
                    </Modal>

                </div>
            </div>

        </div>
    )
}

export default Navbar