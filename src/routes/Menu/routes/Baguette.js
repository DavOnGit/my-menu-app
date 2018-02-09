import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'

import MenuItem from '../../../components/MenuItem'

export default class Baguette extends React.Component {
  static navigationOptions = {
    title: 'Baguettes'
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.screenProps &&
      this.props.screenProps.main &&
      !nextProps.screenProps) return false
  }

  render() {console.log(this.props)
    return (
      <ScrollView style={styles.container}>
            <Card
              title={'Componi con:'}
              titleStyle={{fontFamily: 'AlegreyaSansSC-Light', color: 'gold', fontWeight: 'normal', fontSize: 24, marginBottom: 5}}
              containerStyle={{backgroundColor: '#635255', borderRadius: 15, borderColor: '#635255'}}
              dividerStyle={{display: 'none'}}>
              {
                this.props.screenProps && this.props.screenProps.main.map((item, idx) => (
                  <Text key={idx}
                    style={{ color: '#FFFFFF', textAlign: 'center', fontFamily: 'AlegreyaSansSC-Regular', fontSize: 14}}>
                    {item}
                  </Text>
                ))
              }
            </Card>
            <Card
              title={'...e completa con:'}
              titleStyle={{fontFamily: 'AlegreyaSansSC-Light', color: 'gold', fontWeight: 'normal', fontSize: 24, marginBottom: 5}}
              containerStyle={{backgroundColor: '#635255', borderRadius: 15, borderColor: '#635255'}}
              dividerStyle={{display: 'none'}}>
              {
                this.props.screenProps && this.props.screenProps.addons.map((item, idx) => (
                  <Text key={idx}
                    style={{ color: '#FFFFFF', textAlign: 'center', fontFamily: 'AlegreyaSansSC-Regular', fontSize: 14}}>
                    {item}
                  </Text>
                ))
              }
            </Card>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727'
  }
})
