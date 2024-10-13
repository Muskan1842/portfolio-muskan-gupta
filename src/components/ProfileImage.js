import React, { useState } from 'react'

const ProfileImage = () => {

    const [loaded, setLoaded] = useState(false);

    const handleImageLoad = () => {
        setLoaded(true);
    };

    return (
        <div className='flex justify-center w-1/2'>
            <div className=''>
                <img alt='profile-frame' src='https://portfolio-muskan-gupta.netlify.app/assets/circle-frame.png' className='profile-border-circle absolute w-[30rem] rounded-full'></img>
                <img alt='profile-pic' src='https://portfolio-muskan-gupta.netlify.app/assets/profile-girl.png' onLoad={handleImageLoad} className={`w-80 rounded-full centric-shadow-profile-photo mt-20 ml-20 zoom-in-image ${loaded ? "zoom-in" : ""}`}></img>
            </div>
        </div>
    )
}

export default ProfileImage