import React from 'react';
import { Text, SafeAreaView, View, Image, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import PropTypes from 'prop-types';
const { height, width } = Dimensions.get('window');
export default class ImgSlide extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content1}>
          <Text style={styles.contentText}>{this.props.title}</Text>
        </View>
        <ImageSlider
          loop
          autoPlayWithInterval={this.props.playInterval}
          images={this.props.images} // DEBE SER UN ARRAY DE IMAGENES
          onPress={({ index }) => alert(index)}
          customSlide={({ index, item, style, width }) => (
            // Es importante poner estilo aquí para que se vea bien
            <View key={index} style={styles.containerSlide}>
              <View
                style={[
                  style,
                  styles.customSlide,
                  { backgroundColor: index % 2 === 0 ? 'white' : 'white' },
                ]}
              >
                <Image source={{ uri: item }} style={styles.customImage} />
              </View>
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {this.props.images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index ? styles.buttonSelected : { color: '#fff',fontSize: 20 }}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  slider: {
    backgroundColor: '#000',
    height: 350
  },
  content1: {
    width: '100%',
    height: 80,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    color: '#fff'
  },
  buttons: {
    zIndex: 1,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    opacity: 1,
    color: 'blue',
    fontSize: 20
  },
  customSlide: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: width,
    height: '100%',
  },
  containerSlide: {
    flex: 1,
  }
});

