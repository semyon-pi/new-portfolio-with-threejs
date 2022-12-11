import React from 'react'
const Header = () => {
  return (
    <div className='h-20 w-screen bg-[#020738]  grid grid-cols-3 text-white border border-[#EFEFF2]'>
      <div>
        <div className='p-4 m-3 bg-[#111B52] inline-block border border-[#EFEFF2] rounded hover:bg-indigo-900 active:bg-indigo-600 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </div>
      </div>
      <div>
        <div className='my-2'>
          <p>
            <span className='text-xs'>SOFTWARE ENGINEER</span>
            <br /> <span className='text-xl'>Semyon Pinhasov</span>
          </p>
        </div>
      </div>
      <div className='relative'>
        <div className='absolute top-0 right-0 p-4 m-3 inline-block cursor-pointer hover:-translate-y-0.5 transform transition'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Header
