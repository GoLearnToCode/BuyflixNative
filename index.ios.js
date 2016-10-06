// You need React
var React = require('react')

// You need React Native, too
var ReactNative = require('react-native')

// React Native components you want to use
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = ReactNative

var BuyflixNative = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          KIEI-924 is pretty awesome!
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    fontFamily: 'Iowan Old Style',
    color: '#3366cc',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

AppRegistry.registerComponent('BuyflixNative', () => BuyflixNative)
