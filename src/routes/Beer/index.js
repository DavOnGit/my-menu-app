import React from 'react'
import { Text, Image, View, ScrollView, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native'
import { List, ListItem, FormLabel, FormInput, Button } from 'react-native-elements'
import Spinner from 'react-native-loading-spinner-overlay'
import { WebBrowser } from 'expo'

import firebase from '../../firebase'

class TapList extends React.Component {
  static navigationOptions = {
    title: 'TapList'
  }

  state = {
    tapList: []
  }

  async componentWillMount() {
    const tapList = await firebase.database().ref().child('ontap/').once('value')
    //const tapListString = await AsyncStorage.getItem('ontap')
    //const tapList = JSON.parse(tapListString)
    //console.log(tapList)
    this.setState({ tapList: tapList.val() })
  }

  render() {
    const { tapList } = this.state; console.log(!tapList.length)
    return (!tapList.length ?
      <View style={{flex: 1, backgroundColor: '#272727'}}>
        <Spinner
          visible={true}
          color={'#489'}
          textContent={"Loading..."}
          textStyle={{color: '#FFF'}}
          //overlayColor={'#272727'}
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

const tapList = [
  {
    brewer: 'Port Brewing/Lost Abbey',
    name: 'High Tide',
    style: 'seasonal IPA',
    alc: 6.5,
    ratebeer: 'https://www.ratebeer.com/beer/port-brewing-high-tide-fresh-hop-ipa/39965/#container'
  },
  {
    brewer: 'Dupont',
    name: 'Saison Bio',
    style: 'Saison',
    alc: 5.5,
    ratebeer: 'https://www.rtjhn7y6hjhf'
  },
  {
    brewer: 'BrewDog',
    name: 'Dead Pony Club',
    style: 'PaleAle',
    alc: 3.6,
    ratebeer: 'ebyyeh655'
  },
  {
    brewer: 'Lariano',
    name: 'Statale 52',
    style: 'APA',
    alc: 6,
    ratebeer: 'gb56y6yhhi'
  },
  {
    brewer: 'Reinaert',
    name: 'Grand Cru',
    style: 'Tripel',
    alc: 9,
    //ratebeer: 'e5h656h5yht'
  },
  {
    brewer: 'Lariano',
    name: 'La Grigna',
    style: 'Pils',
    alc: 4.6,
    ratebeer: 'b55y6rtybd'
  },
]
