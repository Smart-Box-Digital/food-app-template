/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, ImageBackground, Text } from 'react-native';

// import components
import Button from '../../components/buttons/Button';
import LinkButton from '../../components/buttons/LinkButton';
import Logo from '../../components/logo/Logo';

// import colors
import Colors from '../../theme/colors';

// WelcomeA Config

// WelcomeA Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonsGroup: {
    flex: 3,
    alignItems: 'center',
    paddingHorizontal: 32,
    width: '100%',
  },
  vspace5: {
    height: 5,
  },
  vspace32: {
    height: 32,
  },
  linkButtonText: {
    color: Colors.onSurface,
    textAlign: 'center',
  },
  headerTextContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 30,
    color: '#fff',
    fontFamily: 'serif',
    paddingTop: 75
  },
  subHeaderText: {
    fontSize: 16,
    lineHeight: 19,
    color: '#fff',
    opacity: .8
  }

});

// WelcomeA Screen
export default class WelcomeA extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateTo = screen => () => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  render() {
    return (
      <ImageBackground source={require('./../../assets/img/bg.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar
            backgroundColor={Colors.statusBarColor}
            barStyle="dark-content"
          />

          <View style={styles.logoContainer}>
            <Logo size={100} />
          </View>

          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>
              Welkom bij The Burgery
            </Text>
            <Text style={styles.subHeaderText}>
              Kies hoe u wilt inloggen.
            </Text>
          </View>
          <View style={styles.buttonsGroup}>
            <Button
              buttonStyle={{ backgroundColor: '#F2A83B' }}
              onPress={this.navigateTo('SignUp')}
              title={'Inloggen met e-mailadres'}
            />
            <View style={styles.vspace5} />

            <View style={styles.buttonsGroup}>
              <Button
                onPress={this.createAccount}
                color="#3b5998"
                socialIconName="facebook-square"
                iconColor={Colors.white}
                title={'Inloggen met Facebook'}
              />

              <View style={styles.vspace5} />

              <Button
                onPress={this.createAccount}
                color="#db4437"
                socialIconName="google"
                iconColor={Colors.white}
                title={'Inloggen met Google'}
              />
              <View style={styles.vspace5} />

              <Button
                buttonStyle={{ backgroundColor: '#7D7D7D' }}
                onPress={this.navigateTo('SignIn')}
                title={'Bekijk & bestel'}
              />
            </View>


          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
