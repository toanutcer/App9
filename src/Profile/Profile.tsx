import React from 'react';
import Footer from '../Footer/Footer';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Box from '../Play/Box';
import styles from '../Profile/styles.scss';
import {LinearTextGradient} from 'react-native-text-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';

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
  return (
    <View
      style={{paddingLeft: 15, paddingRight: 15, paddingBottom: 15, flex: 1}}>
      <View style={styles.user}>
        <View style={styles.info1}>
          <Image
            source={require('../uploads/lisa.jpg')}
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
            <Text style={styles.headerTextWeather}>10 phòng - 0 thiết bị</Text>
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
            onPress={() => {
              navigation.navigate('ScanRoom');
            }}
            style={styles.content}>
            <Box icon="sunny-outline" content="Cài đặt phòng" />
          </TouchableOpacity>
          <View style={{borderColor: '#eceaea', borderWidth: 1}} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ScanHC');
            }}
            style={styles.content1}>
            <Box icon="sunny-outline" content="Cài đặt HC" />
          </TouchableOpacity>
          <View style={{borderColor: '#eceaea', borderWidth: 1}} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ScanDevice');
            }}
            style={styles.content}>
            <Box icon="sunny-outline" content="Cài đặt thiết bị" />
          </TouchableOpacity>
        </View>
        <View style={styles.item2}>
          <TouchableOpacity onPress={() => {}} style={styles.content}>
            <Box icon="sunny-outline" content="Cài đặt chung" />
          </TouchableOpacity>
        </View>
        <View style={styles.item2}>
          <TouchableOpacity onPress={() => {}} style={styles.content}>
            <Box icon="sunny-outline" content="Trợ giúp và phản hồi" />
          </TouchableOpacity>
          <View style={{borderColor: '#eceaea', borderWidth: 1}} />
          <TouchableOpacity onPress={() => {}} style={styles.content}>
            <Box icon="sunny-outline" content="Cập nhật" />
          </TouchableOpacity>
        </View>
      </View>
      <Footer navigation={navigation} onClick={onClick} isActive="Profile" />
    </View>
  );
}
export default Profile;
