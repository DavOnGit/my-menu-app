import React from 'react'
import { Text, Image, View, ScrollView, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native'
import { List, ListItem, FormLabel, FormInput, Button } from 'react-native-elements'
import Spinner from 'react-native-loading-spinner-overlay'
import { WebBrowser } from 'expo'

import firebase from '../../firebase'

class TapList extends React.Component {
  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t('beer')
  })

  state = {
    tapList: []
  }

  async componentWillMount() {
    const tapList = await firebase.database().ref().child('ontap/').once('value')
    this.setState({ tapList: tapList.val() })
  }

  render() {
    const { tapList } = this.state
    return (!tapList.length ?
      <View style={{flex: 1, backgroundColor: '#272727'}}>
        <Spinner
          visible={true}
          color={'#489'}
          textContent={"Loading..."}
          textStyle={{color: '#FFF'}}
        />
      </View> :
      <ScrollView
        contentContainerStyle={styles.scroll}
      >
        <List containerStyle={styles.list}>
          {
            tapList.map((beer, idx) => (
              <ListItem
                title={beer.name}
                subtitle={`by ${beer.brewer}`}
                rightTitle={`${beer.style}\nalc: ${beer.alc}°`}
                containerStyle={styles.container}
                titleStyle={styles.title}
                rightTitleContainerStyle={styles.rightContainer}
                rightTitleStyle={styles.rightTitle}
                rightTitleNumberOfLines={2}
                rightIcon={
                  <TouchableOpacity
                    style={{backgroundColor: '#489', borderRadius: 50, opacity: beer.ratebeer ? 1 : 0.3}}
                    disabled={!beer.ratebeer}
                    onPress={ () => { WebBrowser.openBrowserAsync(beer.ratebeer) } }
                  >
                    <Image
                      resizeMode='contain'
                      source={require('../../../assets/images/ratebeer.png')}
                      style={{width: 24, height: 24, margin: 8}}
                    />
                  </TouchableOpacity>
                }
                key={idx}
              />
            ))
          }
        </List>
      </ScrollView>
    )
  }
}

export default TapList

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    minHeight: 480,
    backgroundColor: '#272727'
  },
  list: {
    flex: 1,
    marginTop: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderBottomColor: '#cbd2d9'
  },
  container: {
    flex: -1,
    justifyContent: 'center',
    height: 150,
    minHeight: 80,
    backgroundColor: '#272727',
    borderBottomWidth: 0
  },
  title:{
    color: 'gold',
    fontFamily: 'AlegreyaSansSC-Medium',
    fontSize: 20
  },
  rightContainer: { alignItems: 'center' },
  rightTitle: { textAlign: 'center' },
})
