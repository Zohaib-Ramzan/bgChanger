import React, {useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [bgChanger, setbgChanger] = useState('#000000');
  const [rectBgChanger, setrectBgChanger] = useState('');
  const [squareBgChanger, setsquareBgChanger] = useState('');
  const [circleBgChanger, setcircleBgChanger] = useState('');
  const [triangleBgChanger, settriangleBgChanger] = useState('');

  function colorChanger() {
    const hexRange = '0123456789ABCDEF';
    let bgcolor = '#';
    let rectbgcolor = '#';
    let squarebgcolor = '#';
    let circlebgcolor = '#';
    let trianglebgcolor = '#';

    for (let i = 0; i < 6; i++) {
      bgcolor += hexRange[Math.floor(Math.random() * 16)];
      rectbgcolor += hexRange[Math.floor(Math.random() * 16)];
      squarebgcolor += hexRange[Math.floor(Math.random() * 16)];
      circlebgcolor += hexRange[Math.floor(Math.random() * 16)];
      trianglebgcolor += hexRange[Math.floor(Math.random() * 16)]
    }
    console.log(bgcolor);
    setbgChanger(bgcolor);
    setrectBgChanger(rectbgcolor);
    setsquareBgChanger(squarebgcolor);
    setcircleBgChanger(circlebgcolor);
    settriangleBgChanger(trianglebgcolor);
  }

  return (
    <>
      <StatusBar backgroundColor={bgChanger} />
      <View style={[styles.container, {backgroundColor: bgChanger}]}>
        <View style={styles.shapesContainer}>
          <View style={[styles.rectView, {backgroundColor: rectBgChanger}]}>
            <Text style={styles.rectTxt}>Rectangle</Text>
          </View>
          <View style={[styles.squareView, {backgroundColor: squareBgChanger}]}>
            <Text style={styles.squareTxt}>Square</Text>
          </View>
        </View>
        <TouchableOpacity onPress={colorChanger}>
          <Text style={styles.btnTxt}>Press Me</Text>
        </TouchableOpacity>
        <View style={styles.shapesContainer2}>
          <View style={[styles.circleView , {backgroundColor : circleBgChanger}]}>
            <Text style={styles.circleTxt}>Circle</Text>
          </View>
          <View style={[styles.triangleView , {borderBottomColor : triangleBgChanger}]}>
            <Text style={styles.triangleTxt}>Triangle</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    backgroundColor: '#758283',
    padding: 5,
    paddingLeft: 20,
    height: 30,
    width: 100,
    textTransform: 'uppercase',
    borderRadius: 5,
  },
  shapesContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 60,
  },
  rectView: {
    position: 'absolute',
    width: 180, // Adjust the width as desired
    height: 100, // Adjust the height as desired
    backgroundColor: '#FF0000', // Adjust the background color as desired
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  rectTxt: {
    color: '#fff',
    justifyContent: 'center',
  },
  squareView: {
    position: 'absolute',
    top: 100,
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareTxt: {
    color: '#FFF',
  },
  shapesContainer2: {
    position: 'absolute',
    bottom: 150,
    left : 40,
    flexDirection : "row",
  },
  circleView: {
  height : 100,
  width : 100,
  borderRadius : 50,
  backgroundColor : "coral",
  justifyContent : "center",
  alignItems : "center",
  },
  circleTxt: {
    color : "#FFF"
  },
  triangleView : {
marginHorizontal : 80,
width: 0,
height: 0,
backgroundColor: 'transparent',
borderStyle: 'solid',
borderTopWidth: 0,
borderRightWidth: 45,
borderBottomWidth: 90,
borderLeftWidth: 45,
borderTopColor: 'transparent',
borderRightColor: 'transparent',
borderBottomColor: 'red',
borderLeftColor: 'transparent',
justifyContent : 'flex-end',
alignItems:"center",
  } , 
  triangleTxt : {
color : "#FFF",
marginBottom : 10,
position: 'absolute',
  }
});
