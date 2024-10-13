import React from 'react'

import ProfileImage from './ProfileImage'
import MyInfo from './MyInfo'
import PrjoectCard from './ProjectCard'
import SkillsContainer from './SkillsContainer'
import { projectData } from '../utils/constants'
// import ForkifyImg from './../assets/forkify-img.png';
// import NetflixGptImg from './../assets/netflix-gpt-img.png';

const Body = () => {

    return (
        <div className='w-2/3 mx-auto '>
            <div className='flex  h-[calc(100vh-100px)] items-center'>
                <div>
                    <div className='flex'>
                        <MyInfo />
                        <ProfileImage />
                    </div>
                    <SkillsContainer />
                </div>
            </div>
            {
                projectData.map(item => {
                    return <PrjoectCard key={item.projNum} {...item} />
                })
            }

        </div>
    )
}

export default Body