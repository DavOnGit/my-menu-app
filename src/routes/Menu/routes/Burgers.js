import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'

export default class Burgers extends React.Component {
  static navigationOptions = {
    title: 'Burgers'
  }

  render() {console.log(this.props)
    const { screenProps } = this.props
    return (
      <ScrollView style={styles.container}>
        {
          screenProps.data && screenProps.data.map((burger, idx) => (
            <Card
              title={burger.name}
              titleStyle={{fontFamily: 'AlegreyaSansSC-Light', color: 'gold', fontWeight: 'normal', fontSize: 24, marginBottom: 5}}
              containerStyle={{backgroundColor: '#635255', borderRadius: 15, borderColor: '#635255'}}
              dividerStyle={{display: 'none'}}
              key={idx}>
              <Text style={{ color: '#FFFFFF', textAlign: 'center', fontFamily: 'AlegreyaSansSC-Regular', fontSize: 14}}>
                {burger.ingr}
              </Text>
            </Card>
          ))
        }
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
