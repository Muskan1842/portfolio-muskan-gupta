import React from 'react'

import ProfileImage from './ProfileImage'
import MyInfo from './MyInfo'
import PrjoectCard from './ProjectCard'
import SkillsContainer from './SkillsContainer'
import ForkifyImg from './../assets/forkify-img.png';
import NetflixGptImg from './../assets/netflix-gpt-img.png';

const Body = () => {

    const projData1 = {
        projNum: '01',
        projImg: NetflixGptImg,
        projTitle: 'Super Netflix Gpt',
        projDesc: ['Netflix with SUPER POWERS of ChatGPT!', 'A video streaming User Experience using OpenAI APIs.'],
        projWebLink: 'https://super-netflix-gpt.web.app/',
        projGithubLink: 'https://github.com/Muskan1842/netflix-gpt',
        projTechStack: ['React', 'Tailwind.css', 'Redux', 'React Router', 'Firebase Auth']
    }
    const projData2 = {
        projNum: '02',
        projImg: ForkifyImg,
        projTitle: 'Forkify Recipe App',
        projDesc: ['Try or Upload a new Recipe!', 'An app built with pure Vanilla Javascript, HTML and CSS.'],
        projWebLink: 'https://forkify-recipie-app.netlify.app/',
        projGithubLink: 'https://github.com/Muskan1842/forkify-recipe-app',
        projTechStack: ['Javascript', 'HTML', 'CSS', 'Parcel']
    }


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
            <PrjoectCard imageFirst={true}  {...projData1} />
            <PrjoectCard imageFirst={false} {...projData2} />
        </div>
    )
}

export default Body