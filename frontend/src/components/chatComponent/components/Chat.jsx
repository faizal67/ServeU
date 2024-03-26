import React, { useState, useEffect } from "react";
import socket from "../socket";
import User from "./User";
import MessagePanel from "./MessagePanel";

function Chat({connectUser}) {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState();

   console.log(users)

   useEffect(() => {
    const findUser = users.filter((user) => user.username === connectUser);
    const findUserConnected = findUser.find(user => user.connected === true)
    console.log('finded ',findUserConnected)
    if (findUserConnected) {
      setSelectedUser(findUserConnected);
    }
    else{
      setSelectedUser(findUser[0])
    }
  }, [connectUser, users]);
  



  const onMessage = (content) => {
    if (selectedUser) {
      socket.emit("private message", {
        content,
        to: selectedUser.userID,
      });
      const updatedMessages = [...selectedUser.messages, { content, fromSelf: true }];
      setSelectedUser({ ...selectedUser, messages: updatedMessages });
    }
  };

  const onSelectUser = (user) => {
    setSelectedUser(user);
    user.hasNewMessages = false;
  };

  useEffect(() => {
    const initReactiveProperties = (user) => {
      user.hasNewMessages = false;
    };

    const handleConnect = () => {
      const updatedUsers = [...users];
      updatedUsers.forEach((user) => {
        if (user.self) {
          user.connected = true;
        }
      });
      setUsers(updatedUsers);
    };

    const handleDisconnect = () => {
      const updatedUsers = [...users];
      updatedUsers.forEach((user) => {
        if (user.self) {
          user.connected = false;
        }
      });
      setUsers(updatedUsers);
    };

    const handleUsers = (receivedUsers) => {
      const updatedUsers = receivedUsers.map((user) => {
        user.messages.forEach((message) => {
          message.fromSelf = message.from === socket.userID;
        });
        return user;
      });

      for (const user of updatedUsers) {
        user.self = user.userID === socket.userID;
        initReactiveProperties(user);
      }

      const sortedUsers = [...updatedUsers].sort((a, b) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.username < b.username) return -1;
        return a.username > b.username ? 1 : 0;
      });

      setUsers(sortedUsers);
    };

    const handleUserConnected = (connectedUser) => {
      const updatedUsers = users.map((user) => {
        if (user.userID === connectedUser.userID) {
          user.connected = true;
        }
        return user;
      });
      setUsers(updatedUsers);
    };

    const handleUserDisconnected = (disconnectedUserId) => {
      const updatedUsers = users.map((user) => {
        if (user.userID === disconnectedUserId) {
          user.connected = false;
        }
        return user;
      });
      setUsers(updatedUsers);
    };

    const handlePrivateMessage = ({ content, from, to }) => {
      const updatedUsers = users.map((user) => {
        const fromSelf = socket.userID === from;
        if (user.userID === (fromSelf ? to : from)) {
          const updatedMessages = [...user.messages, { content, fromSelf }];
          user.messages = updatedMessages;
          if (user !== selectedUser) {
            user.hasNewMessages = true;
          }
        }
        return user;
      });
      setUsers(updatedUsers);
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("users", handleUsers);
    socket.on("user connected", handleUserConnected);
    socket.on("user disconnected", handleUserDisconnected);
    socket.on("private message", handlePrivateMessage);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("users", handleUsers);
      socket.off("user connected", handleUserConnected);
      socket.off("user disconnected", handleUserDisconnected);
      socket.off("private message", handlePrivateMessage);
    };
  }, [selectedUser, users]);

  return (
    <div className="flex flex-row h-50 scroll-auto">
      <div className="left-panel flex-1">
        {/* {users.map((user) => (
          <User
            key={user.userID}
            user={user}
            selected={selectedUser === user}
            onSelect={() => onSelectUser(user)}
          />
        ))} */}
      </div>
      {selectedUser && (
        <MessagePanel
          user={selectedUser}
          onInput={onMessage}
        />
      )}
    </div>
  );
}

export default Chat;
