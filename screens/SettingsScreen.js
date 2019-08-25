// import React from 'react';
// import { ExpoConfigView } from '@expo/samples';

// export default function SettingsScreen() {
//   /**
//    * Go ahead and delete ExpoConfigView and replace it with your content;
//    * we just wanted to give you a quick view of your config.
//    */
//   return <ExpoConfigView />;
// }

// SettingsScreen.navigationOptions = {
//   title: 'app.json',
// };
import React from "react";
import styled from "styled-components";
import { Button, TouchableOpacity, View, Switch } from "react-native";
// import Slider from "react-native-slider";
export default class SettingsScreen extends React.Component {
  state = {
    value: false
  };
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
          <Title>Settings</Title>
        </TitleBar>
        <NameContainer>
          <TextName>Name</TextName>
          <Name>Bbbby with that tool</Name>
        </NameContainer>
        <NameContainer>
          <EmailName>Email</EmailName>
          <Email>Edward.Izraital@hotmail.com</Email>
        </NameContainer>
        <NameContainer>
          <Password>Password</Password>
          <PasswordName>***************</PasswordName>
        </NameContainer>
        <NameContainer>
          <MonthlyText>Limit Monthly Transactions</MonthlyText>
          <View style={{ flex: 1, flexDirection: "row" }}></View>
        </NameContainer>
        <AlertsContainer>
          <AlertName>Email Notifications</AlertName>

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
  margin-top: 90px;
`;
const Title = styled.Text``;
const NameContainer = styled.View`
  margin-top: 30px;
`;
const TextName = styled.Text``;
const Name = styled.Text`
  padding-top: 15px;
`;
// const EmailContainer = styled.View``;
const EmailName = styled.Text``;
const Email = styled.Text`
  padding-top: 15px;
`;
// const PasswordContainer = styled.View``;
const Password = styled.Text``;
const PasswordName = styled.Text`
  padding-top: 15px;
`;
const MonthlyContainer = styled.View``;
const MonthlyText = styled.Text``;
const AlertsContainer = styled.View`
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-between;
`;
const AlertName = styled.Text``;
const BtnContainer = styled.View``;
const BtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
