import React from "react";
import styled from "styled-components";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Animated,
  Dimensions
} from "react-native";
import firebase from "./Firebase";

const screenHeight = Dimensions.get("window").height;

class ModalLogin extends React.Component {
  state = {
    email: "",
    password: "",
    isSuccessful: false,
    isLoading: false
  };

  componentDidMount() {}

  componentDidUpdate() {}

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
          // console.log(response);

          this.setState({ isLoading: false });

          if (response) {
            this.setState({ isSuccessful: true });

            // this.storeName(response.user.email);
            this.props.updateName(response.user.email);
            setTimeout(() => {
              this.props.closeLogin();
              this.setState({ isSuccessful: false });
            }, 1000);
          }
        });
    });
  };

  focusEmail = () => {
    this.setState({
      iconEmail: require("../assets/icon-email-animated.gif"),
      iconPassword: require("../assets/icon-password.png")
    });
  };
  focusPassword = () => {
    this.setState({
      iconPassword: require("../assets/icon-password-animated.gif"),
      iconEmail: require("../assets/icon-email.png")
    });
  };

  tapBackground = () => {
    Keyboard.dismiss();
    this.setState({
      iconEmail: require("../assets/icon-email.png"),
      iconPassword: require("../assets/icon-password.png")
    });
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <TouchableWithoutFeedback
          onPress={this.tapBackground}
        ></TouchableWithoutFeedback>
        <AnimatedModal
          style={{
            transform: [
              { scale: this.state.scale },
              { translateY: this.state.translateY }
            ]
          }}
        >
          {/* <Logo source={require("../assets/logo-dc.png")} /> */}
          <Text>{"Start Learning. Access Pro Content.".toUpperCase()}</Text>
          <TextInput
            onChangeText={email => this.setState({ email })}
            placeholder="Email"
            keyboardType="email-address"
            onFocus={this.focusEmail}
          />
          <TextInput
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            secureTextEntry={true}
            onFocus={this.focusPassword}
          />
          <IconEmail source={this.state.iconEmail} />
          <IconPassword source={this.state.iconPassword} />
          <TouchableOpacity onPress={this.handleLogin}>
            <Button style={{ elevation: 10 }}>
              <ButtonText>{"Log In".toUpperCase()}</ButtonText>
            </Button>
          </TouchableOpacity>
        </AnimatedModal>
      </AnimatedContainer>
    );
  }
}

export default ModalLogin;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  justify-content: center;
  align-items: center;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Modal = styled.View`
  width: 290px;
  height: 350px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;
const AnimatedModal = Animated.createAnimatedComponent(Modal);
const Logo = styled.Image`
  width: 44px;
  height: 44px;
  margin-top: 40px;
`;
const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 160px;
  text-align: center;
  color: #b8bece;
`;
const TextInput = styled.TextInput`
  border: 1px solid #dbdfea;
  width: 250px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #3c4560;
  margin-top: 20px;
  padding-left: 44px;
`;
const Button = styled.View`
  background: #5263ff;
  width: 250px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 10px 20px #c2cbff;
  margin-top: 20px;
`;
const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;

const IconEmail = styled.Image`
  width: 24px;
  height: 16px;
  position: absolute;
  top: 171px;
  left: 31px;
`;

const IconPassword = styled.Image`
  width: 18px;
  height: 24px;
  position: absolute;
  top: 231px;
  left: 31px;
`;
