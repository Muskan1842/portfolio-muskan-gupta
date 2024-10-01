import React from 'react'

const SkillsContainer = () => {
  const skillList = ['REACT', 'REDUX', 'ANGULAR', 'JAVASCRIPT', 'HTML', 'CSS', 'TAILWIND CSS', 'WEBPACK', 'GIT', 'JEST', 'KARMA']
  return (
    <div className='text-2xl text-purple-600 flex flex-wrap mt-32'>{skillList.join(' | ')}</div>
  )
}

export default SkillsContainer