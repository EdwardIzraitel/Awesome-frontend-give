// import React from "react";
// import { ScrollView, StyleSheet } from "react-native";
// import { ExpoLinksView } from "@expo/samples";

// export default function ProfileScreen() {
//   return (
//     <ScrollView style={styles.container}>
//       {/**
//        * Go ahead and delete ExpoLinksView and replace it with your content;
//        * we just wanted to provide you with some helpful links.
//        */}
//       <ExpoLinksView />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: "#fff"
//   }
import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components";
import CharityCard from "../components/CharityCard";
// import { Icon } from "expo";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

export default class ProfileScreen extends React.Component {
  state = {
    selected: "Day",
    moneyGiven: personalGivenData["Day"],
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Butler-Light": require("../assets/fonts/Butler_Light.otf")
    });

    this.setState({ fontLoaded: true });
  }

  changeSelected = category => {
    this.setState({
      selected: category,
      moneyGiven: personalGivenData[`${category}`]
    });
  };

  render() {
    return (
      <Container>
        <TitleBar>
          {this.state.fontLoaded ? (
            <NameText style={{ fontFamily: "Butler-Light" }}>
              Hello, <Colored>Jacob</Colored>
            </NameText>
          ) : null}
        </TitleBar>
        <PersonalPayView>
          <Categories>
            <TouchableOpacity onPress={() => this.changeSelected("Day")}>
              <Category
                style={
                  this.state.selected == "Day"
                    ? { color: "#ffd36f", fontWeight: "bold" }
                    : { color: "black" }
                }
              >
                Day
              </Category>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeSelected("Week")}>
              <Category
                style={
                  this.state.selected == "Week"
                    ? { color: "#ffd36f", fontWeight: "bold" }
                    : { color: "black" }
                }
              >
                Week
              </Category>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeSelected("Month")}>
              <Category
                style={
                  this.state.selected == "Month"
                    ? { color: "#ffd36f", fontWeight: "bold" }
                    : { color: "black" }
                }
              >
                Month
              </Category>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.changeSelected("All Time")}>
              <Category
                style={
                  this.state.selected == "All Time"
                    ? { color: "#ffd36f", fontWeight: "bold" }
                    : { color: "black" }
                }
              >
                All Time
              </Category>
            </TouchableOpacity>
          </Categories>
          <MoneyGiven>${this.state.moneyGiven}</MoneyGiven>
        </PersonalPayView>

        <AccountCardsContainer>
          <SectionTitle>
            {this.state.fontLoaded ? (
              <TitleText
                style={{ textAlign: "left", fontFamily: "Butler-Light" }}
              >
                Your Cards
              </TitleText>
            ) : null}
            <TouchableOpacity>
              <Ionicons
                name="ios-add-circle-outline"
                size={35}
                color="#ffd36f"
                style={{ paddingLeft: 110 }}
              />
            </TouchableOpacity>
          </SectionTitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CharityCard
              cardholderName="Jacob Tremblay"
              cardNumber="**** **** **** 1369"
              cardExp="08/22"
              color="#120076"
            />
          </ScrollView>
          {/* </AccountCards> */}
        </AccountCardsContainer>

        <TouchableOpacity
          style={{
            width: 295,
            height: 45,
            borderRadius: 22,
            backgroundColor: "#FFD36F",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 60,
            marginLeft: 40
          }}
        >
          <BtnText>Suggest a Charity</BtnText>
        </TouchableOpacity>
      </Container>
    );
  }
}
ProfileScreen.navigationOptions = {
  header: null
};

// --- VIEWS ---

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const TitleBar = styled.View`
  margin-top: 100px;
  margin-left: 40px;
`;
const NameText = styled.Text`
  font-size: 40px;
  font-weight: 300;
`;

const Colored = styled.Text`
  color: #ffd36f;
`;

const PersonalPayView = styled.View`
  margin-top: 30px;
  margin-left: 40px;
`;

const Categories = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  right: 26px;
`;

const Category = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: 100;
  font-family: "Avenir";
`;

const AccountCardsContainer = styled.View``;

const SectionTitle = styled.View`
  flex-direction: row;
  margin-left: 40px;
  margin-top: 40px;
`;

const AccountCards = styled.View`
  margin-left: 40px;
  margin-top: 40px;
`;

// const AccountCard = styled.View`
//   width: 295px;
//   height: 160px;
//   background: #120076;
//   border-radius: 30px;
//   align-items: center;
//   padding-right: 10px;
//   margin-left: 40px;
//   margin-top: 40px;
// `

// const CardNumber = styled.Text`
//   color: white;
//   margin-top: 35px;
//   font-size: 20px;
// `

// const CardholderName = styled.Text`
//   color: white;
//   font-size: 15px;
//   margin-right: 10px;
// `

// const CardExp = styled.Text`
//   color: white;
//   font-size: 15px;
//   margin-left: 10px;
// `

// const CardInfo = styled.View`
//   flex-direction: row;
//   margin-top: 50px;
// `

const BtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const TitleText = styled.Text`
  font-size: 30px;
`;

const MoneyGiven = styled.Text`
  margin-top: 10px;
  font-size: 40px;
  font-weight: bold;
`;

const personalGivenData = {
  Day: "2",
  Week: "18",
  Month: "87",
  "All Time": "157"
};
