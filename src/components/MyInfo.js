import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
// import LinkedInIcon from './../assets/linkedin-icon.svg'
// import GithubIcon from './../assets/github-icon.svg'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import ResumePdf from './../Resume.pdf'

const MyInfo = () => {
    const handleDownloadClick = () => {
        const link = document.createElement('a');
        link.href = ResumePdf;
        link.download = 'MuskanGupta_FrontEndDev';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='w-1/2 pt-12'>
            <div className='text-2xl text-purple-50'>Software Developer</div>
            <div className='text-6xl text-purple-50 mt-2'>Hello I'm</div>
            <div className='text-7xl text-purple-600'>Muskan Gupta</div>
            <div className='text-xl text-purple-50 mt-4 w-3/4 flex-wrap flex'>I excel at building smooth and interactive digital experience powered by latest tech and tools! </div>
            <div className='flex mt-8'>

                <button download='mycv' onClick={handleDownloadClick} className=' bg-purple-600 text-purple-50 rounded-full px-6  mr-4 text-xl flex w-64 justify-center items-center cursor-pointer'>DOWNLOAD RESUME <span><ArrowDownTrayIcon className='ml-2 w-6 ' /></span></button>
                <div className='py-1 flex items-center'>
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/muskan-arpit-gupta/' className='flex items-center justify-center w-10 h-10 border-[1px] border-purple-600 mx-2 rounded-full cursor-pointer'><img alt='linked-in-icon' src='https://portfolio-muskan-gupta.netlify.app/assets/linkedin-icon.svg' className='w-4'></img></a>
                    <a target='_blank' rel="noreferrer" href='https://github.com/Muskan1842' className='flex items-center justify-center w-10 h-10 border-[1px] border-purple-600 mx-2 rounded-full cursor-pointer'><img alt='github-icon' src='https://portfolio-muskan-gupta.netlify.app/assets/github-icon.svg' className='w-4'></img></a>
                </div>

            </div>
            <div className='flex text-purple-600 text-xl mt-4 items-center'>
                <div className='flex py-2 px-4 justify-center'>
                    <PhoneIcon className='w-6 mr-3' />
                    +91 9623980630
                </div>
                <div> | </div>
                <div className='flex py-2 px-4 justify-center'>
                    <EnvelopeIcon className='w-6 mr-2' />
                    mush.rpt@gmail.com
                </div>
            </div>
        </div >
    )
}

export default MyInfo