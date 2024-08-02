import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
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
      <Link href="/why">Why</Link>
      <Link href="/process">Process</Link>
      <Link href="/contact-us">Contact</Link>
    </div>
    <div className="flex gap-3 text-[18px]">
      <SlSocialFacebook />
      <FaXTwitter />
      <AiOutlineLinkedin />
    </div>
  </div>
  )
}

export default FooterOne