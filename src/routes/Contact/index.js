import React from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, Linking, Alert } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { WebBrowser } from 'expo'
import qs from 'qs'
import { translate } from 'react-i18next'

class Contact extends React.Component {
  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('feedback')
  })

  state = {
    name: '',
    message: '',
  }

  inputs = {}

  focusNextField = (id) => {
    this.inputs[id].focus();
  }

  updateFormInput= (type, value) => {
    this.setState({ [type]: value })
  }

  sendMessage = () => {
    const { name, email, message } = this.state
    const url = 'mailto:' + encodeURIComponent('info@attentialluppolo.com')
    const data = {
      subject: 'message sent from attentialluppolo mobile app',
      body: `Name: ${name}\n\nMessage:\n${message}`
    }

    Linking.canOpenURL('mailto:').then(res => {
      if (!res) {
        Alert.alert('Error', 'Email app not found!', [{text: 'OK'}])
      } else {
        const query = qs.stringify(data)
        Linking.openURL(`${url}?${query}`)
        this.setState({
          name: '',
          message: '',
        })
      }
    })

  }

  render() {
    const { t } = this.props
    return (
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={80} style={[{flex: 1}, styles.bgColor]}>
        <ScrollView
          contentContainerStyle={styles.bgColor}
          removeClippedSubviews={false}
          keyboardShouldPersistTaps={'always'}
        >
          <FormLabel>{t('name')}</FormLabel>
          <FormInput
            value={this.state.name}
            onChangeText={(text) => this.updateFormInput('name', text)}
            underlineColorAndroid='#D0CCD0'
            ref={ input => { this.inputs['one'] = input } }
            onSubmitEditing={ () => { this.focusNextField('two') } }
            blurOnSubmit={ false }
            returnKeyType={ 'next' }
          />

          <FormLabel>{t('message')}</FormLabel>
          <FormInput
            value={this.state.message}
            onChangeText={(text) => this.updateFormInput('message', text)}
            underlineColorAndroid='#D0CCD0'
            ref={ input => { this.inputs['two'] = input } }
            returnKeyType={ 'done' }
          />

          <Button
            onPress={this.sendMessage}
            title={t('submit')}
            color={'#272727'}
            large
            backgroundColor='#FFD700'
            buttonStyle={styles.button}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export default translate('contact')(Contact)

const styles = StyleSheet.create({
  bgColor: { backgroundColor: '#272727' },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginLeft: 20,
    color: '#FBFCFF',
    fontFamily: 'AlegreyaSansSC-Light',
  },
  button: {
    marginTop: 40,
  }
})
