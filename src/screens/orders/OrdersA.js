/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import node modules
import React, {Component} from 'react';
import {
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

// OrdersA Styles
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


  borderOrange:{
    backgroundColor: '#F2A83B',
borderRadius: 5,
paddingLeft:5,
paddingRight:5,
  },

  priceTextBorder:{
    fontStyle: 'normal',
fontWeight: 'bold',
fontSize: 17,
lineHeight: 20,
display: 'flex',
alignItems: 'center',
textAlign: 'right',
letterSpacing: -0.3,
color: '#FFF',
alignSelf:'flex-end',
alignItems:'flex-end',
justifyContent:'flex-end',
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

  titlePage:{
fontWeight:'bold',
fontSize:24,
lineHeight:30,
color:'#fff',
marginTop:10,
marginLeft:10
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

// OrdersA
export default class OrdersA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [
        {
          orderNumber: '11',
          orderDate: '22 July, 2019',
          orderStatus: 'on-the-way',
          orderItems: [
            {
              name: 'Pizza',
              price: 4.99,
            },
            {
              name: 'Grill',
              price: 8.99,
            },
            {
              name: 'Pasta',
              price: 5.99,
            },
          ],
        },
        {
          orderNumber: '10',
          orderDate: '10 July, 2019',
          orderStatus: 'pending',
          orderItems: [
            {
              name: 'Pizza One',
              price: 7.99,
            },
            {
              name: 'Pizza Mozzarella',
              price: 8.99,
            },
            {
              name: 'Pizza Gorgonzola',
              price: 6.99,
            },
            {
              name: 'Pizza Funghi',
              price: 9.99,
            },
          ],
        },
        {
          orderNumber: '09',
          orderDate: '05 July, 2019',
          orderStatus: 'delivered',
          orderItems: [
            {
              name: 'Pizza Mozzarella',
              price: 8.99,
            },
            {
              name: 'Pizza Gorgonzola',
              price: 6.99,
            },
            {
              name: 'Pizza Funghi',
              price: 9.99,
            },
          ],
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

  keyExtractor = item => item.orderNumber.toString();

  renderItem = ({item, index}) => (
    <OrderItem
      key={index}
      activeOpacity={0.8}
      orderNumber={item.orderNumber}
      orderDate={item.orderDate}
      orderItems={item.orderItems}
      orderStatus={item.orderStatus}
      onPress={this.navigateTo('Product')}
    />
  );

  render() {
    const {orders} = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
      <ImageBackground  style={{ width: '100%', height: '100%', resizeMode: 'contain',backgroundColor:'#1C1C1C'}}>
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />
        <Text style={styles.titlePage}>MIJN BESTELLINGEN</Text>
        <View style={styles.cardContainer}>
        <View style={styles.cardInterior}>
          <Text style={styles.cardTitle}>
          24/07/2020
          </Text>
          <Text style={styles.priceText}>
          €10,00
          </Text>
          <View style={styles.borderOrange}>
          <Text style={styles.priceTextBorder}>
          BEKIJKEN
          </Text>
          </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
        <View style={styles.cardInterior}>
          <Text style={styles.cardTitle}>
          24/07/2020
          </Text>
          <Text style={styles.priceText}>
          €10,00
          </Text>
          <View style={styles.borderOrange}>
          <Text style={styles.priceTextBorder}>
          BEKIJKEN
          </Text>
          </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
        <View style={styles.cardInterior}>
          <Text style={styles.cardTitle}>
          24/07/2020
          </Text>
          <Text style={styles.priceText}>
          €10,00
          </Text>
          <View style={styles.borderOrange}>
          <Text style={styles.priceTextBorder}>
          BEKIJKEN
          </Text>
          </View>
          </View>
        </View>
      

      </SafeAreaView>
      </ImageBackground>
      </SafeAreaView>
    );
  }
}
