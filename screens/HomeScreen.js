import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import DoubleClick from "react-native-double-tap";
import Donations from "../components/Donations";
import Login from "../components/Login";
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        {/* <Login /> */}
        <TitleBar>
          <TitleText style={{ fontWeight: "bold" }}>Give</TitleText>
        </TitleBar>
        <Given>
          <Col>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "normal",
                textAlign: "left"
              }}
            >
              Given Today
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 40 }}>$20</Text>
          </Col>
          <Col>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "normal",
                textAlign: "right",
                marginRight: 40
              }}
            >
              Given in Total
            </Text>
            <Text style={{ marginRight: 40, fontWeight: "bold", fontSize: 40 }}>
              $750
            </Text>
          </Col>
        </Given>
        <Text
          style={{
            marginTop: 70,
            marginLeft: 40,
            fontSize: 30,
            fontWeight: "normal"
          }}
        >
          Donate To
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ImageContainer style={{ marginTop: 40 }}>
            {donations.map((donation, index) => (
              <DoubleClick
                key={index}
                singleTap={() => {
                  console.log("single tap");
                }}
                doubleTap={() => {
                  this.props.navigation.push("Charity", {
                    Charity: donation
                  });
                }}
              >
                <Donations image={donation.image} caption={donation.caption} />
              </DoubleClick>
            ))}
          </ImageContainer>
        </ScrollView>
      </Container>
    );
  }
}

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const TitleBar = styled.View`
  margin-top: 90px;
  margin-left: 40px;
`;
const TitleText = styled.Text`
  font-size: 56px;
  font-weight: 100;
`;
const Given = styled.View`
  margin-top: 40px;
  margin-left: 40px;
  justify-content: space-between;
  flex-direction: row;
`;
const Text = styled.Text``;
const Col = styled.View`
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 40px;
`;
const Image = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const donations = [
  {
    image: require("../assets/sick_kids.png"),
    caption: "Sick Kids",
    charityTitle: "Give to Sick Kids",
    textOne:
      "The Hospital for Sick Children (SickKids), affiliated with the University of Toronto, is Canada's most research-intensive hospital and the largest centre dedicated to improving children's health in the country. As innovators in child health, SickKids improves the health of children by integrating care, research and teaching.",
    textTwo:
      "With a staff that includes professionals from all disciplines of health care and research, SickKids provides the best in complex and specialized care by creating scientific and clinical advancements, sharing knowledge and expertise and championing the development of an accessible, comprehensive and sustainable child health system."
  },
  {
    image: require("../assets/drink.png"),
    caption: "Pure Water",
    charityTitle: "Give to Pure Water"
  },
  {
    image: require("../assets/campfire.png"),
    caption: "Homeless",
    charityTitle: "Give to the Homeless"
  },
  {
    image: require("../assets/dreamer.png"),
    caption: "Enviornment",
    charityTitle: "Give to the Enviornment"
  }
];
