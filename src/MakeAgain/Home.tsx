import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICONS, SIZES, COLORS, FONTS, IMAGES} from '../../constants';
import {LinearTextGradient} from 'react-native-text-gradient';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../components/DungLienTungTuc/Switch/Switch.scss';

const Home = () => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: SIZES.width,
        }}>
        <View
          style={{
            flex: 1,
          }}>
          <TouchableOpacity>
            <LinearTextGradient
              style={{
                ...FONTS.h1,
                fontWeight: 'bold',
                paddingTop: SIZES.padding / 2,
              }}
              locations={[0, 1]}
              colors={[
                COLORS.colorLinearGradient1,
                COLORS.colorLinearGradient2,
              ]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text>54 Thụy Khuê, Tây Hồ</Text>
            </LinearTextGradient>
            <LinearTextGradient
              style={{...FONTS.h4}}
              colors={[
                COLORS.colorLinearGradient1,
                COLORS.colorLinearGradient2,
              ]}
              locations={[0, 1]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text>29 C , Độ ẩm 58% </Text>
            </LinearTextGradient>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={sitai.buttonContainer}>
          <LinearTextGradient
            style={{...FONTS.h1, ...SIZES.shadownss}}
            locations={[0, 1]}
            colors={[COLORS.colorLinearGradient1, COLORS.colorLinearGradient2]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <FontAwesome5Icon name={'bars'} size={20} />
          </LinearTextGradient>
        </TouchableOpacity>
      </View>
    );
  }
  function rederCategory() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <LinearTextGradient
            style={{...FONTS.h2, fontWeight: 'bold'}}
            colors={[COLORS.colorLinearGradient1, COLORS.colorLinearGradient2]}
            locations={[0, 1]}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}>
            <Text>Smart Light</Text>
          </LinearTextGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{...FONTS.h2, marginLeft: SIZES.padding2}}>
            Phòng khách
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{...FONTS.h2, marginLeft: SIZES.padding2}}>
            Phòng bếp
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  function renderScrence() {
    const [isEnabled, setIsEnabled] = React.useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
          }}>
          <TouchableOpacity>
            <Image
              source={IMAGES.im_bright}
              style={{
                width: 36,
                height: 36,
                borderRadius: SIZES.radius,
                marginRight: SIZES.padding,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={IMAGES.im_lampOnBedside}
              style={{
                width: 36,
                height: 36,
                borderRadius: SIZES.radius,
                marginRight: SIZES.padding,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={IMAGES.im_reading}
              style={{
                width: 36,
                height: 36,
                borderRadius: SIZES.radius,
                marginRight: SIZES.padding,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={IMAGES.im_office}
              style={{
                width: 36,
                height: 36,
                borderRadius: SIZES.radius,
                marginRight: SIZES.padding,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginRight: SIZES.padding,
            justifyContent: 'center',
          }}>
          <Switch
            style={styles.switch}
            trackColor={{false: COLORS.colorSwitch, true: COLORS.colorSwitch}}
            thumbColor={isEnabled ? COLORS.colorLinearGradient2 : COLORS.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    );
  }
  function renderMain() {
    return (
      <View>
        <Text>ahihi</Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('../image/1999.jpg')} style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            paddingBottom: SIZES.padding,
            paddingTop: SIZES.padding * 2,
            paddingLeft: SIZES.padding,
            paddingRight: SIZES.padding2 / 2,
          }}>
          {renderHeader()}
          {rederCategory()}
          {renderScrence()}
          {renderMain()}
        </View>
      </ImageBackground>
    </View>
  );
};
const sitai = StyleSheet.create({
  buttonContainer: {
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    shadowColor: 'black',

    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
});
export default Home;
