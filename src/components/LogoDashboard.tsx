import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LogoDashboardProps {
  path?: string
} 

const LogoDashboard = ({ path }: LogoDashboardProps) => {
  return (
    <div className='w-fit'>
        <Link id="aside-logo" className="flex items-center font-bold text-2xl gap-2" href={path ? path : "/dashboard" }>
            <Image alt='' src={"/images/manager.png"} width={50} height={50} /> 
            <span>Death Quiz</span>
        </Link>
    </div>
  )
}

export default LogoDashboard