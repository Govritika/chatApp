import React from 'react'
import { IoMdSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-cyan-500 text-white'>
        <IoMdSearch className='w-6 h-6 outline-none' />
        </button>

    </form>
  )
}

export default SearchBox;


//starter code----------------------

// import React from 'react'
// import { IoMdSearch } from "react-icons/io";

// const SearchBox = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-cyan-500 text-white'>
//         <IoMdSearch className='w-6 h-6 outline-none' />
//         </button>

//     </form>
//   )
// }

// export default SearchBox;