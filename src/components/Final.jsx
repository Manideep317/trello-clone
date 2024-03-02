import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis,faComment,faHeart ,faPaperclip} from '@fortawesome/free-solid-svg-icons'
import attach from '../assets/attatch.png'
import couple from '../assets/couple.png'
import lip from '../assets/lip_bite.png'
import like from '../assets/like.png'
import users2 from '../assets/users_1.png'
import comment from '../assets/message.png'
import users1 from '../assets/users_test1.png'
import art from '../assets/art.png'

export function Final() {
    

    return (
        <>
        <div className="pt-3 pb-3 mr-3 lg:min-w-[30vw] pr-3 max-lg:w-[40vw] max-md:w-[60vw] max-sm:min-w-[95vw] ">
                <div className="h-[40px] w-[100%] justify-between rounded-md px-4 bg-[#f4f4f4] flex items-center">
                    <h4 className='text-lg'>Final</h4>
                    <FontAwesomeIcon icon={faEllipsis} size='xl' className='text-gray-400'/>
                </div>
                <div className="bg-[#f4f4f4] mt-3 px-4 pt-5 w-[100%] pb-5 rounded-lg">
                    <div className="flex pb-2">
                    <div className="h-[6px] w-[14%] bg-[#F8BD1C] mr-3 rounded-lg"></div>
                    <div className="h-[6px] w-[14%] bg-[#ff3838] mr-3 rounded-lg"></div>
                    <div className="h-[6px] w-[14%] bg-[#891be8] mr-3 rounded-lg"></div>
                    </div>
                    <div className="">
                        <h1 className='text-lg lg:text-lg'>At home treatments for beauty on a budget</h1>
                        <p className='text-md lg:text-md text-gray-500'>The holidays bring with them thoughts of carving and serving delicious turkey dinners to your family and friends. Tradition has its fans, but perhaps this year you’d like to try a twist to your turkey recipe.</p>
                        <div className="pt-3 flex justify-between items-center">
                            <button className='text-2xl font-white bg-black w-[24px] md:w-[30px] md:h-[30px] h-[24px] flex items-center justify-center rounded-full text-white'>+</button>
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
                
                <div className="bg-[#f4f4f4] rounded-lg mt-3 px-4 pt-5 w-[100%] pb-5 rounded-lgc">
                    <div className="flex pt-3 pb-2">
                    <div className="h-[6px] w-[14%] bg-[#891be8] mr-3 rounded-lg"></div>
                    <div className="h-[6px] w-[14%] bg-[#1AD698] mr-3 rounded-lg"></div>
                    </div>
                    <h1 className='text-lg'>Home business advertising ideas</h1>
                    <p className='text-lg text-gray-500'>Successful businesses know the importance of building and maintaining good working.</p>
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
                <div className="bg-[#f4f4f4] mt-3 px-4 pt-5 w-[100%] pb-5 rounded-lg">
                    <img src={lip} className='w-[100%]' alt="" />
                    <div className="flex pt-3 pb-2">
                    <div className="h-[6px] w-[14%] bg-[#0AAAF4] mr-3 rounded-lg"></div>
                    <div className="h-[6px] w-[14%] bg-[#F8BD1C] mr-3 rounded-lg"></div>
                    </div>
                    <h1 className='text-lg lg:text-xl'>Tips for choosing the perfect gloss for your lips</h1>
                    <p className='text-md lg:text-lg text-gray-500'>With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users.</p>
                    <div className="pt-3 flex justify-between items-center">
                            <img src={users2} className='md:h-[30px]' alt="" />
                            <div className="flex">
                                <div className="flex items-center px-1">
                                    <p className="p-1 text-slate-500">33</p>
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
