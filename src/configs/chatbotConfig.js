import { createChatBotMessage, createClientMessage } from 'react-chatbot-kit';
import DogPicture from '../components/DogPicture.js'

const botName = 'Chatbot';
const message = createClientMessage('Nicee');
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`),message],
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;