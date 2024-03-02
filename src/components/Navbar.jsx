import React from 'react'
import boards from '../assets/boards-icon.svg'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import bell from '../assets/bell-outline.png'
import plus from '../assets/plus-circle-outline.png'
import alert from '../assets/alert-circle-outline.png'
import search from '../assets/search-outline.png'
import profilePic from '../assets/Oval.svg'
export function Navbar() {
    

    return (
        <>
            <div className="flex justify-between max-sm:px-6 fixed pt-4 px-4 z-50 top-0 left-0 bg-white pb-2 shadow-lg w-screen overflow-none">
                <div className="flex w-[25%] items-center">
                    <img src={boards} className='h-[30px] px-1' alt="boards" />
                    <img src={search} alt="" className='h-[20px]' />
                </div>
                <div className="flex items-center w-[30%] lg:w-[10%] justify-between">
                    <img src={plus} alt="" className="h-[20px]" />
                    <img src={alert} alt="" className="h-[20px]" />
                    <img src={bell} alt="" className="h-[20px]" />
                    <img src={profilePic} alt="" className='h-[30px]' />
                </div>
            </div>
        </>
    )
}
