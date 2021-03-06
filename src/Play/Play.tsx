import React from 'react';
import Footer from '../Footer/Footer';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles.scss';
import {LinearTextGradient} from 'react-native-text-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Box from './Box';
import {useGlobal} from 'reactn';
import {StackScreenProps} from '@react-navigation/stack';

function Profile({navigation}: StackScreenProps<any>) {
  const [forecast, setForecast] = useGlobal<any>('forecast');
  const onClick = (s: string) => {
    if (s === 'Home') {
      navigation.navigate('Home');
    } else if (s === 'Profile') {
      navigation.navigate('Profile');
    } else if (s === 'Play') {
      navigation.navigate('Play');
    }
  };
  return (
    <View style={{padding: 15, flex: 1}}>
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
      </View>
      <View style={styles.main}>
        <Text style={{marginBottom: 30}}>Routine</Text>
        <TouchableOpacity onPress={() => {}} style={styles.container}>
          <Box icon="sunny-outline" content="Báo thức" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.container}>
          <Box icon="time-outline" content="Giờ đi ngủ" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.container}>
          <Box icon="alarm-outline" content="Hẹn giờ" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.container}>
          <Box icon="ios-add-circle-outline" content="Khác" />
        </TouchableOpacity>
        <Text style={{marginTop: 20, marginBottom: 30}}>Automation</Text>
        <TouchableOpacity onPress={() => {}} style={styles.container}>
          <Box icon="home" content="Cảm biến và thiết bị hỗ trợ" />
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} onClick={onClick} isActive="Play" />
    </View>
  );
}
export default Profile;
