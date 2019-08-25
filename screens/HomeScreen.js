import React from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";
import DoubleClick from "react-native-double-tap";
import Donations from "../components/Donations";
import * as Font from "expo-font";
import LogInScreen from "./LogInScreen";
import axios from "axios";
// export default function HomeScreen() {
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    fontLoaded: false,
    charitySelected: "Sick Kids"
  };

  onCharitySelect = charity => {
    this.setState({
      charitySelected: charity
    });
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Butler-Light": require("../assets/fonts/Butler_Light.otf")
    });

    axios
      .get("http://localhost:4000/i/fame")
      .then(res => console.log("BITCH LOOK HERE, BITCH", res));

    this.setState({ fontLoaded: true });
    this.props.navigation.push("LogIn");
  }

  render() {
    return (
      <Container>
        <TitleBar>
          {this.state.fontLoaded ? (
            <TitleText
              style={{ fontWeight: "bold", fontFamily: "Butler-Light" }}
            >
              Give<Text style={{ color: "#ffd36f", fontSize: 70 }}>.</Text>
            </TitleText>
          ) : null}
          <Coin source={require("../assets/icon.png")} />
        </TitleBar>
        <Given>
          <Col>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "100",
                textAlign: "left",
                fontFamily: "Avenir"
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
                fontWeight: "100",
                textAlign: "right",
                marginRight: 40,
                fontFamily: "Avenir"
              }}
            >
              Given in Total
            </Text>
            <Text
              style={{
                marginRight: 40,
                fontWeight: "bold",
                fontSize: 40,
                fontFamily: "Avenir"
              }}
            >
              $750
            </Text>
          </Col>
        </Given>
        {this.state.fontLoaded ? (
          <Text
            style={{
              marginTop: 70,
              marginLeft: 40,
              fontSize: 30,
              fontWeight: "normal",
              fontFamily: "Butler-Light"
            }}
          >
            Donate To
          </Text>
        ) : null}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ImageContainer style={{ marginTop: 40 }}>
            {donations.map((donation, index) => (
              <DoubleClick
                key={index}
                singleTap={() => {
                  this.onCharitySelect(donation.caption);
                }}
                doubleTap={() => {
                  this.props.navigation.push("Charity", {
                    Charity: donation
                  });
                }}
              >
                <Donations
                  image={donation.image}
                  caption={donation.caption}
                  selected={this.state.charitySelected}
                />
              </DoubleClick>
            ))}
          </ImageContainer>
        </ScrollView>
      </Container>
    );
  }
}

export default HomeScreen;
const Coin = styled.Image`
  position: absolute;
  top: -52;
  right: -46;
`;
const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const TitleBar = styled.View`
  margin-top: 90px
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
    charityTitle: "Give to Pure Water",
    textOne:
      "WaterAid Canada is pleased to announce that it has been accredited under Imagine Canada's national Standards Program. With this achievement, we join a growing community of more than 230 organizations dedicated to operational excellence.",
    textTwo:
      "The Standards Program is a Canada-wide set of shared standards for charities and nonprofits designed to strengthen practices in five fundamental areas: board governance; financial accountability and transparency; fundraising; staff management; and volunteer involvement.",
    textThree:
      "Less than 1% of Canada's 80,000+ charities are currently accredited by this rigorous accreditation program – this demonstrates WaterAid Canada's deep commitment to operational excellence and earning the trust of the Canadian public as we seek to advance our vision of a world where everyone everywhere has access to clean water, decent toilets and hygiene."
  },
  {
    image: require("../assets/campfire.png"),
    caption: "Homeless",
    charityTitle: "Give to the Homeless",
    textOne:
      "The Salvation Army is an international Christian organization that began its work in Canada in 1882 and has grown to become one of the largest non-governmental direct provider of social services in the country. The Salvation Army gives hope and support to vulnerable people today and everyday in 400 communities across Canada and more than 130 countries around the world.",
    textTwo:
      "The Salvation Army offers practical assistance for children and families, often tending to the basic necessities of life, provides shelter for homeless people and rehabilitation for people who have lost control of their lives to an addiction.",
    textThree:
      "When you give to The Salvation Army, you are investing in the future of marginalized and overlooked people in your community."
  },
  {
    image: require("../assets/dreamer.png"),
    caption: "Enviornment",
    charityTitle: "Give to the Enviornment",
    textOne:
      "Recycle Rebuild empowers communities to recycle waste into affordable, high-quality building materials, whilst providing an immediate source of income for those affected by natural disasters.",
    textTwo:
      "We are a nonprofit organisation made up of a passionate group of individuals. We are Architects, Designers, Journalists, Photographers and most importantly Humanitarians.",
    textThree:
      "We care deeply about the environment and how humanity lives within it. Using the power of design and our ingenuity, we actively look for problems in the waste stream and design solutions that better the community."
  }
];
