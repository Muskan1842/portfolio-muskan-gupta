import React from 'react'

import ProfileImage from './ProfileImage'
import MyInfo from './MyInfo'

const Body = () => {
    return (
        <div className='w-2/3 mx-auto pt-20'>
            <div className='flex'>
                <MyInfo />
                <ProfileImage />
            </div>
        </div>
    )
}

export default Body