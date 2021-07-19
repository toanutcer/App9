import React from 'react';
import Footer from '../../Components/Footer/Footer';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Box from '../Play/Box';
import styles from '../Profile/styles.scss';
import {LinearTextGradient} from 'react-native-text-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';
import {IMAGES} from '../../Themes';
import i18next from 'i18next';

function Profile({navigation}: StackScreenProps<any>) {
  const onClick = (s: string) => {
    if (s === 'Home') {
      navigation.navigate('Home');
    } else if (s === 'Profile') {
      navigation.navigate('Profile');
    } else if (s === 'Play') {
      navigation.navigate('Play');
    }
  };
  const handleSettingRoom = () => {
    navigation.navigate('ScanRoom');
  };
  const handleSettingHC = () => {
    navigation.navigate('ScanHC');
  };
  const handleSettingDevice = () => {
    navigation.navigate('ScanDevice');
  };
  const handleHelpAndFeedback = () => {
    navigation.navigate('HelpAndFeedbackScreen');
  };
  const handleUpdate = () => {
    navigation.navigate('UpdateScreen');
  };
  const handleSetting = () => {
    navigation.navigate('SettingScreen');
  };
  return (
    <ImageBackground source={IMAGES.imageBG} style={{flex: 1}}>
      <View
        style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 15, flex: 1}}>
        <View style={styles.user}>
          <View style={styles.info1}>
            <Image
              source={require('assets/image/bright.png')}
              style={styles.avatar}
            />
          </View>
          <View style={styles.info2}>
            <Text style={styles.text1}>Khách thử nghiệm</Text>
            <Text style={styles.text2}>Điều khiển ngoài nhà đang tắt</Text>
          </View>
        </View>
        <View style={{flex: 11}}>
          <View>
            <View style={styles.headerContent1}>
              <Text style={styles.headerTextAddress}>54 Thụy Khê, Tây Hồ</Text>
              <Text style={styles.headerTextWeather}>
                10 phòng - 0 thiết bị
              </Text>
            </View>
          </View>
          <View style={styles.item1}>
            <TouchableOpacity onPress={() => {}} style={styles.content}>
              <View style={styles.header}>
                <View style={styles.headerContent1}>
                  <LinearTextGradient
                    locations={[0, 1]}
                    colors={['#2E499C', '#00C7CC']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <Text style={styles.headerTextAddress}>
                      54 Thụy Khê, Tây Hồ
                    </Text>
                  </LinearTextGradient>
                  <LinearTextGradient
                    locations={[0, 1]}
                    colors={['#2E499C', '#00C7CC']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <Text style={styles.headerTextWeather}>
                      10 phòng - 0 thiết bị
                    </Text>
                  </LinearTextGradient>
                </View>
                <View style={styles.headerContent2}>
                  <LinearTextGradient
                    locations={[0, 1]}
                    colors={['#2E499C', '#00C7CC']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <Icon name="chevron-forward-outline" size={25} />
                  </LinearTextGradient>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSettingRoom}
              style={styles.content}>
              <Box icon="sunny-outline" content={i18next.t("Cài đặt phòng")} />
            </TouchableOpacity>
            <View style={{borderColor: '#eceaea', borderWidth: 1}} />
            <TouchableOpacity onPress={handleSettingHC} style={styles.content1}>
              <Box icon="sunny-outline" content={i18next.t("Cài đặt HC")} />
            </TouchableOpacity>
            <View style={{borderColor: '#eceaea', borderWidth: 1}} />
            <TouchableOpacity
              onPress={handleSettingDevice}
              style={styles.content}>
              <Box icon="sunny-outline" content={i18next.t("Cài đặt thiết bị")} />
            </TouchableOpacity>
          </View>
          <View style={styles.item2}>
            <TouchableOpacity onPress={handleSetting} style={styles.content}>
              <Box icon="sunny-outline" content={i18next.t("Cài đặt chung")} />
            </TouchableOpacity>
          </View>
          <View style={styles.item2}>
            <TouchableOpacity
              onPress={handleHelpAndFeedback}
              style={styles.content}>
              <Box icon="sunny-outline" content={i18next.t("Trợ giúp và phản hồi")} />
            </TouchableOpacity>
            <View style={{borderColor: '#eceaea', borderWidth: 1}} />
            <TouchableOpacity onPress={handleUpdate} style={styles.content}>
              <Box icon="sunny-outline" content={i18next.t("Cập nhật")} />
            </TouchableOpacity>
          </View>
        </View>
        <Footer navigation={navigation} onClick={onClick} isActive="Profile" />
      </View>
    </ImageBackground>
  );
}
export default Profile;
