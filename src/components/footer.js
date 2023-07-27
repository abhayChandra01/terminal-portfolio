import React from 'react'
import { AiFillHome, AiOutlineMail } from 'react-icons/ai'
import { BsFillTerminalFill, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { IoMdDocument } from 'react-icons/io'

export default function Footer({ terminalShow, setTerminalShow }) {
    return (
        <div className='bg-gray-400 border border-[#7f7f7f96] px-2 absolute flex space-x-3 bottom-0 w-fit mb-4 h-[60px] rounded-lg py-2 bg-opacity-10 backdrop-blur-lg'>

            <div className="group relative">
                <span className="absolute w-fit font-medium -top-12 -left-0.5 scale-0 transition-all rounded bg-white bg-opacity-70 backdrop-blur-lg p-2 text-xs text-black group-hover:scale-100">
                    Home
                </span>
                <div className='bg-white px-3 py-2.5 rounded-lg cursor-pointer hover:scale-110 hover:text-green-500 transition-all ease-in-out duration-300'>
                    <AiFillHome size={22} />
                </div>
            </div>

            <div className="group relative">
                <span className="absolute w-fit font-medium -top-12 -left-1 scale-0 transition-all rounded bg-white bg-opacity-70 backdrop-blur-lg p-2 text-xs text-black group-hover:scale-100">
                    Github
                </span>
                <div className='bg-white px-3 py-2.5 rounded-lg cursor-pointer hover:scale-110 hover:text-green-500 transition-all ease-in-out duration-300'>
                    <a target='_blank' href='https://github.com/abhayChandra01'>
                        <BsGithub size={22} />
                    </a>
                </div>
            </div>

            <div className="group relative">
                <span className="absolute w-fit font-medium -top-12 -left-1 scale-0 transition-all rounded bg-white bg-opacity-70 backdrop-blur-lg p-2 text-xs text-black group-hover:scale-100">
                    Twitter
                </span>
                <div className='bg-white px-3 py-2.5 rounded-lg cursor-pointer hover:scale-110 hover:text-green-500 transition-all ease-in-out duration-300'>
                    <a target='_blank' href='https://github.com/abhayChandra01'>
                        <BsTwitter size={22} />
                    </a>
                </div>
            </div>

            <div className="group relative">
                <span className="absolute w-fit font-medium -top-12 -left-2 scale-0 transition-all rounded bg-white bg-opacity-70 backdrop-blur-lg p-2 text-xs text-black group-hover:scale-100">
                    Linkedin
                </span>
                <div className='bg-white px-3 py-2.5 rounded-lg cursor-pointer hover:scale-110 hover:text-green-500 transition-all ease-in-out duration-300'>
                    <BsLinkedin size={22} />
                </div>
            </div>

            <div className="group relative">
                <span className="absolute w-fit font-medium -top-12 left-1 scale-0 transition-all rounded bg-white bg-opacity-70 backdrop-blur-lg p-2 text-xs text-black group-hover:scale-100">
                    Mail
                </span>
                <div className='bg-white px-3 py-2.5 rounded-lg cursor-pointer hover:scale-110 hover:text-green-500 transition-all ease-in-out duration-300'>
                    <AiOutlineMail size={22} />
                </div>
            </div>

            <div>
                <div className='h-full w-[2px] bg-[#7f7f7f96]' ></div>
            </div>

            <div className="group relative">
                <span className="absolute w-fit font-medium -top-12 -left-2 scale-0 transition-all rounded bg-white bg-opacity-70 backdrop-blur-lg p-2 text-xs text-black group-hover:scale-100">
                    Resume
                </span>
                <div className='bg-white px-3 py-2.5 rounded-lg cursor-pointer hover:scale-110 hover:text-green-500 transition-all ease-in-out duration-300'>
                    <IoMdDocument size={22} />
                </div>
            </div>
        </div>
    )
}
