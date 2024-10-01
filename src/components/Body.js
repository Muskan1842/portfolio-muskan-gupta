import React from 'react'

import ProfileImage from './ProfileImage'
import MyInfo from './MyInfo'
import PrjoectCard from './ProjectCard'

const Body = () => {

    const projData = {
        projNum: '01',
        projImg: '',
        projTitle: 'Super Netflix Gpt',
        projDesc: ['Netflix with SUPER POWERS of ChatGPT!', 'A video streaming User Experience using OpenAI APIs.'],
        projWebLink: 'https://super-netflix-gpt.web.app/',
        projGithubLink: 'https://github.com/Muskan1842/netflix-gpt',
        projTechStack: ['React', 'Tailwind.css', 'Redux', 'React Router']
    }


    return (
        <div className='w-2/3 mx-auto '>
            <div className='flex  h-[calc(100vh-100px)] items-center'>
                <div className='flex'>
                    <MyInfo />
                    <ProfileImage />
                </div>
            </div>
            <PrjoectCard imageFirst={true}  {...projData} />
            <PrjoectCard imageFirst={false} {...projData} />
        </div>
    )
}

export default Body