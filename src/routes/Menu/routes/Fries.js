import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'

export default class Fries extends React.Component {
  static navigationOptions = {
    title: 'Fries'
  }

  render() {console.log(this.props)
    return (
      <ScrollView style={styles.container}>
        {
          this.props.screenProps && this.props.screenProps.map((item, idx) => (
            <Card
              title={item}
              titleStyle={{fontFamily: 'AlegreyaSansSC-Light', color: 'gold', fontWeight: 'normal', fontSize: 24, marginBottom: 0}}
              containerStyle={{backgroundColor: '#635255', borderRadius: 15, borderColor: '#635255'}}
              dividerStyle={{display: 'none'}}
              key={idx}>
            </Card>
          ))
        }
        <Text style={{ color: '#D0CCD0', marginVertical: 20, textAlign: 'center' }}>
          * prodotto surgelato all'origine.
        </Text>
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
