import React, {useCallback, useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';

import styles from './home.scss';
import SmartLight from '../../Components/SmartLight';
import Phongkhach from '../../Components/Phongkhach';
import Phongbep from '../../Components/Phongbep';
import Footer from '../../Components/Footer/Footer';
import AsyncStorage from '@react-native-community/async-storage';
import {setGlobal, useGlobal} from 'reactn';
import {StackScreenProps} from '@react-navigation/stack';
import {LinearTextGradient} from 'react-native-text-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import RNLocation from 'react-native-location';
import {IMAGES} from '../../Themes';
function Home({navigation, route}: StackScreenProps<any>) {
  useEffect(() => {
    async function getAddress() {
      try {
        let value = await AsyncStorage.getItem('address');
        if (value !== null) {
          setGlobal({
            address: value,
          });
        }
      } catch (e) {}
    }
    getAddress();
  }, []);

  const [isActive, setIsActive] = useState('1');
  const [test, setTest] = useState(() => {
    return <SmartLight navigation={navigation} route={route} />;
  });

  const onClickChonCanh = useCallback(
    s => {
      if (s === '1') {
        setTest(() => {
          return (
            <View style={{flex: 12}}>
              <SmartLight navigation={navigation} route={route} />
            </View>
          );
        });
      } else if (s === '2') {
        setTest(() => {
          return (
            <View style={{flex: 12}}>
              <Phongkhach />
            </View>
          );
        });
      } else if (s === '3') {
        setTest(() => {
          return (
            <View style={{flex: 12}}>
              <Phongbep />
            </View>
          );
        });
      }
    },
    [navigation, route],
  );
  const onClick = (s: string) => {
    if (s === 'Home') {
      navigation.navigate('Home');
    } else if (s === 'Profile') {
      navigation.navigate('Profile');
    } else if (s === 'Play') {
      navigation.navigate('Play');
    }
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [lat, setLat] = useState<any>();
  const [long, setLong] = useState<any>();
  RNLocation.configure({
    distanceFilter: 0,
    desiredAccuracy: {
      ios: 'best',
      android: 'balancedPowerAccuracy',
    },
    // Android only
    androidProvider: 'auto',
    interval: 100, // Milliseconds
    fastestInterval: 10000, // Milliseconds
    maxWaitTime: 5000, // Milliseconds
    // iOS Only
    activityType: 'other',
    allowsBackgroundLocationUpdates: false,
    headingFilter: 1, // Degrees
    headingOrientation: 'portrait',
    pausesLocationUpdatesAutomatically: false,
    showsBackgroundLocationIndicator: false,
  });

  RNLocation.checkPermission({
    ios: 'whenInUse', // or 'always'
    android: {
      detail: 'coarse', // or 'fine'
    },
  });
  RNLocation.requestPermission({
    ios: 'whenInUse', // or 'always'
    android: {
      detail: 'coarse', // or 'fine'
      rationale: {
        title: 'We need to access your location',
        message: 'We use your location to show where you are on the map',
        buttonPositive: 'OK',
        buttonNegative: 'Cancel',
      },
    },
  }).then(granted => {
    if (granted) {
      RNLocation.subscribeToLocationUpdates(locationss => {
        setLat(locationss[0].latitude.toString());
        setLong(locationss[0].longitude.toString());
      });
    }
  });
  console.log('Latitude = ', lat);
  console.log('Longtitude = ', long);
  let key = '7bbd1b7312e4bf1997c2139c3ec50004';
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
  const [forecast, setForecast] = useGlobal<any>('forecast');

  useEffect(() => {
    const loadForecast = async () => {
      if (lat && long) {
        await fetch(url)
          .then(res => res.json())
          .then(json => {
            setForecast(json);
          });
      }
    };
    loadForecast();
  }, [lat, long, setForecast, url]);
  console.log('Forecase = ', forecast);
  return (
    <ImageBackground source={IMAGES.imageBG} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent1}>
          <LinearTextGradient
            locations={[0, 1]}
            colors={['#2E499C', '#00C7CC']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.headerTextAddress}>
              {forecast ? forecast.name : 'Địa chỉ'}
              <Icon name="angle-down" size={20} />
            </Text>
          </LinearTextGradient>
          <LinearTextGradient
            locations={[0, 1]}
            colors={['#2E499C', '#00C7CC']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={styles.headerTextWeather}>
              {forecast
                ? forecast.main.temp -
                  273.15 +
                  '°C, ' +
                  'Độ ẩm ' +
                  forecast.main.humidity +
                  '%'
                : 'Thời tiết'}
            </Text>
          </LinearTextGradient>
        </View>
        <View style={styles.headerContent2}>
          <TouchableOpacity onPress={toggleModal}>
            <LinearTextGradient
              locations={[0, 1]}
              colors={['#2E499C', '#00C7CC']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Icon name="navicon" size={30} />
            </LinearTextGradient>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.categories}>
        <TouchableOpacity
          onPress={() => {
            onClickChonCanh('1');
            setIsActive('1');
          }}>
          <LinearTextGradient
            style={styles.category}
            locations={[0, 1]}
            colors={
              isActive === '1' ? ['#2E499C', '#00C7CC'] : ['#000', '#000']
            }
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={isActive === '1' ? {fontWeight: 'bold'} : {}}>
              Smart Light
            </Text>
          </LinearTextGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickChonCanh('2');
            setIsActive('2');
          }}>
          <LinearTextGradient
            style={styles.category}
            locations={[0, 1]}
            colors={
              isActive === '2' ? ['#2E499C', '#00C7CC'] : ['#000', '#000']
            }
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={isActive === '2' ? {fontWeight: 'bold'} : {}}>
              Phòng khách
            </Text>
          </LinearTextGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onClickChonCanh('3');
            setIsActive('3');
          }}>
          <LinearTextGradient
            style={styles.category}
            locations={[0, 1]}
            colors={
              isActive === '3' ? ['#2E499C', '#00C7CC'] : ['#000', '#000']
            }
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text style={isActive === '3' ? {fontWeight: 'bold'} : {}}>
              Phòng bếp
            </Text>
          </LinearTextGradient>
        </TouchableOpacity>
      </View>

      {/*  render*/}
      {test}
      {/*  end*/}
      <Footer navigation={navigation} onClick={onClick} isActive="Home" />
      <Modal style={styles.modal} isVisible={isModalVisible}>
        <ScrollView>
          <View style={{flex: 1, backgroundColor: '#E5E5E5', padding: 15}}>
            <View style={styles.header}>
              <View style={styles.boxHeader}>
                <LinearTextGradient
                  locations={[0, 1]}
                  colors={['#2E499C', '#00C7CC']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}>
                  <Text style={styles.textHeader}>Chọn cảnh</Text>
                </LinearTextGradient>
              </View>
              <View style={styles.itemHeader}>
                <TouchableOpacity onPress={toggleModal}>
                  <Icon2
                    style={styles.iconClose}
                    name="close-outline"
                    size={40}
                    color="red"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.item} />
          </View>
        </ScrollView>
      </Modal>
    </ImageBackground>
  );
}

export default Home;
