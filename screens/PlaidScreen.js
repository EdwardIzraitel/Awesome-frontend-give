import React, { Component } from "react";
import { WebView, Text, View, StyleSheet } from "react-native";
import { Constants } from "expo";
import axios from "axios";

const PLAID_PUBLIC_KEY = "1338f85b8a74fef429295b5e23ae6f";
const PLAID_ENV = "sandbox";
const PLAID_PRODUCTS = "auth,transactions";

//PLAID_CLIENT_ID=5d5edc318fd6470012c1ce04 \
//PLAID_SECRET=cb6e745ba01565ddd48a4a487e7cc3 \
//PLAID_PUBLIC_KEY=1338f85b8a74fef429295b5e23ae6f \

export default class Plaid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      data: {}
    };
  }

  sendPublicToken = () => {
    console.log("TRIGGERED");
    // axios
    //   .get("http://10.145.66.239:4000/i/fame")
    //   .then(res => console.log("BITCH LOOK HERE, BITCH", res));
    axios
      .post("http://100.64.213.183:4000/sendToken", {
        token: this.state.data.metadata
      })
      .then(response => {
        console.log("HELLO HIIIIIIIII", response.data);
        axios
          .get("http://100.64.213.183:4000/getUserDonations")
          .then(response =>
            console.log("PLEASE WORK AND  DONT MAKE DADDY CRY", response.data)
          );
      });
    // fetch("localhost:4000/sendToken", {
    //   method: "post",
    //   body: JSON.stringify(this.state.data.metadata.public_token)
    // }).then(function(response) {
    //   return response.json();
    // });
  };

  render() {
    return this.state.data.action &&
      this.state.data.action.indexOf("::connected") !== -1
      ? this.renderDetails()
      : this.renderLogin();
  }
  renderLogin() {
    return (
      <WebView
        source={{
          uri: `https://cdn.plaid.com/link/v2/stable/link.html?key=${PLAID_PUBLIC_KEY}&env=${PLAID_ENV}&product=${PLAID_PRODUCTS}&clientName=Give&isWebView=true&isMobile=true&webhook=http://google.com`
        }}
        onMessage={e => this.onMessage(e)}
      />
    );
  }

  renderDetails() {
    return (
      <View style={styles.container}>
        <Text>Institution: {this.state.data.metadata.institution.name}</Text>
        <Text>
          Institution ID: {this.state.data.metadata.institution.institution_id}
        </Text>
        <Text>Token: {this.state.data.metadata.public_token}</Text>
        {console.log(this.state.data.metadata)}
        {this.sendPublicToken()}
      </View>
    );
  }

  onMessage(e) {
    /*
      Response example for success

      {
        "action": "plaid_link-undefined::connected",
        "metadata": {
          "account": {
            "id": null,
            "name": null
          },
          "account_id": null,
          "public_token": "public-sandbox-e697e666-9ac2-4538-b152-7e56a4e59365",
          "institution": {
            "name": "Chase",
            "institution_id": "ins_3"
          }
        }
      }
    */

    console.log("LOOK, this is important", e.nativeEvent);

    this.setState({
      data: JSON.parse(e.nativeEvent.data)
    });
    // this.sendPublicToken();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 45,
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  }
});
