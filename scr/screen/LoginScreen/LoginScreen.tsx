/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import { StackActions, NavigationActions } from "react-navigation";

import AlertSimpleOK from "../../comp/alert/AlertSimpleOK";

export default class LoginScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      arr_PopData: []
    };
  }

  //TODO: func
  click_Login() {
    this.setState({
      arr_PopData: [
        {
          status: true,
          theme: "success",
          icon: "smile",
          title: "Success",
          subtitle: "Thanks bro..."
        }
      ]
    });
  }

  render() {  
    return (
      <View style={styles.container}>
        <Button onPress={() => this.click_Login()} title="Login" />
        <AlertSimpleOK
          data={this.state.arr_PopData}
          click_Ok={(status: boolean) => this.setState({arr_PopData:[{status:false}]})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
