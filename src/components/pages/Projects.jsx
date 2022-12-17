import React from 'react'
import projectImg from '../../assets/beach-work.jpg'

const Projects = () => {
  return (
    <div>
      <div className='p-4 sm:grid grid-cols-2  gap-4'>
        <div className=''>
          <img className='h-full' src={projectImg} alt='' />
        </div>
        <div>
          <div className='bg-[#111B52] p-2 mb-2'>
            <p>APPLICATION NAME</p>
          </div>
          <div className='bg-[#111B52] p-2 mb-2'>
            <p>TECH</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate molestias atque suscipit quaerat sequi ullam
              exercitationem explicabo sit mollitia distinctio.
            </p>
          </div>
          <div className='bg-[#111B52] p-2 mb-2'>
            <p>DESCRIPTION</p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate molestias atque suscipit quaerat sequi ullam
              exercitationem explicabo sit mollitia distinctio.
            </p>
          </div>
          <div className='p-2 my-4 flex justify-center'>
            <button className='p-1 rounded-sm hover:bg-indigo-900 active:bg-indigo-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z' />
                <path d='M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z' />
              </svg>
            </button>
            <button className='p-1 mx-2 rounded-sm hover:bg-indigo-900 active:bg-indigo-600'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z' />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className='m-2 flex justify-center'>
        <button className='bg-[#111B52] border border-[#EFEFF2] rounded-sm hover:bg-indigo-900 active:bg-indigo-600'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
            className='w-6 h-6'
          >
            <path
              fillRule='evenodd'
              d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'
            />
          </svg>
        </button>
        <div className='flex justify-center p-1 mx-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
          </svg>
        </div>
        <button className='bg-[#111B52] border border-[#EFEFF2]  rounded-sm hover:bg-indigo-900 active:bg-indigo-600'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
            className='w-6 h-6'
          >
            <path
              fillRule='evenodd'
              d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Projects
