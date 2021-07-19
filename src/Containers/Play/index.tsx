import React from 'react';
import Footer from '../../Components/Footer/Footer';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import styles from './styles.scss';
import {LinearTextGradient} from 'react-native-text-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Box from './Box';
import {useGlobal} from 'reactn';
import {StackScreenProps} from '@react-navigation/stack';
import {IMAGES} from '../../Themes';
import i18next from 'i18next';

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
  const handleGetAlarm = () => {
    navigation.navigate('AlarmScreen',{name: "Báo thức"});
  };
  const handleGetBedTime = () => {
    navigation.navigate('BedTimeScreen',{name:"Giờ đi ngủ"});
  };
  const handleGetTimer = () => {
    navigation.navigate('TimerScreen');
  };
  const handleGetOther = () => {
    navigation.navigate('OtherScreen',{name: "Khác"});
  };
  const handleGetSensor = () => {
    navigation.navigate('SensorScreen', {name: "Cảm biến"});
  };
  return (
    <ImageBackground source={IMAGES.imageBG} style={{flex: 1}}>
      <View style={{padding: 15, flex: 1}}>
        <View style={styles.header}>
          <View style={styles.headerContent1}>
            <LinearTextGradient
              locations={[0, 1]}
              colors={['#2E499C', '#00C7CC']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={styles.headerTextAddress}>
                {forecast ? forecast.name : `${i18next.t('Địa chỉ')}`}
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
                  ? (forecast.main.temp - 273.15).toFixed(1) +
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
          <Text style={{marginBottom: 30}}>{i18next.t('Routine')}</Text>
          <TouchableOpacity onPress={handleGetAlarm} style={styles.container}>
            <Box icon="sunny-outline" content={i18next.t('Báo thức')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGetBedTime} style={styles.container}>
            <Box icon="time-outline" content={i18next.t('Giờ đi ngủ')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGetTimer} style={styles.container}>
            <Box icon="alarm-outline" content={i18next.t('Hẹn giờ')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGetOther} style={styles.container}>
            <Box icon="ios-add-circle-outline" content={i18next.t('Khác')} />
          </TouchableOpacity>
          <Text style={{marginTop: 20, marginBottom: 30}}>
            {i18next.t('Automation')}
          </Text>
          <TouchableOpacity onPress={handleGetSensor} style={styles.container}>
            <Box
              icon="home"
              content={i18next.t('Cảm biến và thiết bị hỗ trợ')}
            />
          </TouchableOpacity>
        </View>
        <Footer navigation={navigation} onClick={onClick} isActive="Play" />
      </View>
    </ImageBackground>
  );
}
export default Profile;
