import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Modal } from 'react-native'
import styles from './Styles/LoginButtonStyle'
import RoundedButton from './RoundedButton'
import LoginForm from './LoginForm';

export default class LoginButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    return (
      <View>
        <RoundedButton onPress={this.toggleModal}>
          Login
        </RoundedButton>
        <Modal
          visible={this.state.showModal}
          onRequestClose={this.toggleModal}>
          <LoginForm />
        </Modal>
      </View>
    )
  }
}
