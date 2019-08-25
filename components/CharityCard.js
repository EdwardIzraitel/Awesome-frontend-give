import React, { Component } from "react";
import styled from "styled-components";
import * as Font from "expo-font";

class CharityCard extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <AccountCard style={{ backgroundColor: this.props.color }}>
        {this.state.fontLoaded ? (
          <>
            <CardNumber style={{ fontFamily: "SpaceMono-Regular" }}>
              {this.props.cardNumber}
            </CardNumber>
            <CardInfo>
              <CardholderName style={{ fontFamily: "SpaceMono-Regular" }}>
                {this.props.cardholderName}
              </CardholderName>
              <CardExp style={{ fontFamily: "SpaceMono-Regular" }}>
                {this.props.cardExp}
              </CardExp>
            </CardInfo>
          </>
        ) : null}
      </AccountCard>
    );
  }
}

export default CharityCard;

const AccountCard = styled.View`
  width: 295px;
  height: 160px;
  border-radius: 30px;
  align-items: center;
  background: #120076;
  padding-right: 10px;
  margin-left: 40px;
  margin-top: 40px;
`;

const CardNumber = styled.Text`
  color: white;
  margin-top: 35px;
  font-size: 20px;
`;

const CardholderName = styled.Text`
  color: white;
  font-size: 15px;
  margin-right: 10px;
`;

const CardExp = styled.Text`
  color: white;
  font-size: 15px;
  margin-left: 10px;
`;

const CardInfo = styled.View`
  flex-direction: row;
  margin-top: 50px;
`;

// const Container = styled.View`

// `

// const Cover = styled.View`
//     width: 180px;
//     height: 220px;
// `

// const Image = styled.Image`
//     width: 100%;
//     height: 100%;
// `

// const Text = styled.Text`
//     font-size: 15px;
// `
