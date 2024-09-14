import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from 'react-icons/fa';
const FooterOne = () => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-2">
    <div>
      <Link href="/">
        <Image
          priority={true}
          className="w-[100px] h-auto"
          width={100}
          height={24.38}
          src="/images/logo/logo.svg"
          alt="Navbar_logo"
        />
      </Link>
    </div>
    <div className="hidden text-[14px] md:flex items-center gap-[16px]">
      <Link href="/services">Services</Link>
      <Link href="/blogs">Repair Guide</Link>
      <Link href="/about-us">About Us</Link>
      <Link href="/contact-us?action=message">Contact</Link>
    </div>
    <div className="flex gap-3 text-[18px]">
    <Link target='__blank' href='https://www.facebook.com/profile.php?id=61562968985348&mibextid=LQQJ4d'><SlSocialFacebook /></Link>  
    <Link target='__blank' href='https://www.google.com/maps/place/ComputerFixDallas+-+Apple+Mac+Gaming+PC+Laptop+iPhone+iPad+Repair+and+Data+Recovery/@32.8458052,-96.7702252,17z/data=!4m6!3m5!1s0x864e9f383375a19d:0x75fd3b21b72e938e!8m2!3d32.8458052!4d-96.7702252!16s%2Fg%2F11ln_kw9dg?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D'>  <FaXTwitter /></Link> 
    <Link target='__blank' href='https://www.instagram.com/computerfixdallas'>  <FaInstagram /></Link>
    </div>
  </div>
  )
}

export default FooterOne