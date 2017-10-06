import React, { Component } from 'react'
import styles from './Styles/LoginFormStyle'
import { Text, TextInput, View } from 'react-native'
import RoundedButton from './RoundedButton'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  login = () => {
    alert('Login')
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Username"
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput
          style={{height: 40}}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
        />
      <RoundedButton onPress={this.login}>Login</RoundedButton>
      </View>
    );
  }
}
