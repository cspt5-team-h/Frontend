import React, { Component } from "react";
import "./chat.css";
import MessageForm from "./messageForm";
import Messages from "./message";
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";
import Title from "./header";
const instanceLocator = "v1:us1:60a15be3-c5d7-4ded-8ca8-69643b431c90";
const testToken =
  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/60a15be3-c5d7-4ded-8ca8-69643b431c90/token";
const userId = "steven999";
const roomId = "0b4b9d42-2002-4b3e-afb2-2c7fe70356e2";
class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
    this.sendMessage = this.sendMessage.bind(this);
  }
  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: instanceLocator,
      userId: userId,
      tokenProvider: new TokenProvider({
        url: testToken
      })
    });
    chatManager.connect().then(currentUser => {
      this.setState({ currentUser: currentUser });
      return currentUser.subscribeToRoomMultipart({
        roomId: roomId,
        hooks: {
          onMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        }
      });
    });
  }
  sendMessage(text) {
    console.log(this.state);
    this.state.currentUser.sendMessage({
      text: text,
      roomId: roomId
    });
  }
  render() {
    console.log(this.state);
    return (
      <div className="app">
        <div className="chat">
<<<<<<< HEAD
          <Title/>
=======
          <Title />
>>>>>>> cb8ea4a6686a1996b9309904813595eff7e20731
          <Messages messages={this.state.messages} />
          <MessageForm sendMessage={this.sendMessage} />
        </div>
      </div>
    );
  }
}
export default Chat;
