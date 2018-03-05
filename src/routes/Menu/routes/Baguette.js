import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import { translate } from 'react-i18next'

class Baguette extends React.Component {
  static navigationOptions = {
    title: 'Baguettes'
  }

  render() {//console.log(this.props)
    const { t, screenProps } = this.props
    return (
      <ScrollView style={styles.container}>
            <Card
              title={t('main')}
              titleStyle={{fontFamily: 'AlegreyaSansSC-Light', color: 'gold', fontWeight: 'normal', fontSize: 24, marginBottom: 5}}
              containerStyle={{backgroundColor: '#635255', borderRadius: 15, borderColor: '#635255'}}
              dividerStyle={{display: 'none'}}>
              {
                screenProps.data && screenProps.data.main.map((item, idx) => (
                  <Text key={idx}
                    style={{ color: '#FFFFFF', textAlign: 'center', fontFamily: 'AlegreyaSansSC-Regular', fontSize: 14}}>
                    {item}
                  </Text>
                ))
              }
            </Card>
            <Card
              title={t('addons')}
              titleStyle={{fontFamily: 'AlegreyaSansSC-Light', color: 'gold', fontWeight: 'normal', fontSize: 24, marginBottom: 5}}
              containerStyle={{backgroundColor: '#635255', borderRadius: 15, borderColor: '#635255'}}
              dividerStyle={{display: 'none'}}>
              {
                screenProps.data && screenProps.data.addons.map((item, idx) => (
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

export default translate('baguette')(Baguette)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727'
  }
})
