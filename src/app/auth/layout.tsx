import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='h-full w-full'>
        {children}
    </div>
  )
}

export default Layout