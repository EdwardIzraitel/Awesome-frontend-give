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

export default class ProfileScreen extends React.Component {
  state = {
    selected: "Day",
    moneyGiven: personalGivenData["Day"]
  };

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
          <NameText>
            Hello, <Colored>Jacob</Colored>
          </NameText>
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
            <TitleText style={{ textAlign: "left" }}>Your Cards</TitleText>
            <TouchableOpacity></TouchableOpacity>
          </SectionTitle>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CharityCard
              cardholderName="Jacob Tremblay"
              cardNumber="****  ****  ****  1369"
              cardExp="08/22"
            />
          </ScrollView>
          {/* </AccountCards> */}
        </AccountCardsContainer>
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

const TitleText = styled.Text`
  font-size: 30px;
`;

// --- TEXT ---
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
