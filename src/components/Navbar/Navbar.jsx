"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import './navbar.css'
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname=usePathname()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  

  return (
    <nav className="absolute w-full z-[100]">
    <div className="main_container2 inside_sidespace mx-auto pt-[20px]">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <div>
            <Link href='/' className="font-semibold text-[22px]">
                <Image priority={true} className="w-[100px] h-auto" width={100} height={24.38} src='/images/logo/logo.svg' alt="Navbar_logo"/>
              {/* ProTech<span className="text-[#c05301]">Fix</span> */}
            </Link>
          </div>
        </div>
      
        <div className="hidden text-[16px] md:flex items-center gap-[24px]">
          <Link href="/services" className={`py-2 px-3   text-white ${pathname == '/services' ? 'border-b-2 border-[#FF7003]' :''}`}>Services</Link>
          <Link href="/blogs" className={`py-2 px-3   text-white ${pathname == '/blogs' ? 'border-b-2 border-[#FF7003]' :''}`}>Repair Guide</Link>
          <Link href="/about-us" className={`py-2 px-3   text-white ${pathname == '/about-us' ? 'border-b-2 border-[#FF7003]' :''}`}>About Us</Link>
          <Link href="/contact-us" className={`py-2 px-3   text-white ${pathname == '/contact-us' ? 'border-b-2 border-[#FF7003]' :''}`}>Contact</Link>

        <div className="">
        <Link href="/book-an-appointment" className="py-2 px-3 text-[14px] rounded-[52px] border border-[#FF70030D] text-white bg-[#D15A001F]">Book An Appointment</Link>

        </div>
        
        </div>

    
       
        <div className="md:hidden flex  gap-3 items-center">
          <button onClick={toggleMenu} className="mobile-menu-button cursor-pointer">
          <FaBarsStaggered className="text-[#fff]"/>
          </button>
        </div>
    
         
      </div>
    </div>
    <div className={`mobile-menu text-[16px] md:hidden py-4 shadow-xl bg-[#000] ${isOpen ? 'flex flex-col gap-2' : 'hidden'}`}>
    <Link href="/services" onClick={toggleMenu} className="py-2 px-3   block text-white">Services</Link>
          <Link href="/blogs" onClick={toggleMenu}  className="py-2 px-3   block text-white">Repair Guide</Link>
          <Link href="/about-us" onClick={toggleMenu} className="py-2 px-3   block text-white">About Us</Link>
          <Link href="/contact-us" onClick={toggleMenu} className="py-2 px-3   block text-white">Contact</Link>
          <Link href="/book-an-appointment" onClick={toggleMenu} className="max-w-fit py-2 px-3 rounded-[2px] book_a_call_btn border border-[#FF700357] text-white">Book An Appointment</Link>
    </div>
     
  </nav>
  )
}

export default Navbar