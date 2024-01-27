import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis,faComment,faHeart ,faPaperclip} from '@fortawesome/free-solid-svg-icons'
import attach from '../assets/attatch.png'
import users2 from '../assets/users_test2.png'
import couple from '../assets/yellow_don.png'
import like from '../assets/like.png'
import comment from '../assets/message.png'
import users1 from '../assets/users_test1.png'
import art from '../assets/art.png'

export function Test() {
    

    return (
        <>
        <div className="pt-3 pb-3 pr-3 max-lg:w-[40vw] lg:w-[100vw] max-md:w-[60vw] max-sm:w-[95vw] ">
                <div className="h-[40px] w-[100%] justify-between rounded-md px-4 bg-[#f4f4f4] flex items-center">
                    <h4 className='text-lg'>Test</h4>
                    <FontAwesomeIcon icon={faEllipsis} size='xl' className='text-gray-400'/>
                </div>
                <div className="bg-[#f4f4f4] mt-3 px-4 pt-5 w-[100%] pb-5 rounded-lg">
                    <div className="flex pb-2">
                    <div className="h-[6px] w-[14%] bg-[#4339F2] mr-3 rounded-lg"></div>
                    <div className="h-[6px] w-[14%] bg-[#ff3838] mr-3 rounded-lg"></div>
                    </div>
                    <div className="">
                        <h1 className='max-md:text-lg lg:text-lg'>Linux or windows which is it</h1>
                        <p className='max-md:text-md lg:text-lg text-gray-500'>Saving money -is something we would all like.</p>
                        <div className="pt-3 flex justify-between items-center">
                            <img src={users1} alt="" />
                            <div className="flex">
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">32</p>
                                <FontAwesomeIcon icon={faComment} className='text-gray-500'/>
                                </div>
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">87</p>
                                    <FontAwesomeIcon icon={faHeart} className='text-gray-500' />
                                </div>
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">31</p>
                                    <FontAwesomeIcon icon={faPaperclip} className='text-gray-500'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f4f4f4] mt-3 px-4 pt-5 w-[100%] pb-5 rounded-lg">
                    <img src={couple} className='w-[100%]' alt="" />
                    <div className="flex pt-3 pb-2">

                    <div className="h-[6px] w-[15%] bg-[#4339F2] mr-3 rounded-lg"></div>
                    <div className="h-[6px] w-[15%] bg-[#ff3838] mr-3 rounded-lg"></div>
                    <div className="h-[6px] w-[15%] bg-[#0AAAF4] mr-3 rounded-lg"></div>
                    </div>
                    <h1 className='text-lg lg:text-xl max-sm:py-1'>Be single minded</h1>
                    <p className='text-md lg:text-lg text-gray-500'>Create a list with all possible keywords that fit to your product, service or business field.</p>
                    <div className="pt-3 flex justify-between items-center">
                            <img src={users2} alt="" />
                            <div className="flex">
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">21</p>
                                <FontAwesomeIcon icon={faComment} className='text-gray-500'/>
                                </div>
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">34</p>
                                    <FontAwesomeIcon icon={faHeart} className='text-gray-500' />
                                </div>
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">17</p>
                                    <FontAwesomeIcon icon={faPaperclip} className='text-gray-500'/>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="bg-[#f4f4f4] rounded-lg mt-3 px-4 pt-5 w-[100%] pb-5 rounded-lgc">
                
                    <div className="flex pt-3 pb-2">
                    <div className="h-[6px] w-[14%] bg-[#F8BD1C] mr-3 rounded-lg"></div>
                    </div>
                    <h1 className='text-xl max-md:text-lg'>Linux or windows which is it</h1>
                    <p className='text-xl max-md:text-md text-gray-500'>Saving money - is something we would all like</p>
                    <div className="pt-3 flex justify-between items-center">
                            <img src={users2} alt="" />
                            <div className="flex">
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">55</p>
                                <FontAwesomeIcon icon={faComment} className='text-gray-500'/>
                                </div>
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">23</p>
                                    <FontAwesomeIcon icon={faHeart} className='text-gray-500' />
                                </div>
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">19</p>
                                    <FontAwesomeIcon icon={faPaperclip} className='text-gray-500'/>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="bg-[#f4f4f4] mt-3 px-4 pt-5 w-[100%] pb-5 rounded-lg">
                    <div className="flex pb-2">
                    <div className="h-[6px] w-[14%] bg-[#4339F2] mr-3 rounded-lg"></div>
                    <div className="h-[6px] w-[14%] bg-[#ff3838] mr-3 rounded-lg"></div>
                    </div>
                    <div className="">
                        <h1 className='max-md:text-lg lg:text-lg'>Dna the future of nutrition</h1>
                        <p className='max-md:text-md lg:text-lg text-gray-500'>“Why does anyone want a vasectomy reversal?” This is a question I hear any time I tell someone what I do for a living.</p>
                        <div className="pt-3 flex justify-between items-center">
                            <img src={users1} alt="" />
                            <div className="flex">
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">12</p>
                                <FontAwesomeIcon icon={faComment} className='text-gray-500'/>
                                </div>
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">33</p>
                                    <FontAwesomeIcon icon={faHeart} className='text-gray-500' />
                                </div>
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">66</p>
                                    <FontAwesomeIcon icon={faPaperclip} className='text-gray-500'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
