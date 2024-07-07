import React from 'react'
import Msgs from './Msgs';
import MessageInput from './MessageInput.jsx';
import {TiMessages} from 'react-icons/ti';

const MessageContainer = () => {
    const noChatSelected = true;
  return (
   <div className="flex md:min-w-[450px] flex-col">
     {noChatSelected ? <NoChatSelected /> : (
        <>
        {/* <Header /> */}
        <div className='md:min-w-[450px] flex flex-col' >
        <span className='text-gray-900 font-bold'>Julia James</span>
        </div>
        <Msgs />
        <MessageInput />
        </>
     )}
   </div>
  )
}

export default MessageContainer;

//when no chat is selected
const NoChatSelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome Julia James</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};



//starter code----------------

// import React from 'react'
// import Msgs from './Msgs';
// import MessageInput from './MessageInput.jsx';

// const MessageContainer = () => {
//   return (
//     <>
//     {/* <Header /> */}
//     <div className='md:min-w-[450px] flex flex-col' >
//     <span className='text-gray-900 font-bold'>Julia James</span>
//     </div>
    
//     <Msgs />
//     <MessageInput />
//     </>
//   )
// }

// export default MessageContainer;