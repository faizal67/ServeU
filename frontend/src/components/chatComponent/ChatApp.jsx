import React, { useState, useEffect } from 'react';
import SelectUsername from './components/SelectUsername';
import Chat from './components/Chat';
import socket from './socket';



function ChatApp({username, connectUser}) {
  // console.log('username',username)
  // console.log('connectUer',connectUser)
  // const [usernameAlreadySelected, setUsernameAlreadySelected] = useState(true);
  // const username = user.displayName ;
  useEffect(()=>{
    socket.auth = { username };
    socket.connect();
  })

  useEffect(() => {
    const sessionID = localStorage.getItem('sessionID');

    if (sessionID) {
      // setUsernameAlreadySelected(true);
      socket.auth = { sessionID };
      socket.connect();
    }

    const handleSession = ({ sessionID, userID }) => {
      socket.auth = { sessionID };
      localStorage.setItem('sessionID', sessionID);
      socket.userID = userID;
    };

    const handleConnectError = (err) => {
      if (err.message === 'invalid username') {
        // setUsernameAlreadySelected(false);
      }
    };

    socket.on('session', handleSession);
    socket.on('connect_error', handleConnectError);

    return () => {
      socket.off('connect_error', handleConnectError);
    };
  }, []);

  return (
    <div id="app" >
      {/* <div className='border-2 border-green-700   h-60 scroll-auto'> */}
      {/* {!usernameAlreadySelected ? (
        <SelectUsername onInput={onUsernameSelection} />
      ) : ( */}
        <Chat connectUser={connectUser}/>
      {/* )} */}
      {/* </div> */}
    </div>
  );
}

export default ChatApp;

