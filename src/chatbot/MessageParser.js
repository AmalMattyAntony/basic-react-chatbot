// in MessageParser.jsx
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // if message starts with special/dog
    
    if (message.toLowerCase().startsWith('special') && message.includes('dog')) {
      actions.handleDog();
    }

    else {
      actions.handleMessage(message);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;