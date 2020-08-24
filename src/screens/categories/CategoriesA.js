/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Color from 'color';

// import utils
import getImgSource from '../../utils/getImgSource.js';

// import components
import TouchableItem from '../../components/TouchableItem';

// import colors
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    marginTop:50
  },
  cardImg: {borderRadius: 4},
  card: {
    marginVertical: 6,
    height: 100,
    resizeMode: 'cover',
  },

  priceText: {
    fontStyle: 'normal',
fontWeight: 'bold',
fontSize: 17,
lineHeight: 20,
display: 'flex',
alignItems: 'center',
textAlign: 'right',
letterSpacing: -0.3,
color: '#F2A83B',
alignSelf:'flex-end',
alignItems:'flex-end',
justifyContent:'flex-end',
  },

  cardInterior:{
display:'flex',
flexDirection:'row',
justifyContent:'space-between'
  },

  cardOverlay: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: Color(Colors.overlayColor).alpha(0.2),
    overflow: 'hidden',
  },
  cardContainer: {
    backgroundColor: '#323232',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor:'#979797',
    borderRadius:5,
    marginLeft:10,
    marginRight:10,
    marginTop:24,
    padding:10,
    paddingTop:20,
    paddingBottom:20,
  },

  cardContentText:{
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.3,
    color: '#A6A6A6',
  },

  cardTitle: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 20,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: -0.3,
    color:'#fff'
  },
});

export default class CategoriesA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          key: 1,
          imageUri: require('../../assets/img/pizza_3.jpg'),
          name: 'Pizza',
        },
        {
          key: 2,
          imageUri: require('../../assets/img/meat_1.jpg'),
          name: 'Grill',
        },
        {
          key: 3,
          imageUri: require('../../assets/img/spaghetti_2.jpg'),
          name: 'Pasta',
        },
        {
          key: 4,
          imageUri: require('../../assets/img/soup_1.jpg'),
          name: 'Soups',
        },
        {
          key: 5,
          imageUri: require('../../assets/img/salad_1.jpg'),
          name: 'Salads',
        },
        {
          key: 6,
          imageUri: require('../../assets/img/cake_2.jpg'),
          name: 'Dessert',
        },
      ],
    };
  }

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  navigateTo = screen => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  keyExtractor = (item, index) => index.toString();

  renderCategoryItem = ({item, index}) => (
    <ImageBackground
      key={index}
      source={getImgSource(item.imageUri)}
      imageStyle={styles.cardImg}
      style={styles.card}>
      <View style={styles.cardOverlay}>
        <TouchableItem
          onPress={this.navigateTo('Category')}
          style={styles.cardContainer}
          // borderless
        >
          <Text style={styles.cardTitle}>{item.name}</Text>
        </TouchableItem>
      </View>
    </ImageBackground>
  );

  render() {
    const {categories} = this.state;

    return (
      <ImageBackground  style={{ width: '100%', height: '100%', resizeMode: 'contain',backgroundColor:'#1C1C1C'}}>
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.cardContainer}>
        <View style={styles.cardInterior}>
          <Text style={styles.cardTitle}>
          CLASSIC BURGER
          </Text>
          <Text style={styles.priceText}>
          €10,00
          </Text>
          </View>
          <Text style={styles.cardContentText}>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </Text>
        
        </View>
        <View style={styles.cardContainer}>
        <View style={styles.cardInterior}>
          <Text style={styles.cardTitle}>
          CHEESEBURGER
          </Text>
          <Text style={styles.priceText}>
          €9,00
          </Text>
          </View>
          <Text style={styles.cardContentText}>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </Text>
        
        </View>
        <View style={styles.cardContainer}>
        <View style={styles.cardInterior}>
          <Text style={styles.cardTitle}>
          ONION BURGER
          </Text>
          <Text style={styles.priceText}>
          €12,00
          </Text>
          </View>
          <Text style={styles.cardContentText}>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </Text>
        
        </View>
        <View style={styles.cardContainer}>
        <View style={styles.cardInterior}>
          <Text style={styles.cardTitle}>
          FISH BURGER
          </Text>
          <Text style={styles.priceText}>
          €12,00
          </Text>
          </View>
          <Text style={styles.cardContentText}>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </Text>
        
        </View>
      </SafeAreaView>
      </ImageBackground>
    );
  }
}
