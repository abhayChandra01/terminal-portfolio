import React from 'react'
import { AiFillApple } from 'react-icons/ai'
import { BsBatteryHalf, BsBellFill } from 'react-icons/bs'
import { FaWifi } from 'react-icons/fa'

export default function Header() {
    return (
        <div className='bg-white absolute top-0 w-full py-1 bg-opacity-50 backdrop-blur-lg'>
            <div className='flex justify-between w-full px-2'>
                <div className='flex items-center text-sm font-medium space-x-4'>
                    <div><AiFillApple size={20} /></div>
                    <p className='cursor-pointer hidden md:block' >Terminal</p>
                    <p className='cursor-pointer hidden md:block' >File</p>
                    <p className='cursor-pointer hidden md:block' >Edit</p>
                    <p className='cursor-pointer hidden md:block' >View</p>
                    <p className='cursor-pointer hidden md:block' >Chat</p>
                    <p className='cursor-pointer hidden md:block' >Window</p>
                    <p className='cursor-pointer hidden md:block' >Help</p>
                </div>
                <div className='flex items-center text-sm font-medium space-x-4'>
                    <div><BsBatteryHalf size={20} /></div>
                    <div><FaWifi size={18} /></div>
                    <div><BsBellFill size={16} /></div>
                    <p>{new Date().toDateString()}</p>
                </div>
            </div>
        </div>
    )
}
