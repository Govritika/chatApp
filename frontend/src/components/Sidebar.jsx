import React from 'react'
import SearchBox from './SearchBox.jsx';
import Chats from './Chats.jsx';
import LogoutButton from './LogoutButton.jsx';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchBox />
        <div className='divider px-3'></div>
        <Chats />
        <LogoutButton />
    </div>
  )
}

export default Sidebar;



//starter code---------------

// import React from 'react'
// import SearchBox from './SearchBox.jsx';
// import Chats from './Chats.jsx';
// import LogoutButton from './LogoutButton.jsx';

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
//         <SearchBox />
//         <div className='divider px-3'></div>
//         <Chats />
//         <LogoutButton />
//     </div>
//   )
// }

// export default Sidebar;

