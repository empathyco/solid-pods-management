import * as React from "react";
import { Component } from "react";
import { Chat } from "../../../models/chatModel";
import { Message } from "../../../models/message";
import { ChatPreview, ChatImage, ChatPreviewInfo } from "./chatPreview.style";
import { DateUtils } from "../../../../../utils/dateUtils";

type Props = {
  chat: Chat;
  handleChatClick: (id: string) => void;
  isSelected: boolean;
};
type State = {
  chat: Chat;
  isSelected: boolean;
};

export default class ChatPreviewComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { chat: mockChat, isSelected: props.isSelected };
  }

  componentWillReceiveProps(props: Props) {
    const { isSelected } = props;
    this.setState({ isSelected: isSelected });
  }
  render() {
    const { chat, isSelected } = this.state;
    const chatName = chat.getChatName();
    const lastMessage = chat.messages[chat.messages.length - 1];
    return (
      <ChatPreview
        className={isSelected ? "selected" : undefined}
        onClick={() => this.handleClick()}
      >
        <ChatImage>
          <img src={defaultProfilePhoto} alt="friend-photo" />
        </ChatImage>
        <ChatPreviewInfo>
          <h3>
            <p>{chatName}</p>
          </h3>
          <div className="last-message">
            <span className="tick">✔️</span>
            <p className="content">{lastMessage.content}</p>
            <p className="timestamp">
              {this.formatMessageTime(lastMessage.timestamp)}
            </p>
          </div>
        </ChatPreviewInfo>
      </ChatPreview>
    );
  }
  formatMessageTime(timestamp: number): React.ReactNode {
    let date = new Date(timestamp);
    return DateUtils.formatHH_MM(date);
  }
  handleClick = () => {
    this.props.handleChatClick(this.props.chat._id);
  };
}

const defaultProfilePhoto = "/img/icon/empty-profile.svg";

let me = {
  webdId: "https://javifake3.solid.community/profile/card#me",
  name: "Javier García",
  photo: undefined,
};
let mockChat = new Chat();
mockChat.chatMode = {
  type: "private",
  chatName: undefined,
};
mockChat.participants = [me];

let message = new Message();
message.timestamp = Date.now();
message.contentType = "text";
message.sender = me;
message.content = "Esto es un mensaje largo de ejemplo";
message.reads = [];
mockChat.messages = [message, message];