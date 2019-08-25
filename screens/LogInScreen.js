import * as WebBrowser from "expo-web-browser";
import React from "react";
import styled from "styled-components";
import { ScrollView, TouchableOpacity, View, Alert } from "react-native";
import DoubleClick from "react-native-double-tap";
import { MonoText } from "../components/StyledText";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import firebase from "../components/Firebase";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    fontLoaded: false,
    isLoading: false,
    iconEmail: require("../assets/icon-email.png"),
    iconPassword: require("../assets/icon-password.png")
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Butler-Light": require("../assets/fonts/Butler_Light.otf")
    });
    this.setState({ fontLoaded: true });
  }
  componentWillUnmount() {
    // Alert.alert("Log in Successful");
  }
  handleLogin = () => {
    // console.log(this.state.email, this.state.password);

    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({ isLoading: false });

      const email = this.state.email;
      const password = this.state.password;

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
          Alert.alert("Error", error.message);
        })
        .then(response => {
          this.setState({ isLoading: false });

          if (response) {
            this.setState({ isSuccessful: true });

            //Alert.alert("Congrats", "You've logged successfully!");

            setTimeout(() => {
              this.setState({ isSuccessful: false });
            }, 1000);
            this.props.navigation.goBack();
          }
        });
    });
  };
  render() {
    return (
      <Container>
        <TitleBar>
          {this.state.fontLoaded ? (
            <View>
              <TitleText
                style={{ fontWeight: "bold", fontFamily: "Butler-Light" }}
              >
                Giving.
              </TitleText>

              <SubtitleText
                style={{ fontWeight: "bold", fontFamily: "Butler-Light" }}
              >
                Made{" "}
                <SubText style={{ fontFamily: "Butler-Light" }}>
                  $imple.
                </SubText>
              </SubtitleText>
            </View>
          ) : null}
        </TitleBar>
        <Info>
          <TextInput
            style={{ height: 40, fontSize: 18 }}
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.text}
          />
          <TextInput
            style={{ height: 40, fontSize: 18 }}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
            value={this.state.text}
          />
        </Info>
        <Signupbutton>
          <TouchableOpacity
            onPress={() => {
              this.handleLogin();
            }}
            style={{
              position: "absolute",
              top: -20,
              right: 235,
              marginRight: 40,
              zIndex: 100
            }}
          >
            <CloseView>
              <Ionicons
                name="ios-arrow-round-forward"
                size={30}
                color="white"
                style={{ marginTop: 4 }}
              />
            </CloseView>
          </TouchableOpacity>
        </Signupbutton>
        <Signup>
          <Prompt1>Sign Up</Prompt1>
          <Prompt2>Forgot Password?</Prompt2>
        </Signup>
        <Image source={require("../assets/blue.jpg")} />
      </Container>
    );
  }
}

Login.navigationOptions = {
  header: null
};

const Image = styled.Image`
  position: absolute;
  top: 380;
  left: 263;
`;

const CloseView = styled.View`
  width: 65px;
  height: 65px;
  background: #ffd36f;
  border-radius: 32.5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
  background-color: #fdfcff;
`;
const TitleBar = styled.View`
  margin-top: 150px;
  margin-left: 40px;
`;
const TitleText = styled.Text`
  font-size: 40px;
  font-weight: 100;
  color: #080034;
`;

const SubtitleText = styled.Text`
  font-size: 40px;
  font-weight: 100;
  color: #080034;
`;

const SubText = styled.Text`
  color: #ffd36f;
`;

const Info = styled.View`
  margin-left: 40px;
  margin-top: 80px;
`;

//const TextInput = styled.View``;

const Email = styled.Text`
  font-size: 22px;
  color: #a3a39b;
  padding-bottom: 20px;
`;

const Pass = styled.Text`
  font-size: 22px;
  color: #a3a39b;
`;

const Signupbutton = styled.View`
  margin-left: 40px;
  margin-top: 200px;
`;

const Signup = styled.View`
  margin-left: 40px;
  margin-top: 70px;
`;

const Prompt1 = styled.Text`
  font-size: 15px;
  color: #000;
  padding-bottom: 10px;
`;

const Prompt2 = styled.Text`
  font-size: 15px;
  color: #000;
`;
