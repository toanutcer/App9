import React from 'react';
import Footer from '../Footer/Footer';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Box from '../Play/Box';
import styles from '../Profile/styles.scss';
import {LinearTextGradient} from 'react-native-text-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { IMAGES } from "../../../constants";

// @ts-ignore
function Profile({navigation}) {
  return (
    <View style={{padding: 15, backgroundColor: '#E5E5E5', flex: 1}}>
      <View style={{flex: 12}}>
        <View style={styles.aaa}>
          <Image
            source={IMAGES.im_tokyo}
            style={styles.images}
          />
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
          <TouchableOpacity onPress={() => {}} style={styles.content}>
            <Box icon="keypad-outline" content="Cài đặt phòng" />
          </TouchableOpacity>
          <View style={{borderColor: '#eceaea', borderWidth: 1}} />
          <TouchableOpacity onPress={() => {}} style={styles.content1}>
            <Box icon="bluetooth-outline" content="Cài đặt HC" />
          </TouchableOpacity>
          <View style={{borderColor: '#eceaea', borderWidth: 1}} />
          <TouchableOpacity onPress={() => {}} style={styles.content}>
            <Box icon="sunny-outline" content="Cài đặt thiết bị" />
          </TouchableOpacity>
        </View>
        <View style={styles.item2}>
          <TouchableOpacity onPress={() => {}} style={styles.content}>
            <Box icon="settings-outline" content="Cài đặt chung" />
          </TouchableOpacity>
        </View>
        <View style={styles.item2}>
          <TouchableOpacity onPress={() => {}} style={styles.content}>
            <Box icon="document-text-outline" content="Trợ giúp và phản hồi" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.content}>
            <Box icon="download-outline" content="Cập nhật" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Profile;
