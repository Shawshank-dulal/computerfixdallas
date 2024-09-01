import Link from 'next/link'
import React from 'react'

const FooterTwo = () => {
  return (
    <div className='flex justify-between text-[14px]'>
        <div className='flex gap-3'>
            {/* <p>Terms of Services</p> */}
            <Link href='/terms-conditions'>Terms of Services</Link>
            <Link href='/privacy'>Privacy</Link>
        </div>
        <div>
            <p>@2024 ComputerFixDallas</p>
        </div>
    </div>
  )
}

export default FooterTwo