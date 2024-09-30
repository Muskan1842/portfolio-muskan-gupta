import React from 'react'


const Header = () => {
    return (
        <div className='fixed top-0 left-0 right-0 w-2/3 z-10 mx-auto flex py-4 justify-between '>
            <div className='text-3xl font-bold text-purple-50 '>Muskan.</div>
            <div className='flex align-middle pr-12'>
                <div className='text-purple-600 px-4 mx-2 text-xl flex items-end'>Home</div>
                <div className='text-purple-600 px-4 mx-2 text-xl flex items-end'>Work</div>
                <div className='text-purple-600 px-4 mx-2 text-xl flex items-end'>Resume</div>
                <div className='text-purple-600 px-4 mx-2 text-xl flex items-end'>Skills</div>
                <button className='text-purple-50 px-5 py-1 mx-2 text-xl bg-purple-600 rounded-full'>Hire Me</button>
            </div>
        </div>
    )
}

export default Header
