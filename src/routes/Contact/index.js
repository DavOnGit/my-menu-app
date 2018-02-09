import React from 'react'
import { TextInput, Text, Image, KeyboardAvoidingView, View, ScrollView, StyleSheet, Linking, Alert, Dimensions } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { WebBrowser } from 'expo'
import qs from 'qs'

const { width } = Dimensions.get('window')

export default class Contact extends React.Component {
  static navigationOptions = { title: 'Contact Us' }

  state = {
    name: '',
    email: '',
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
      subject: 'test-subject',
      body: `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
    }

    Linking.canOpenURL('mailto:').then(res => {
      if (!res) {
        Alert.alert('Error', 'Email app not found!', [{text: 'OK'}])
      } else {
        const query = qs.stringify(data)
        Linking.openURL(`${url}?${query}`)
        this.setState({
          name: '',
          email: '',
          message: '',
        })
      }
    })

  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={80} style={[{flex: 1}, styles.bgColor]}>
        <ScrollView
          contentContainerStyle={styles.bgColor}
          removeClippedSubviews={false}
          keyboardShouldPersistTaps={'always'}
        >
          {/* <View style={styles.container}> */}
            {/* <Text style={styles.title}>Contact Us</Text> */}

            <FormLabel>Name</FormLabel>
            <FormInput
              value={this.state.name}
              onChangeText={(text) => this.updateFormInput('name', text)}
              underlineColorAndroid='#D0CCD0'
              ref={ input => { this.inputs['one'] = input } }
              onSubmitEditing={ () => { this.focusNextField('two') } }
              blurOnSubmit={ false }
              returnKeyType={ "next" }
            />

            <FormLabel>Email</FormLabel>
            <FormInput
              value={this.state.email}
              onChangeText={(text) => this.updateFormInput('email', text)}
              underlineColorAndroid='#D0CCD0'
              ref={ input => { this.inputs['two'] = input } }
              onSubmitEditing={ () => { this.focusNextField('three') } }
              blurOnSubmit={ false }
              returnKeyType={ "next" }
              keyboardType={'email-address'}
            />

            <FormLabel>Message</FormLabel>
            <FormInput
              value={this.state.message}
              onChangeText={(text) => this.updateFormInput('message', text)}
              underlineColorAndroid='#D0CCD0'
              ref={ input => { this.inputs['three'] = input } }
              returnKeyType={ "done" }
            />

            <Button
              onPress={this.sendMessage}
              title="SUBMIT"
              color={'#272727'}
              large
              backgroundColor="#FFD700"
              buttonStyle={styles.button}
            />
          {/* </View> */}
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

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
  logoContainer: {
    maxHeight: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 170,
    maxHeight: 40
  },
  button: {
    marginTop: 40,
  }
})
