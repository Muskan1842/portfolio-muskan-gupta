import React from 'react'
import profileImage from '../assets/profile-girl.png'
import CircleFrame from '../assets/circle-frame.png'

const ProfileImage = () => {
    return (
        <div className='pt-16 pl-16'>
            <img src={CircleFrame} className='profile-border-circle absolute w-[30rem] rounded-full'></img>
            <div className='mt-20 ml-20'>
                <img src={profileImage} className='w-80 rounded-full centric-shadow-profile-photo'></img>
            </div>
        </div>
    )
}

export default ProfileImage