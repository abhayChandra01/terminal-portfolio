"use client";
import React, { useState, useEffect, useRef } from 'react'
import { FaCircle } from 'react-icons/fa'
import { FiMaximize2 } from 'react-icons/fi'
import { commands } from './commands';
import '../assets/styles/terminal.css'

export default function Terminal() {

    const messages = ['Welcome!', 'Please Wait ... Starting the server.', 'Type sudo -help for the commands!']
    const inputRef = useRef(null)
    const [startMessage, setStartMessage] = useState([])
    const [startInterval, setStartInterval] = useState(0)
    const [startTerminal, setStartTerminal] = useState(false)
    const [terminalStack, setTerminalStack] = useState([{
        answer: 'First',
        valid: true
    }])
    const [userStack, setUserStack] = useState([])
    const [userInput, setUserInput] = useState('')
    const [fullScreen, setFullScreen] = useState(false)

    const handleTerminal = () => {

        if (userInput.length) {

            let check = true;
            commands.map((item) => {
                if (item.command === userInput) {
                    // console.log('xxxx');
                    setUserStack([...userStack, userInput])
                    setTerminalStack([...terminalStack, {
                        answer: item.answer,
                        valid: true
                    }])
                    check = false;
                    return;
                }
            })
            if (check === true) {
                setUserStack([...userStack, userInput])
                setTerminalStack([...terminalStack, {
                    answer: 'Command not found - ',
                    valid: false
                }])
            }

            setUserInput('')
        } else {
            setUserStack([...userStack, ''])
            setTerminalStack([...terminalStack, {
                answer: '',
                valid: true
            }])
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            handleTerminal();
        }
    };

    useEffect(() => {

        const delayDebounce = setTimeout(() => {

            if (startInterval !== 3) {
                let list = []
                list.push(messages[startInterval])
                setStartMessage([...startMessage, list])
                setStartInterval(startInterval + 1)
            } else {
                setStartTerminal(true)
            }

        }, 1000)

        return () => clearTimeout(delayDebounce)

    }, [startInterval])

    return (
        <div className={`${fullScreen ? `w-full min-h-[100vh]` : `w-[70%] min-h-[50vh]`} transition-all ease-in-out duration-300 text-white rounded-[10px] bg-black bg-opacity-50 backdrop-blur-lg`}>
            <div className='flex justify-between w-full bg-gray-200 rounded-t-[10px] text-black py-1.5' >
                <div className='ml-2 flex items-center space-x-2'>
                    <FaCircle className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300' size={15} color='red' />
                    <FaCircle onClick={() => setFullScreen(!fullScreen)} className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300' size={15} color='yellow' />
                    <FaCircle className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-300' size={15} color='green' />
                </div>
                <div>
                    Terminal
                </div>
                <div className='mr-3 flex items-center'>
                    <FiMaximize2 onClick={() => setFullScreen(!fullScreen)} className='cursor-pointer' size={15} />
                </div>
            </div>
            <div className='scroll-bar terminal-class'
            // className='p-2 w-full h-[50vh] overflow-y-auto'
            >
                <div className='w-full flex flex-col'>
                    {startMessage && startMessage.length > 0 ? startMessage.map((msg) =>
                        <div className='font-medium'>
                            {msg}
                        </div>
                    ) : null}
                </div>

                <div className='w-full flex flex-col mb-8'>
                    {startTerminal ? terminalStack.map((item, index) =>
                        <div className='flex flex-col w-full'>
                            <div className={`${index !== 0 ? `flex` : `hidden`}`}>
                                {item.valid ?
                                    <div>{item.answer.split('\n').map((ans) => <p>{ans}</p>)}</div>
                                    :
                                    <p className='text-red-600'>{item.answer} {userStack[index - 1]}</p>
                                }
                            </div>
                            <div className='flex h-[25px]'>
                                <p className='text-green-500 min-w-[190px] font-medium'>abhayxelp@desktop : ~&nbsp;&nbsp;</p>
                                <input ref={inputRef} type='text' className='w-full bg-transparent focus:outline-0'
                                    onChange={(e) => setUserInput(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    autoFocus
                                    value={userStack[index]}
                                />
                            </div>
                        </div>
                    ) : null}
                </div>

            </div>
        </div>
    )
}
