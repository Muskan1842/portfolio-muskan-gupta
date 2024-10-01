import React from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import GithubIcon from './../assets/github-icon-light.svg'

const PrjoectCard = (props) => {

  const { imageFirst, projNum, projImg, projTitle, projDesc, projWebLink, projGithubLink, projTechStack } = props

  return (
    <div className={(imageFirst ? "flex-row text-left" : "flex-row-reverse text-right") + " flex mb-20 "}>
      <img alt="" className={'w-1/2 rounded-lg' + (imageFirst ? ' mr-4' : ' ml-4')} />

      <div className='w-1/2 p-4 text-purple-50'>
        <div className='text-7xl font-bold text-purple-600 my-4' > {projNum}</div>
        <div className='text-4xl my-2' > {projTitle}</div>
        <div className='text-lg mt-2' > {projDesc.map(item => <p key={item}>{item}</p>)}</div>
        <div className='text-2xl  font-bold text-purple-600 my-8' > {projTechStack.join(', ')}</div>
        <hr ></hr>
        <div className='flex my-4'>
          <div className='p-3 m-2 rounded-full  bg-purple-600/30  '><ArrowUpRightIcon className='w-8 text-purple-50' /></div>
          <div className='p-3 m-2 rounded-full bg-purple-600/30 '><img src={GithubIcon} className='w-8 ' /></div>
        </div>
      </div>
    </div>
  )
}

export default PrjoectCard