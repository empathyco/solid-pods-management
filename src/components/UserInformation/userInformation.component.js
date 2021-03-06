import React, { Component } from "react";
import { ldflexService } from "../../services";
import Image from "./Image";
import { ImageContainer, ProfileName, Section } from "./userInformation.style";

class UserInformation extends Component {
  /**
   *
   * @param {title,webId} props
   */
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      chindren: props.chindren,
    };
    this.counter = 0;
  }

  async componentDidMount() {
    const webId = await ldflexService.getWebId();

    this.setState({ webId: webId });
  }
  componentWillReceiveProps({ title, children }) {
    this.setState({ ...this.state, title, children });
  }

  getProfileName() {
    let name = this.state.title;
    if (name === "undefined") name = undefined;
    if (name) {
      let splitted = "";
      if (name) splitted = name.split(" ");

      return (
        <ProfileName>
          {splitted.map((word, index) => (
            <p key={index}>{word}</p>
          ))}
        </ProfileName>
      );
    } else {
      return;
    }
  }

  render() {
    const { webId } = this.state;

    return (
      <Section>
        <ImageContainer>
          <Image
            {...{
              webId,
            }}
          />
        </ImageContainer>

        {this.getProfileName()}

        {this.state.children}
      </Section>
    );
  }
}

export default UserInformation;
