import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoDashboard = () => {
  return (
    <div className='w-fit'>
        <Link id="aside-logo" className="flex items-center font-bold text-2xl gap-2" href={"/dashboard"}>
            <Image alt='' src={"/images/manager.png"} width={50} height={50} /> 
            <span>Death Quiz</span>
        </Link>
    </div>
  )
}

export default LogoDashboard