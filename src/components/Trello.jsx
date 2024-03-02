import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis,faComment,faHeart ,faPaperclip} from '@fortawesome/free-solid-svg-icons'
import attach from '../assets/attatch.png'
import couple from '../assets/couple.png'
import like from '../assets/like.png'
import comment from '../assets/message.png'
import users1 from '../assets/users_1.png'
import art from '../assets/eye_art.png'

export function Trello() {
    

    return (
        <>
        <div className="pt-3 pb-3 pr-3 lg:min-w-[30vw] max-lg:w-[40vw] max-md:w-[60vw] max-sm:min-w-[95vw] ">
                <div className="h-[40px] w-[100%] justify-between rounded-md px-4 bg-[#f4f4f4] flex items-center">
                    <h4 className='text-lg'>Trello</h4>
                    <FontAwesomeIcon icon={faEllipsis} size='xl' className='text-gray-400'/>
                </div>
                <div className="bg-[#f4f4f4] mt-3 px-4 pt-5 w-[100%] pb-5 rounded-lg">
                <img src={art} className='w-[100%] pb-3' alt="" />
                    <div className="flex pb-2">
                    <div className="h-[6px] w-[14%] bg-[#891be8] mr-3 rounded-lg"></div>
                    <div className="h-[6px] w-[14%] bg-[#ff3838] mr-3 rounded-lg"></div>
                    <div className="h-[6px] w-[14%] bg-[#4339F2] mr-3 rounded-lg"></div>
                    </div>
                    <div className="">
                        <h1 className='text-xl lg:text-lg'>Types of paper in catalog printing</h1>
                        <p className='text-xl lg:text-lg text-gray-500'>Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).</p>
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
                <div className="bg-[#f4f4f4] mt-3 px-4 pt-5 w-[100%] pb-5 rounded-lg">
                    
                    <div className="flex pt-3 pb-2">
                    <div className="h-[6px] w-[14%] bg-[#0AAAF4] mr-3 rounded-lg"></div>
                    <div className="h-[6px] w-[14%] bg-[#1AD698] mr-3 rounded-lg"></div>
                    </div>
                    <h1 className='text-lg lg:text-lg'>There is no competition</h1>
                    <p className='text-md lg:text-lg text-gray-500'>This article is floated online with an aim to help you find the best dvd printing solution.</p>
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
               <div className="w-[100%] border-2 flex justify-center items-center h-[200px] mt-3 rounded-xl border-dashed">
                    <h1 className='text-xl'>+ Add new card</h1>
               </div>
            </div>
            
            
        </>
    )
}
