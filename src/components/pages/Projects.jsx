import React from 'react'
import projectImg from '../../assets/beach-work.jpg'

const Projects = () => {
  return (
    <div className='p-4'>
      <div className='flex justify-center mb-4'>
        <button className='bg-[#111B52] border border-[#EFEFF2] rounded-sm hover:bg-indigo-900 active:bg-indigo-600'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-arrow-left-short'
            viewBox='0 0 16 16'
            className='w-6 h-6'
          >
            <path
              fill-rule='evenodd'
              d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'
            />
          </svg>
        </button>
        <button className='bg-[#111B52] border border-[#EFEFF2] mx-2 rounded-sm hover:bg-indigo-900 active:bg-indigo-600'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-arrow-right-short'
            viewBox='0 0 16 16'
            className='w-6 h-6'
          >
            <path
              fill-rule='evenodd'
              d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'
            />
          </svg>
        </button>
      </div>
      <div className='flex justify-center h-72 mb-4'>
        <img className='object-contain' src={projectImg} alt='' />
      </div>
      <div>
        <p>TECH</p>
      </div>
      <div>
        <p>DESCRIPTION</p>
      </div>
      <div>
        <p>demo / code</p>
      </div>
      <div>Circles</div>
    </div>
  )
}

export default Projects
