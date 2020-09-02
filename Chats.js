import React from 'react';
import Chat from './Chat';
import './Chats.css'

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Mark"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Elon"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Kishor"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Palkhi"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Brian"
        message="Yo whats up!"
        timestamp="40 seconds ago"
        profilePic="..."
      />
    </div>
  )
}

export default Chats
