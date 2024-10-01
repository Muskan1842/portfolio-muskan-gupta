import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/20/solid'


const Header = () => {
    const email = 'mush.rpt@gmail.com';
    return (
        <div className='flex justify-between items-center w-2/3 h-20 top-0 left-0 right-0 mx-auto py-4 z-10 sticky  bg-blue-950 '>
            <div className='text-3xl font-bold text-purple-50 '>Muskan<span className='text-purple-600'>.</span></div>
            <div className=' flex items-center pr-12'>
                <div className='text-purple-600 px-4 mx-2 text-xl flex items-end'>Home</div>
                <div className='text-purple-600 px-4 mx-2 text-xl flex items-end'>Skills</div>
                <div className='text-purple-600 px-4 mx-2 text-xl flex items-end'>Work</div>
                <a href={`mailto:${email}`} className='text-purple-50 px-5 py-2 mx-2 text-xl bg-purple-600 rounded-full flex items-center cursor-pointer'>Contact Me <EnvelopeIcon className='w-6 mx-3' /></a>
            </div>
        </div>
    )
}

export default Header
