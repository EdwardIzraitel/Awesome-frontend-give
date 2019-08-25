import React from "react";
import styled from "styled-components";
import { Button, TouchableOpacity, View, Switch, Image } from "react-native";
import * as Font from "expo-font";
export default class SettingsScreen extends React.Component {
  state = {
    value: false,
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Butler-Light": require("../assets/fonts/Butler_Light.otf")
    });

    this.setState({ fontLoaded: true });
  }

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ value: value });
    //state changes according to switch
    //which will result in re-render the text
  };

  render() {
    return (
      <Container>
        <TitleBar>
          {this.state.fontLoaded ? (
            <Title style={{ fontFamily: "Butler-Light" }}>Settings</Title>
          ) : null}
          <Image
            source={require("../assets/icon.png")}
            style={{ position: "absolute", top: -62, right: -46 }}
          />
        </TitleBar>
        <NameContainer>
          <ViewText style={{ marginTop: 0 }}>
            <Name>Name</Name>
            <TextName>Parth Patel</TextName>
          </ViewText>
          <ViewText>
            <Name>Email</Name>
            <TextName>Edward.Izrai@hotmail.com</TextName>
          </ViewText>
          <ViewText>
            <Name>Password</Name>
            <TextName>***************</TextName>
          </ViewText>
          <ViewText>
            <Name>Limit Monthly Transactions</Name>
          </ViewText>
        </NameContainer>
        <AlertsContainer>
          <TextName style={{ paddingTop: 0 }}>Email Notifications</TextName>
          <View style={{ flex: 1, flexDirection: "row" }}></View>

          <Switch
            style={{ marginRight: 40 }}
            onValueChange={this.toggleSwitch}
            value={this.state.value}
          />
        </AlertsContainer>
        <BtnContainer>
          <TouchableOpacity
            style={{
              width: 280,
              height: 45,
              borderRadius: 22,
              backgroundColor: "#FFD36F",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30
            }}
          >
            <BtnText>Log Out</BtnText>
          </TouchableOpacity>
        </BtnContainer>
      </Container>
    );
  }
}
SettingsScreen.navigationOptions = {
  header: null
};

const Container = styled.View`
  margin-left: 40px;
`;
const TitleBar = styled.View`
  margin-top: 100px;
`;
const Title = styled.Text`
  font-size: 40px;
`;
const NameContainer = styled.View`
  margin-top: 40px;
`;
const TextName = styled.Text`
  font-size: 25px;
  color: #ffd36f;
  padding-top: 10px;
`;
const Name = styled.Text`
  font-weight: 100;
  font-family: "Avenir";
`;

const AlertsContainer = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
`;
const BtnContainer = styled.View``;
const BtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
const ViewText = styled.View`
  margin-top: 30px;
`;
