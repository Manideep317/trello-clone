import React from 'react'
import like from '../assets/like.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import globe from '../assets/globe.png'
import lock from '../assets/lock.png'
import users from '../assets/Users.png'
import { PublicDashboard } from './PublicDashboard'
export function Dashboard() {
    return (
        <>
            <div className="max-sm:top-12 sm:top-12 lg:top-14 max-sm:pt-1 px-3 absolute">
                <div className="overflow-hidden px-3 w-screen py-3 max-sm:px-5 z-20 flex bg-white justify-between left-0 fixed">
                    <div className="md:flex md:items-center md:justify-between md:w-[30vw] lg:w-[20vw]">
                        <h2 className='text-md md:text-lg md:font-medium font-poppins'>Brackets</h2>
                        <div className="flex items-center min-w-[100px] ">
                            <FontAwesomeIcon icon={faHeart} className='h-[13px]' style={{ color: "#bdbfc2", }} />
                            <div className="h-[25px] ml-2 w-[1px] bg-gray-300"></div>
                            <div className="flex items-center px-2">
                                <img src={globe} alt="" className='h-[16px]' />
                                <p className="text-[#bdbdbd] text-lg">Public</p>
                            </div>
                            <div className="h-[25px] mx-2 w-[1px] bg-gray-300"></div>
                            <img src={lock} alt="" className="pr-2 h-[16px]" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <img src={users} className='h-[30px]' />
                        <p className="text-xl px-2">Menu</p>
                    </div>
                </div>
                <div className="px-2 md:top-12 max-sm:top-16 relative">
                    <div className="">
                        <PublicDashboard />
                    </div>
                </div>
            </div>
        </>
    )
}
