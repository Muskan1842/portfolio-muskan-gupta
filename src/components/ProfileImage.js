import React from 'react'
// import profileImage from '../assets/profile-girl.png'
import CircleFrame from '../assets/circle-frame.png'

const ProfileImage = () => {
    return (
        <div className='flex justify-center w-1/2'>
            <div className=''>
                <img alt='profile-frame' src={CircleFrame} className='profile-border-circle absolute w-[30rem] rounded-full'></img>
                <img alt='profile-pic' src='https://portfolio-muskan-gupta.netlify.app/profile-girl.png' className='w-80 rounded-full centric-shadow-profile-photo mt-20 ml-20'></img>
            </div>
        </div>
    )
}

export default ProfileImage