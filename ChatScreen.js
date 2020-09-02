import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

const ChatScreen = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image: '...',
      message: 'whats up'
    },
    {
      name: 'Ellen',
      image: '...',
      message: 'Hows it going?'
    },
    {
      message: 'yeahh cool.'
    },
    {
      name: 'Ellen',
      image: '...',
      message: 'see you then.:)'
    },
    {
      message: 'byee.'
    },
  ])

  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  }
  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>
      {messages.map(message => (
        message.name ? (
          <div className="chatScreen__message">
            <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
            <p className="chatScreen__text">
              {message.message}
            </p>
          </div>
        ) : (
            <div className="chatScreen__message">
              <p className="chatScreen__textUser">
                {message.message}
              </p>
            </div>
          )
      ))}
      <div >
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message..."
            type="text">
          </input>
          <button
            onClick={handleSend}
            type="submit"
            className="chatScreen_inputButton"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatScreen
