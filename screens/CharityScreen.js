import React from "react";
import styled from "styled-components";
import {
  Button,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar
} from "react-native";
import { Icon } from "expo";

const screenWidth = Dimensions.get("window").width;
class CharityScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnMount() {
    StatusBar.setBarStyle("dark-content", true);
  }
  render() {
    const { navigation } = this.props;
    const charity = navigation.getParam("Charity");
    return (
      <Container>
        <StatusBar hidden />
        <SafeAreaView style={{ alignItems: "center" }}>
          <View style={{ width: screenWidth }}>
            <Image source={charity.image} />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{ position: "absolute", top: 280, right: 170 }}
          >
            <CloseView>
              {/* <Icon.Ionicons
                name="ios-close"
                size={36}
                color="#FFD36F"
                style={{ marginTop: 4 }}
              /> */}
            </CloseView>
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Wrapper>
              <Text>{charity.charityTitle}</Text>

              <TextParagraph>{charity.textOne}</TextParagraph>
              <TextParagraph>{charity.textTwo}</TextParagraph>
            </Wrapper>
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
              <BtnText>Give More</BtnText>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

export default CharityScreen;

const Container = styled.View`
  align-items: center;
`;

const Text = styled.Text`
  font-size: 40px;
  font-weight: normal;
  margin-top: 20px;
`;
const View = styled.View`
  height: 270px;
  margin-top: 10px;
`;
const Image = styled.Image`
  height: 100%;
  width: 100%;
`;
const TextParagraph = styled.Text`
  width: 295px;
  font-size: 18px;
  margin-top: 10px;
  font-weight: 100;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
const CloseView = styled.View`
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 22.5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.View``;
