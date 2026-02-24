import React from 'react'

const MyButton = ( {children, dis} ) => {
  return (
    <button disabled = {dis} className='bg-violet-500 disabled:bg-grey-500 text-white px-5 py-2 rounded-md '>
        { children }
    </button>
  )
}

export default MyButton