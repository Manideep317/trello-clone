import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis,faComment,faHeart ,faPaperclip} from '@fortawesome/free-solid-svg-icons'
import attach from '../assets/attatch.png'
import couple from '../assets/couple.png'
import like from '../assets/like.png'
import comment from '../assets/message.png'
import users1 from '../assets/users_1.png'
import art from '../assets/art.png'

export function Protip() {
    return (
        <>
        <div className="pt-3 pb-3 pr-3 max-lg:w-[40vw] max-md:w-[60vw] lg:min-w-[30vw] max-sm:min-w-[95vw] ">
                <div className="h-[40px] w-[100%] justify-between rounded-md px-4 bg-[#f4f4f4] flex items-center">
                    <h4 className='text-lg'>Protip</h4>
                    <FontAwesomeIcon icon={faEllipsis} size='xl' className='text-gray-400'/>
                </div>
                <div className="bg-[#f4f4f4] mt-3 px-4 pt-5 w-[100%] pb-5 rounded-lg">
                    <div className="flex pb-2">
                    <div className="h-[6px] w-[14%] bg-[#4339F2] mr-3 rounded-lg"></div>
                    <div className="h-[6px] w-[14%] bg-[#ff3838] mr-3 rounded-lg"></div>
                    <div className="h-[6px] w-[14%] bg-[#891be8] mr-3 rounded-lg"></div>
                    </div>
                    <div className="">
                        <h1 className='text-lg lg:text-lg'>Home business advertising ideas</h1>
                        <p className='text-md lg:text-lg text-gray-500'>Successful businesses know the importance of building and maintaining good working</p>
                        <div className="pt-3 flex justify-between items-center">
                            <button className='text-2xl font-white bg-black w-[24px] h-[24px] flex items-center justify-center rounded-full text-white'>+</button>
                            <div className="flex">
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">76</p>
                                <FontAwesomeIcon icon={faComment} className='text-gray-500'/>
                                </div>
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">45</p>
                                    <FontAwesomeIcon icon={faHeart} className='text-gray-500' />
                                </div>
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">12</p>
                                    <FontAwesomeIcon icon={faPaperclip} className='text-gray-500'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f4f4f4] mt-3 px-4 pt-5 w-[100%] pb-5 rounded-lg">
                    <img src={couple} className='w-[100%]' alt="" />
                    <div className="flex pt-3 pb-2">
                    <div className="h-[6px] w-[14%] bg-[#F8BD1C] mr-3 rounded-lg"></div>
                    </div>
                    <h1 className='text-xl lg:text-xl'>Unmatched toner cartridge quality 20 less than oem price</h1>
                    <p className='text-xl lg:text-lg text-gray-500'>Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.</p>
                    <div className="pt-3 flex justify-between items-center">
                            <img src={users1} alt="" />
                            <div className="flex">
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">76</p>
                                <FontAwesomeIcon icon={faComment} className='text-gray-500'/>
                                </div>
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">45</p>
                                    <FontAwesomeIcon icon={faHeart} className='text-gray-500' />
                                </div>
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">12</p>
                                    <FontAwesomeIcon icon={faPaperclip} className='text-gray-500'/>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="bg-[#f4f4f4] rounded-lg mt-3 px-4 pt-5 w-[100%] pb-5 rounded-lgc">
                <img src={art} className='w-[100%]' alt="" />
                    <div className="flex pt-3 pb-2">
                    <div className="h-[6px] w-[14%] bg-[#1AD698] mr-3 rounded-lg"></div>
                    </div>
                    <h1 className='text-xl'>How to look up</h1>
                    <p className='text-xl text-gray-500'>Are you considering buying a compatible inkjet cartridge for your printer?</p>
                    <div className="pt-3 flex justify-between items-center">
                            <img src={users1} alt="" />
                            <div className="flex">
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">76</p>
                                <FontAwesomeIcon icon={faComment} className='text-gray-500'/>
                                </div>
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">45</p>
                                    <FontAwesomeIcon icon={faHeart} className='text-gray-500' />
                                </div>
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">12</p>
                                    <FontAwesomeIcon icon={faPaperclip} className='text-gray-500'/>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}
