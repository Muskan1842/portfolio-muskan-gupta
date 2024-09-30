import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import LinkedInIcon from './../assets/linkedin-icon.svg'
import GithubIcon from './../assets/github-icon.svg'

const MyInfo = () => {
    return (
        <div className='w-1/2  py-32'>
            <div className='text-2xl text-purple-50'>Software Developer</div>
            <div className='text-6xl text-purple-50 mt-2'>Hello I'm</div>
            <div className='text-7xl text-purple-600'>Muskan Gupta</div>
            <div className='text-xl text-purple-50 mt-4 w-3/4 flex-wrap flex'>I excel at building smooth and interactive digital experience powered by latest tech and tools! </div>
            <div className='flex mt-8'>

                <button className='border-[1px] border-purple-600 text-purple-600 rounded-full px-6 py-2 mr-4 text-xl flex'>DOWNLOAD RESUME <span><ArrowDownTrayIcon className='ml-2 w-6 ' /></span></button>
                <div className='py-1 flex'>
                    <button className='border-[1px] border-purple-600 px-3 mx-2 rounded-full'><img src={LinkedInIcon} className='w-4  '></img></button>
                    <button className='border-[1px] border-purple-600 px-3 mx-2 rounded-full'><img src={GithubIcon} className='w-4  '></img></button>

                </div>
                <button className=''></button>
                <button className=''></button>

            </div>
        </div>
    )
}

export default MyInfo