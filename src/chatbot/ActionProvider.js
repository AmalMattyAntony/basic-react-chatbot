import React from 'react';
import  {query_api}  from './chatbotCall';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleMessage = (msg) => {
    query_api({
      "inputs": {
        "past_user_inputs": [],
        "generated_responses": [],
        "text": msg
      }
    }).then((response) => {
      console.log(JSON.stringify(response));
      const botMessage = createChatBotMessage(response.generated_text);

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: 'dogPicture',
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleDog,
            handleMessage
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;