import React from "react";
import styled from "styled-components";
import * as Font from "expo-font";

class Donations extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Butler-Light": require("../assets/fonts/Butler_Light.otf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <Container>
          <Cover>
            <Image source={this.props.image} resizeMode="contain" />
          </Cover>

          <Caption
            style={
              this.props.caption == this.props.selected
                ? { fontFamily: "Avenir", fontWeight: "bold" }
                : { fontFamily: "Butler-Light" }
            }
          >
            {this.props.caption}
          </Caption>
        </Container>
      );
    } else {
      return null;
    }
  }
}

export default Donations;

const Container = styled.View`
  align-items: center;
  padding-right: 25px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const Caption = styled.Text`
  margin-top: 10px;
  font-size: 22px;
`;

const Cover = styled.View`
  width: 180px;
  height: 220px;
  background: white;
  /* overflow: hidden; */
  /* border-top-left-radius: 14px;
  border-top-right-radius: 14px; */
  overflow: hidden;
  border-radius: 14px;
  /* padding-right: 25px; */
  /* justify-content: space-evenly; */
`;
